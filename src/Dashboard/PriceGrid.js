import React from 'react';
import styled from 'styled-components';

import {AppContext} from "../App/AppProvider";
import PriceTile from './PriceTile';


const PriceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px
    margin-bottom: 60px
`
export default function () {
    return (
        <AppContext.Consumer>
            {({prices, currentFavorite}) => {
                return(
                currentFavorite?    
                <PriceGrid>
                    {prices.map((price, index) => (<
                        div><PriceTile index={index} price={price} /></div>
                    ))}
                </PriceGrid>
                :<h1> Please choose at least one company </h1>
            )}}
        </AppContext.Consumer>
    );
}