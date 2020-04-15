import React from 'react'
import styled from 'styled-components';
import { AppContext } from "../App/AppProvider";
import {fontSize1, blueBoxShadow, color3} from "../Shared/Styles";
import {Link} from 'react-router-dom';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3}
    ${fontSize1}
    padding: 5px;
    cursor: pointer
    &:hover {
        ${blueBoxShadow}
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`


export default function () {
    return (
        <Link to= {{pathname: "/Quote"}}>
        <AppContext.Consumer>
            {
                ({ confirmFavorites }) =>
                    <CenterDiv>
                        <ConfirmButtonStyled onClick={confirmFavorites}>
                            Confirm Favorites
                        </ConfirmButtonStyled >
                    </CenterDiv>
            }
        </AppContext.Consumer>
        </Link>
    )
}