import React, {Component} from 'react';
import {Nav, Table} from 'react-bootstrap';
import NavStock from './NavStock';
import '../../css/Stock.css';

let arrayData = [];
class FutureGrowth extends Component {
	constructor(props){
        super(props)
		
    }
    render(){
		arrayData = this.props.location.state;
		console.log("this is in Feature Growth "+arrayData.Revenue);
        return(
			<div>
				<h5 className ="title">{arrayData.Name}</h5>
				<NavStock { ...arrayData}></NavStock>
		        <div id = "group1">
		            <h5>Future Growth</h5>
		            <h6>Growth (3 years Annualized) </h6>
		            <div id ="catergory">
		                <div> Revenue % </div>
		                <div> Operating Income % </div>
		                <div> Net Income % </div> 
		                <div> EPS % </div>
		                <div> {arrayData.RevenuePercent}</div>
						<div> {arrayData.OperatingIncomePercent}</div>
						<div> {arrayData.NetIncomePercent}</div>
						<div> {arrayData.EPSPercent}</div>
		            </div>

		            <Table striped bordered hover size="sm" >
					  <thead>
					    <tr>
					      <th>Fiscal year is Jan-Dec</th>
					      <th>2014</th>
					      <th>2015</th>
					      <th>2016</th>
					      <th>2017</th>
					      <th>2018</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>Sales/Revenue</td>
					      <td>{arrayData.SalesRev2014}</td>
					      <td>{arrayData.SalesRev2015}</td>
					      <td>{arrayData.SalesRev2016}</td>
					      <td>{arrayData.SalesRev2017}</td>
						  <td>{arrayData.SalesRev2018}</td>
					    </tr>
					    <tr>
					      <td>Sale Growth%</td>
					      <td>{arrayData.SaleGrowth2014}</td>
					      <td>{arrayData.SaleGrowth2015}</td>
						  <td>{arrayData.SaleGrowth2016}</td>
						  <td>{arrayData.SaleGrowth2017}</td>
						  <td>{arrayData.SaleGrowth2018}</td>

					    </tr>
					    <tr>
					      <td>Net Income</td>
					      <td>{arrayData.NetIncome2014}</td>
					      <td>{arrayData.NetIncome2015}</td>
						  <td>{arrayData.NetIncome2016}</td>
						  <td>{arrayData.NetIncome2017}</td>
						  <td>{arrayData.NetIncome2018}</td>

					    </tr>
					    <tr>
					      <td>Net Income Growth %</td>
					      <td>{arrayData.NetIncomeGrowth2014}</td>
					      <td>{arrayData.NetIncomeGrowth2015}</td>
						  <td>{arrayData.NetIncomeGrowth2016}</td>
						  <td>{arrayData.NetIncomeGrowth2017}</td>
						  <td>{arrayData.NetIncomeGrowth2018}</td>
					    </tr>
					    <tr>
					      <td>EPS</td>
					      <td>{arrayData.EPS2014}</td>
						  <td>{arrayData.EPS2015}</td>
						  <td>{arrayData.EPS2016}</td>
						  <td>{arrayData.EPS2017}</td>
						  <td>{arrayData.EPS2018}</td>
					    </tr>
					    <tr>
					      <td>EPS Growth %</td>
					      <td>{arrayData.EPSGrowth2014}</td>
						  <td>{arrayData.EPSGrowth2015}</td>
						  <td>{arrayData.EPSGrowth2016}</td>
						  <td>{arrayData.EPSGrowth2017}</td>
						  <td>{arrayData.EPSGrowth2018}</td>
					    </tr>

					  </tbody>
					</Table>
		        </div>
	        </div>

        );
    }
}
export default FutureGrowth;