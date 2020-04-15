import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from "../App/AppProvider";
import ReactHighcharts from 'react-highcharts/ReactHighstock';
import HighchartsTheme from './HighchartsTheme';

import StockCharts from './StockCharts';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function(){
    return(
        <AppContext.Consumer>
            {({historical, currentFavorite}) => 
            <Tile>
                <ReactHighcharts config={highchartsConfig(historical, currentFavorite)}/>
                {/* <StockCharts /> */}
            </Tile>
            
        }
            
        </AppContext.Consumer>
    )
}

