import React, {Component} from 'react';
import '../../css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import {MDBCol, MDBFormInline, MDBIcon} from "mdbreact";

class Header extends Component {
	render(){
		return (
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand href="/">Stockify</Navbar.Brand>
			

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
			    	<Nav className="mr-auto"/>
				    <Nav>
				    	<Nav.Link href="/">Home Page</Nav.Link>
				    	<Nav.Link href="#deets">Porfolio</Nav.Link>
				    	<Nav.Link href="#deets">Screener</Nav.Link>
				    </Nav>
				</Navbar.Collapse>
				
				<MDBCol md="2" >
			      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
			    </MDBCol>
				
			</Navbar>


		);
	}
}

export default Header;