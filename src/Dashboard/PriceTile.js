import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { StockHeaderGridStyled } from '../Settings/StockHeaderGrid';
import {AppContext} from "../App/AppProvider";
import Quote from "../Dashboard/DashboardWrapper/Quote"

import { withRouter } from "react-router";

const JustifyRight = styled.div`
    justify-self: right;
`
const JustifyLeft = styled.div`
    justify-self: left;
`

const TickerPrice = styled.div`
    ${fontSizeBig}
`
const ChangePct = styled.div`
    color: green;
    margin-top: 0;
    ${props => props.red && css`
        color: red;
    `}
`
const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        display: grid; 
        ${fontSize3}
        grid-gap: 5px; 
        grid-template-columns: repeat(3, 1fr); 
        justify-items: right; 
    `}
    ${props => props.currentFavorite && css`
        ${greenBoxShadow}
        pointer-events: none; 
  `}
`

function ChangePercent({ stockChange }) {
    return (
        <JustifyRight>
            <ChangePct red={stockChange < 0}>
                {stockChange >= 0 ? `+${stockChange}` : stockChange}%
            </ChangePct>
        </JustifyRight>
    )
}

function PriceTileA({ sym, stockPrice, stockChange, currentFavorite, setCurrentFavorite}) {
    return (
        <PriceTileStyled onClick={setCurrentFavorite} currentFavorite = {currentFavorite}>
            <StockHeaderGridStyled>
                <div> {sym} </div>
                <ChangePercent stockChange={stockChange} />
            </StockHeaderGridStyled>
            <TickerPrice>
                ${stockPrice}
            </TickerPrice>
        </PriceTileStyled>
    )
}

function PriceTileCompact({ sym, stockPrice, stockChange, currentFavorite, setCurrentFavorite }) {
    return (
        <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
            <JustifyLeft> {sym} </JustifyLeft>
            <ChangePercent stockChange={stockChange} />
            <div>
                ${stockPrice}
            </div>
        </PriceTileStyled>
    )
}

let path;

class PriceTile extends Component {
    constructor(props) {
        super(props);
		path = this.props.history;
    }
    
    onSubmit(metaData){
        console.log("Path1",path)
        if(path == undefined){
            return;
        }
		path.push({
			pathname : '/Quote',
			metaData
        })
		//pushToNave(metaData);
    }
    

    render(){
        console.log("Path",path)
        let sym = this.props.price['Ticker']
        let stockPrice = this.props.price['Price']
        let stockChange = this.props.price['ChangePct']
        let TileClass = this.props.index < 5 ? PriceTileA : PriceTileCompact;
        return (
            <AppContext.Consumer>
                {({ currentFavorite, setCurrentFavorite, stockList}) => {
                    const tempt = stockList;
                    return(
                        <TileClass 
                            sym={sym} stockPrice={stockPrice}
                            stockChange={stockChange} 
                            currentFavorite= {currentFavorite === sym }
                            setCurrentFavorite = {
                                () => { 
                                    setCurrentFavorite(sym)
                                    this.onSubmit(tempt[sym])
                                    }
                                }
                            >
                        </TileClass >
                        )
                    }
                }
    
            </AppContext.Consumer>
        )
    }
}
export default withRouter(PriceTile);
// export default function ({ price, index }) {
//     let sym = price['Ticker']
//     let stockPrice = price['Price']
//     let stockChange = price['ChangePct']
//     let TileClass = index < 5 ? PriceTile : PriceTileCompact;

//     return (
//         <AppContext.Consumer>
//             {({ currentFavorite, setCurrentFavorite, stockList}) => {
//                 const tempt = stockList;
//                 return(
//                     <TileClass 
//                         sym={sym} stockPrice={stockPrice} 
//                         stockChange={stockChange} 
//                         currentFavorite= {currentFavorite === sym }
//                         setCurrentFavorite = {
//                             () => {
//                                 setCurrentFavorite(sym)
//                                 onSubmit(tempt[sym])
//                                 }
//                             }
//                         >
//                     </TileClass >
//                     )
//                 }
//             }

//         </AppContext.Consumer>
//     )
// }