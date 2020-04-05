import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Quote from './Quote';
import FutureGrowth from './FutureGrowth';
import Valuation from './Valuation';
import FinancialHealth from './FinancialHealth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import '../../css/Stock.css';


let path;
let remember;
class Stock extends Component {
	
	constructor(props) {
		super(props);
		path = this.props.history;
		this.state = {
			loading: false,
			datas: [],
		}
	}
	componentDidMount = () => {
		this.setState({loading:true});
		this.getData();
	}

	
	// pushToNave(metaData){
	// 	path.push({
	// 		metaData
	// 	});
	// }
	
	onSubmit(metaData){
		path.push({
			pathname : '/Quote',
			metaData
		})
		//pushToNave(metaData);
	}



	getData = async () =>{
		let response = await axios.get(
			`https://stockify-119ec.firebaseio.com/1JgrLHB9XKLonTtayrqZ9D7zkLLfnAwdAHIdhRYmbVGs/StockList.json`
		).then(res => {
				const stockList = res.data;
				//console.log(stockList)
				//console.log(stockList["ABMD"]["Change"])
				//list.push(stockList);
				this.setState({
					datas : res.data
				});
				
			 }).catch(error => {
				// this.setState({ error: true })
				console.log(error);
			});
	}
	
	render(){
		const tempt = this.state.datas;
		//console.log(tempt);
		return(
			
			<div className = "background">
				
				<Container>
					<Row>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['AAPL'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['GOOG'])}>
								<Image className="photo" src="https://europeanbusinessmagazine.com/wp-content/uploads/2019/09/alphabet.jpg"
									 thumbnail />
							</a>
						</Col>
						<Col >
							<a type = "button" onClick={e => this.onSubmit(tempt['MSFT'])}>
								<Image className="photo" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2r0Th?ver=5b7d"
									 thumbnail />
							</a>
						</Col>
						<Col >
							<a type = "button" onClick={e => this.onSubmit(tempt['AMZN'])}>
								<Image className="photo" src="https://www.fis.com/attach_fck/Amazon%20logo%20plain%20fis_com.png"
									 thumbnail />
							</a>
						</Col>
					</Row>
					<a className = "spaceBetweenImage"></a>
					<Row>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['FB'])}>
								<Image className="photo" src="https://www.facebook.com/images/fb_icon_325x325.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['V'])}>
								<Image className="photo" src="https://usa.visa.com/dam/VCOM/regional/lac/ENG/Default/Partner%20With%20Us/Payment%20Technology/visapos/full-color-800x450.jpg"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['MA'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['ADBE'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"
									 thumbnail />
							</a>
						</Col>
					</Row>
					<a className = "spaceBetweenImage"></a>
					<Row>
						<Col >
							<a type = "button" onClick={e => this.onSubmit(tempt['INTU'])}>
								<Image className="photo" src="https://www.intuit.com/ca/oicms/i_com_ca/uploads/2019/11/icom-intuit-nav-logo-1.png"
									 thumbnail />
							</a>
						</Col>
						<Col >
							<a type = "button" onClick={e => this.onSubmit(tempt['AVGO'])}>
								<Image className="photo" src="https://dividendsensei.com/wp-content/uploads/2019/07/Broadcom-Logo.png"
									 thumbnail />
							</a>
						</Col>
						<Col >
							<a type = "button" onClick={e => this.onSubmit(tempt['INTC'])}>
								<Image className="photo" src="https://www.ti.com/content/dam/ticom/images/identities/ti-brand/ti-stk-2c-pos-rgb-logo.png"
									 thumbnail />
							</a>
						</Col>
						<Col >
							<a type = "button" onClick={e => this.onSubmit(tempt['NKE'])}>
								<Image className="photo" src="https://www.dandodiary.com/wp-content/uploads/sites/893/2018/10/nike1.png"
									 thumbnail />
							</a>
						</Col>
					</Row>
					<a className = "spaceBetweenImage"></a>
					<Row>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['APD'])}>
								<Image className="photo" src="http://www.airproducts.com/~/media/Images/inline/Company/AirProducts-logo-pms347-PNG.png?la=en"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['SYK'])}>
								<Image className="photo" src="https://stryker-h.assetsadobe.com/is/image//content/dam/stryker/about/news/images/stryker_logo2015_web.jpg?$preset_307_184$"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['BMY'])}>
								<Image className="photo" src="https://www.bms.com/assets/bms/us/en-us/images/bms-logo-social-default-card.jpg"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['XLNX'])}>
								<Image className="photo" src="https://www.azom.com/images/suppliers/ImageForSupplier_14782_15768414522228549.png"
									 thumbnail />
							</a>
						</Col>
					</Row>
					<a className = "spaceBetweenImage"></a>
					<Row>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['MMC'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/MMC_Corporation_logo.svg/1200px-MMC_Corporation_logo.svg.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['ISRG'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Intuitive_Surgical_logo.svg/1200px-Intuitive_Surgical_logo.svg.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['ORCL'])}>
								<Image className="photo" src="https://hubsportsboston.com/wp-content/uploads/2016/12/Oracle-corporate-team-logo.jpg"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['CSCO'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png"
									 thumbnail />
							</a>
						</Col>
					</Row>
					<a className = "spaceBetweenImage"></a>
					<Row>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['SBUX'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['MCD'])}>
								<Image className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['HLT'])}>
								<Image className="photo" src="https://www.complaintsdepartment.com/image/15/600/hilton-worldwide-logo.png"
									 thumbnail />
							</a>
						</Col>
						<Col>
							<a type = "button" onClick={e => this.onSubmit(tempt['DLR'])}>
								<Image className="photo" src="https://www.gipartners.com/system/uploads/fae/image/asset/467/GI_portfolio-logos_Digital-Reality-Trust.png"
									 thumbnail />
							</a>
						</Col>
					</Row>
				</Container>
		    </div>
		);
	}
}

export default Stock; 