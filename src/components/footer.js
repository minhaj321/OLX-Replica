import React ,{Component} from 'react';
import './component.css';
export default class Footer extends Component{
render(){
	const footer_style={
		height:"50px",
		background:"#0E6655"
	};
	return(
		<div style={footer_style}>
		<span className="footer_first_span"><b>Other Countries </b> India - South Africa - Indonesia</span>	
		<span className="footer_second_span"><b> Free Classifieds in Pakistan.</b> © 2006-2020 OLX
</span>
		</div>
		)}}