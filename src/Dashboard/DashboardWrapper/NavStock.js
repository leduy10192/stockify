import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../css/EachStock.css';
import {Link} from 'react-router-dom';

let arrayData = [];
class NavStock extends Component {
    constructor(props){
        super(props)
        //arrayData = this.props;
        // path = this.props;
       
    }
    render(){
        arrayData = this.props;
        console.log( "this is data in nav" + JSON.stringify(this.props));
       return(
        <div>
             {/* <Nav id = "options" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href = '/Quote'>Quote </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href = '/FutureGrowth'>Future Growth</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href = '/Valuation'>Valuation</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href = '/FinancialHealth'>Financial Health</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link >Company information</Nav.Link>
                </Nav.Item>
            </Nav> */}

            <nav className = "nav-link1">
                <ul className="nav-link2">
                    <Link to = {
                        {
                            pathname: "/Quote",
                            state: arrayData
                        }
                    }>
                        <li> Quote </li>
                    </Link>

                    <Link to = {
                        {
                        pathname: "/FutureGrowth",
                        state: arrayData
                        }
                    }>
                        <li> Future Growth </li>
                    </Link>

                    <Link to = {
                        {
                        pathname: "/Valuation",
                        state: arrayData
                        }
                    }>
                        <li> Valuation </li>
                    </Link>
                    <Link to = {
                        {
                        pathname: "/FinancialHealth",
                        state: arrayData
                        }
                    }>
                        <li>Financial Health </li>
                    </Link>
                    <Link>
                        <li> Company information </li>
                    </Link>
                </ul>
            </nav>


        </div>
        );
    }
}
export default NavStock;