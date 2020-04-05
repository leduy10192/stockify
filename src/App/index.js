import React, { Component } from 'react';
import './App.css';
import StockCharts from '../Dashboard/StockCharts';

import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings'
import Content from '../Shared/Content';
import Dashboard from '../Dashboard';

import Header from '../Dashboard/DashboardWrapper/Header';
import Stock from '../Dashboard/DashboardWrapper/Stock';
import Quote from '../Dashboard/DashboardWrapper/./Quote';
import Footer from '../Dashboard/DashboardWrapper/Footer';
import FutureGrowth from '../Dashboard/DashboardWrapper/FutureGrowth';
import Valuation from '../Dashboard/DashboardWrapper/Valuation';
import FinancialHealth from '../Dashboard/DashboardWrapper/FinancialHealth';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  // componentDidMount = () => {
  //   this.fetchStocks();
  // }

  // fetchStocks = async () => {
  //   let response = await fetch(
  //     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${alphaVantageKey}`
  //   );
  //   const data = await response.json();
  // };


  render() {
    return (



      <AppLayout>

        {/* <Router>
          <div data-spy="scroll" >
            <Header />
            <Switch>
              <Route path="/" exact component={Stock} />
              <Route path="/Quote" component={Quote} />
              <Route path="/FutureGrowth" component={FutureGrowth} />
              <Route path="/Valuation" component={Valuation} />
              <Route path="/FinancialHealth" component={FinancialHealth} />
            </Switch>
            <Footer />
          </div>
        </Router> */}

        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
        {/* <StockCharts /> */}
      </AppLayout>
    );
  }
}

export default App;
