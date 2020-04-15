import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import {Col, Row, Container} from 'react-bootstrap';
import '../../css/EachStock.css';
import KeyMetric from './KeyMetric';
import NavStock from './NavStock';
import '../../css/Stock.css';
let arrayData = {};
class EachStock extends Component {
    constructor (props) {
        super(props);
        arrayData = this.props.history.location.metaData
                 == undefined ?this.props.location.state: this.props.history.location.metaData;   
        this.state = {
            arrayData : {...this.props.location.state}
        }
    }



    componentDidMount(){
        this.setState(this.props.history.location.metaData)
    }

    componentDidUpdate(){
        if(this.state.arrayData !== this.props.history.location.metaData){
            console.log("State", this.state.arrayData["Ticker"],"MetaArray", this.props.history.location.metaData["Ticker"])
            this.setState({
                arrayData: this.props.history.location.metaData
              })
        }
    }

    render(){
        console.log( "this is data in Stock" + JSON.stringify(arrayData));
        return(
            <div>
                <h5 className ="title">{this.state.arrayData.Name}</h5>
                <NavStock { ...this.state.arrayData}></NavStock>
                <Container id = "layout">
                    <Row id ="fix">
                        
                        <Col xs={6}><KeyMetric {...this.state.arrayData}></KeyMetric></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default EachStock;