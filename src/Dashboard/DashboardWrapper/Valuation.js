import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';
import '../../css/Stock.css';

let arrayData = [];
class Valuation extends Component {
	constructor(props){
		super(props)
	}
    render(){
		arrayData= this.props.location.state;
        return(
			<div>
				<h5 className ="title">{arrayData.Name}</h5>
				<NavStock {...arrayData}> </NavStock>
		        <div id = "group1">
		            <h5>Valuation</h5>
		            <h6>Ratios </h6>
		            <div id ="catergory1">
		                <div> Fair Price </div>
		                <div> Dividend Yield % </div>
		                <div> Price/Sales </div> 
		                <div> Price/Earnings</div>
		                <div> Price/Forward Earnings</div> 
						<div> {arrayData.FairPrice}</div>
						<div> {arrayData.DividendYieldPercent}</div>
						<div> {arrayData.PriceSales}</div>
						<div> {arrayData.PriceEarnings}</div>
						<div> {arrayData.PriceForwardEarnings}</div>

		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th></th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
						  <th> Current </th>
						  <th> Industry </th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Price/Earnings</td>
					      <td>{arrayData.PriceEarnings2016}</td>
					      <td>{arrayData.PriceEarnings2017}</td>
						  <td>{arrayData.PriceEarnings2018}</td>
						  <td>{arrayData.PriceEarningsCurrent}</td>
						  <td>{arrayData.PriceEarningsIndustry}</td>
					    </tr>
					    <tr>
					      <td>Price/Sales</td>
					      <td>{arrayData.PriceSales2016}</td>
						  <td>{arrayData.PriceSales2017}</td>
						  <td>{arrayData.PriceSales2018}</td>
						  <td>{arrayData.PriceSalesCurrent}</td>
						  <td>{arrayData.PriceSalesIndustry}</td>

					    </tr>
					    <tr>
					      <td>Return On Assets %</td>
					      <td>{arrayData.ReturnOnAssets2016}</td>
						  <td>{arrayData.ReturnOnAssets2017}</td>
						  <td>{arrayData.ReturnOnAssets2018}</td>
						  <td>{arrayData.ReturnOnAssetsCurrent}</td>
						  <td>{arrayData.ReturnOnAssetsIndustry}</td>
					    </tr>
					    <tr>
					      <td>Return On Equity %</td>
					      <td>{arrayData.ReturnOnEquity2016}</td>
						  <td>{arrayData.ReturnOnEquity2017}</td>
						  <td>{arrayData.ReturnOnEquity2018}</td>
						  <td>{arrayData.ReturnOnEquityCurrent}</td>
						  <td>{arrayData.ReturnOnEquityIndustry}</td>
					    </tr>
					    <tr>
					      <td>Gross Margins</td>
					      <td>{arrayData.GrossMargins2016}</td>
						  <td>{arrayData.GrossMargins2017}</td>
						  <td>{arrayData.GrossMargins2018}</td>
						  <td>{arrayData.GrossMarginsCurrent}</td>
						  <td>{arrayData.GrossMarginsIndustry}</td>
					    </tr>
					    <tr>
					      <td> Operating Margin %</td>
					      <td>{arrayData.OperatingMargin2016}</td>
					      <td>{arrayData.OperatingMargin2017}</td>
						  <td>{arrayData.OperatingMargin2018}</td>
						  <td>{arrayData.OperatingMarginCurrent}</td>
						  <td>{arrayData.OperatingMarginIndustry}</td>
					    </tr>

					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default Valuation;