import React from 'react';
import axios from 'axios'
import _ from 'lodash';
import {Redirect} from 'react-router-dom';

import {parseTimeSeriesData} from '../api/index'

import {getDataFromApi}from '../api/index'

export const AppContext = React.createContext();
const alphaVantageKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prices: [],
            historical: [],
            page: 'dashboard',
            favorites: [],
            // ...this.savedSettings(),
            setPage: this.setPage,
            addStock: this.addStock,
            removeStock: this.removeStock,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setCurrentFavorite: this.setCurrentFavorite,
            setFilteredStocks: this.setFilteredStocks,
            currentFavorite: null
        }
    }

    componentDidMount = () => {
        this.savedSettings();
        this.fetchStockList();
        this.fetchStockData();
    }


    //Sample Axios fetch
    fetchStockData = () => {
        const ticker = this.state.currentFavorite
        axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${alphaVantageKey}`
        ).then(res => {
            const stockData = res.data;
            const historical = parseTimeSeriesData(stockData);
            console.log("Historical",historical)
            this.setState({ historical });
        }).catch(error => {
            // this.setState({ error: true })
            console.log(error)
        });
    };

    toArray = (object) =>{
        const dataArr = Object.keys(object)
            .map( (dataKey) => {
                return object[dataKey]
            })
        return dataArr
    }


    // fetchPrices = () => {
    //     if(this.state.firstVisit) return;
    //     let prices = this.prices();
    //     console.log(prices);
    //     this.setState({prices});
    // }

    prices = () => {
        let returnData = [];
        // for (let i = 0; i < this.state.favorites.length; i++) {
        //     axios.get(
        //         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.favorites[i]}&apikey=${alphaVantageKey}`
        //     ).then(res => {
        //         const priceList = res.data["Global Quote"];
        //         returnData.push(priceList);
        //         console.log(returnData);
        //         this.setState({ prices: returnData })
        //     }).catch(error => {
        //         console.log(error);
        //     });
        // }
        // return returnData
        for (let i = 0; i < this.state.favorites.length; i++) {
            const priceList = this.state.stockList[this.state.favorites[i]]
            returnData.push(priceList);
            console.log(returnData);
            this.setState({ prices: returnData })
        }

    }

    // fetchHistorical = () => {
    //     if(this.state.firstVisit) return;
    //     // let results = await this.historical();
    //     let historical = getDataFromApi(this.state.currentFavorite)
    //     console.log("HISTORIACAL", historical)
    //     // this.setState({historical})
    //     // console.log("Historical", results)
    // }

    // historical = () => {
    //     let promises = [];
    //     for(let units = TIME_UNITS; units >0; units--){
    //         promises.push(getDataFromApi(this.state.currentFavorite))
    //     }
    //     return Promise.all(promises);
    // }

    fetchStockList = () => {
        
        axios.get(
            `https://stockify-119ec.firebaseio.com/1JgrLHB9XKLonTtayrqZ9D7zkLLfnAwdAHIdhRYmbVGs/StockList.json`
        ).then(res => {
            const stockList = res.data;
            console.log(stockList)
            this.setState({ stockList }, this.prices);
            console.log(this.toArray(stockList));
        }).catch(error => {
            // this.setState({ error: true })
            console.log(error);
        });
    }

    addStock = key => {
        let favorites = [...this.state.favorites];
        if (favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({ favorites });
        }
    }

    removeStock = key => {
        let favorites = [...this.state.favorites];
        this.setState({ favorites: _.pull(favorites, key) })
    }

    isInFavorites = key => _.includes(this.state.favorites, key)

    confirmFavorites = () => {
        axios.put('https://stockify-119ec.firebaseio.com/favorites/-M0d7S2jeQln01wLXp91.json', this.state.favorites)

        let currentFavorite = this.state.favorites[0];
        axios.put('https://stockify-119ec.firebaseio.com/favorites/currentFavorite.json', {0: this.state.favorites[0]})
        

        this.setState({
            firstVisit: false,
            page: 'dashboard',
            currentFavorite,
        }, () => {
            this.prices();
        });

    }



    setCurrentFavorite = (sym) => {

        this.setState({
            currentFavorite: sym,
        }, this.fetchStockData)
        console.log("curr2", this.state.currentFavorite)
        axios.put('https://stockify-119ec.firebaseio.com/favorites/currentFavorite.json', {0: sym})
    };

    savedSettings() {
        const requestOne = axios.get('https://stockify-119ec.firebaseio.com/favorites/-M0d7S2jeQln01wLXp91.json')
        const requestTwo = axios.get('https://stockify-119ec.firebaseio.com/favorites/currentFavorite.json')
        
        axios.all([requestOne, requestTwo])
            .then(
                axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
     
             // use/access the results
            console.log("1", responseOne, responseTwo);
                const stockDashData = responseOne.data;
                if (!stockDashData) {
                    this.setState({ page: 'settings', firstVisit: true })
                } else {
                    let favorites = [...stockDashData];
                    let currentFavorite  = responseTwo.data[0]
                    // this.setState({ favorites }, this.prices);
                    this.setState({ favorites, currentFavorite},
                        // () =>{this.fetchStockData()}
                        );
                }
            })
        )
            // .then(res => {
            //     const stockDashData = res.data;
            //     console.log("stockData: ", res);
            //     if (!stockDashData) {
            //         this.setState({ page: 'settings', firstVisit: true })
            //     } else {
            //         let favorites = [...stockDashData];
            //         let currentFavorite  = stockDashData[0]
            //         // this.setState({ favorites }, this.prices);
            //         this.setState({ favorites, currentFavorite});
            //     }
            // })
    }

    setPage = page => this.setState({ page })

    setFilteredStocks = (filteredStocks) => this.setState({ filteredStocks })

    
    render() {
        let redirect = null
        if(!this.state.currentFavorite){
            redirect = <Redirect to="/Settings"/>
        }
        return (
            <AppContext.Provider value={this.state}>
                {redirect}
                {this.props.children}
            </AppContext.Provider>
        )
    }
}