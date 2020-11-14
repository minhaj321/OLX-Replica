import React ,{Component} from 'react';
import './component.css';
export default class SideMenu extends Component{
render(){
	var SideMenu_style={
		width:"26%",
		display:'inline-block'
	};
	var input_style={
		width:'115px',
		height:"45px",
		background:"lightgrey",
		border:"0px",
		marginLeft:"4px",
		float:"left",
		borderBottom:"1px green solid"
	};
	var div_greater={
		height:"45px",
		width:"45px",
		background:"#91A2AB",
		display:"inline-block",
		fontSize:"25px"
	};
	var checkbox_style={
		height:'25px',
		width:"25px",
		float:"left",
		marginLeft:"10px"
	};
	var cond_span_style={
		marginLeft:"3px",
		float:"left"
	}
	return(
		<div style={SideMenu_style} className="SideMenu">
<h4>Houses</h4><br/>
<h6>Filters</h6><hr/>
<h6>CATEGORIES</h6>
<ul>
<li>All Categories</li>
<li>Property for Sale</li>
<li>Land & Plots (25795)</li>
<li>Houses (13795)</li>
<li>Apartments & Flats (4906)</li>
<li>Shops - Commercial Space (3344)</li>
<li>Portions & Floors (660)</li>
</ul><hr/>
<h6>LOCATIONS</h6>
<ul>
<li><b>Pakistan</b></li>
<li>Punjab (10671)</li>
<li>Sindh (5053)</li>
<li>Khyber Pakhtunkhwa (1780)</li>
<li>Islamabad Capital Territory (1354)</li>
<li>Azad Kashmir (242)</li>
<li style={{color:"blue"}}>View more</li></ul>
<hr/>
<h6>MAKE</h6>
<ul>
<li>Honda (10713)</li>
<li>Other Brands (1702)</li>
<li>Yamaha (1488)</li>
<li>Suzuki (1138)</li>
<li>United (794)</li>
<li  style={{color:"black"}}>View all</li></ul><hr/>
<h6>YEAR</h6>
<input type="number" style={input_style} placeHolder="Min" />
<input type="number" style={input_style} placeHolder="Max" />
<div style={div_greater}> > </div>
<br/><br/><hr/><h6>PRICE</h6>
<input type="number" style={input_style} placeHolder="Min" />
<input type="number" style={input_style} placeHolder="Max" />
<div style={div_greater}> > </div>
<br/><br/><hr/>


<h6>CONDITION</h6><br/>
<input type="checkbox" style={checkbox_style}/><span style={cond_span_style}>Used (15759)</span><br/><br/>
<input type="checkbox" style={checkbox_style}/><span style={cond_span_style}>New (3443)</span>
</div>  
		)}}













