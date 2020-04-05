import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Table from 'react-bootstrap/table';

class KeyMetric extends Component {
    constructor (props) {
        super(props);
        console.log(this.props);

    }
    render (){
        let variable = this.props;
        return(
        <div>
            <h5  id ="title">Key Metric</h5>
            <Table striped bordered hover size="sm" >
              <tbody>
                <tr>
                    <td> Moat </td>
                    <td> No.of Fund owning </td>
                    <td> Shape Ratio </td> 
                    <td> Market Cap </td>
                    <td> Sector </td> 
                </tr>
                <tr>
                    <td>{variable.Moat}</td>
                    <td> {variable.Funds}</td>
                    <td> {variable.ShapeRatio}</td>
                    <td> {variable.MarketCap}</td>
                    <td> {variable.Sector}</td>
                </tr>
                <tr>
                    <td> Price/Sales </td>
                    <td> Price/Earnings </td>
                    <td> Forward P/E </td> 
                    <td> Price/Book </td>
                    <td> PEG Ratio </td>
                </tr>
                <tr>
                    <td> {variable.PriceSales}</td>
                    <td> {variable.PriceEarnings}</td>
                    <td> {variable.ForwardPE}</td>
                    <td> {variable.PriceBook}</td>
                    <td> {variable.PEGRatio}</td>
                </tr>
                <tr>
                    <td> Rev 3-Yr Growth </td>
                    <td> ROE % </td>
                    <td> Operating Margin </td> 
                    <td> Div Yield </td>
                    <td> Current Ratio </td> 
                </tr>
                <tr>
                    <td> {variable.Rev3YrGrowth}</td>
                    <td> {variable.ROE}</td>
                    <td> {variable.OperatingMargin}</td>
                    <td> {variable.DIVYield}</td>
                    <td> {variable.CurrentRatio}</td>

                </tr>
              </tbody>
            </Table>
        </div>
      );
    }
}
export default KeyMetric;