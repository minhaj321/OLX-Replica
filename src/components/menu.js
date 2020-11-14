import React ,{Component} from 'react';
import './component.css';
import Categories from './Categories';
import Home from "./home.js";
import PhoneImages from './../CardImages/phoneimages.js';
import BikeImages from './../CardImages/BikeImages.js';
import CarImages from './../CardImages/carImages.js';
import HouseImages from './../CardImages/HouseImages.js';
import LandImages from './../CardImages/LandImages.js';
import TabletImages from './../CardImages/tabletImages.js';
import TVImages from './../CardImages/TvImages.js';
export default class Card extends Component{
	constructor(){
		super();
		this.state={
			toggle:false
		};
	}
	togglehandler=()=>{
this.setState({toggle:!this.state.toggle});
	}
render(){
	const Menu_style={
		height:"30px",
		background:"white",
		textAlign:"left",
		marginTop:"75px"
	};
	return(<div style={Menu_style}>

		<span style={{ fontWeight:'bold' ,marginLeft:'20px',cursor:'pointer' }} onClick={this.togglehandler}>All CATEGORIES
		 <span style={{ fontSize:'20px' ,marginLeft:"10px"}}>V</span>
		</span>{this.state.rend}
		<ul className="menu_ul">
<li onClick={() => this.props.getValue(PhoneImages,true)}>Moblie Phones</li>
<li onClick={() => this.props.getValue(CarImages,true)}>Cars</li>
<li onClick={() => this.props.getValue(BikeImages,true)}>MotorCycles</li>
<li onClick={() => this.props.getValue(HouseImages,true)}>Houses</li>
<li onClick={() => this.props.getValue(TVImages,true)}>TV - Video - Audio</li>
<li onClick={() => this.props.getValue(TabletImages,true)}>Tablets</li>
<li onClick={() => this.props.getValue(LandImages,true)}>Land & Ports</li>
	</ul>
	<div>{this.state.toggle ? <Categories/> :null}</div>
	</div>
		

		)}}
