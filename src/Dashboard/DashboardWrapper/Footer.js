import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/bootstrap.min.css';
import {MDBContainer} from'mdbreact';
import '../../css/footerStyle.css';
// import footerStyle from './css/footerStyle.css';

class Footer extends Component{
	render(){
		return (
			<div className ='main-footer' id ='footer' >
				<div className ='container'>
					<div className ='row'>
						<div className ='col-md-4 col-sm-4' >
							<h6> Company</h6>
							<p> 
							A web application that turns a substantial amount of stock data into 
					        interactive visuals and infographics.
							</p>
						</div>
						<div className ='col-md-3 col-sm-3' ></div>
						<div className ='col-md-2 col-sm-2'>
							<h6> About us</h6>
							<ul className ='list-unstyled'>
								<a href="https://github.com/dohdat/stockify">GitHub</a>
		           				<p>
					              <a href="#!">FAQ</a>
					            </p>
							</ul>
						</div>
						<div className ='col-md-3 col-sm-3'>
							<h6> Contact</h6>
							<ul className ='list-unstyled'>
								<p>San Jose, SJ 95132, US</p>
		           				<p> info@example.com</p>
							</ul>
						</div>

						<MDBContainer>
							<p className="text-center">&copy; {new Date().getFullYear()} Copyright: 
								<a href="https://github.com/chloephan/Stockify.git"> Stockify </a> 
							</p>
						</MDBContainer>

					</div>
				</div>
			</div>
  		);
}}
export default Footer;