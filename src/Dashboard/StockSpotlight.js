import React from 'react';
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import StockImage from '../Shared/StockImage';

const SpotlightName = styled.h2`
  text-align: center;
`

export default function (){
  return (
    <AppContext.Consumer>
      {({currentFavorite, stockList}) =>{
        return( currentFavorite? <Tile >
          <SpotlightName> {stockList[currentFavorite]["Name"]} </SpotlightName>
          <StockImage spotlight stock={stockList[currentFavorite]}/>
        </Tile>:  <div></div>
        )}}
    </AppContext.Consumer>
  )
}
