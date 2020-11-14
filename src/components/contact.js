import React ,{Component} from 'react';
import './component.css';
import Contact_img from './../images/contact.png';
export default class Contact extends Component{
render(){
	const Contact_part_style={
		width:'20%',
		display:'inline-block'
	};
	const Contact_style={
		height:"200px",
		background:"#ebeeef",
		marginTop:"20px",
		borderTop:"1px grey solid"
	};
	return(
		<div style={Contact_style}>
		<div style={Contact_part_style}>
		<br/>
		<b className="contact_b">POPULAR CATEGORIES</b>
		<br/>
		<ul className="contact_ul">
		<li>Cars</li>
		<li>Flats for rent</li>
		<li>Jobs</li>
		<li>Mobile Phones</li>
		</ul>
		</div>
		<div style={Contact_part_style}>
		<br/>
		<b className="contact_b">TRENDING SEARCHES</b>
		<br/>
		<ul className="contact_ul">
		<li>Bikes</li>
		<li>Watches</li>
		<li>Books</li>
		<li>Dogs</li>
		</ul>
		</div>
		<div style={Contact_part_style}>
		<br/>
		<b className="contact_b">ABOUT US</b>
		<br/>
		<ul  className="contact_ul">
		<li>About OLX Group</li>
		<li>OLX Blog</li>
		<li>Contact Us</li>
		<li>OLX For Businesses</li>
		</ul>
		</div>
		<div style={Contact_part_style}>
		<br/>
		<b className="contact_b">OLX</b>
		<br/><br/>
		<ul  className="contact_ul">
		<li>Help</li>
		<li>Sitemap</li>
		<li>Legal and Privacy Information</li>
		</ul>
		</div>
		<div style={Contact_part_style}>
		<b className="contact_b cotact_follow">FOLLOW US</b><br/>
		<img className="cotact_follow" width="200px" height="120px" src={Contact_img}/>
		</div>

		</div>
		)}}