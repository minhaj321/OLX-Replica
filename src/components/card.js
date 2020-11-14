import React ,{Component} from 'react';
import PhoneImages from './../CardImages/phoneimages.js';
import BikeImages from './../CardImages/BikeImages.js';
import CarImages from './../CardImages/carImages.js';
import HouseImages from './../CardImages/HouseImages.js';
import LandImages from './../CardImages/LandImages.js';
import TabletImages from './../CardImages/tabletImages.js';
import TVImages from './../CardImages/TvImages.js';
import {Route ,Link} from 'react-router-dom';
export default class Card extends Component{
constructor(props){
	super(props);
	this.state={
width:'96%'
	}
};
render()
{
	var Card_style={
		background:"#ebeeef",
		width:this.state.width,
		marginLeft:"2%",
		float:'right'
	}

	if(this.props.Width!=="96%") {Card_style.width=this.props.Width}
		else
			{Card_style.width='96%'}

return(

		<div style={Card_style}>
		<h4  className="name">Based on your last search </h4><span className="my">view more</span><br/><br/>

	{	this.props.Num.map(({id,path,price,name,add,date})=><div key={id} className="card" style={{width: '17rem' ,
	padding:'14px' , display:"inline-block" , margin:"4px"}}>
	<Link to={{pathname:"/detail",state:{foo:this.props.Num , id:id,path:path} }}>
  <img width="140px" height='160px' src={path} className="card-img-top"/>
  </Link>
  <div className="card-body" style={{padding:'10px'}}>
 <div style={{textAlign:"left"}} className="card-text">
 <h4>Rs:{price}</h4>
 <p>{name}</p>
 <p>{add} <span style={{textAlign:"left" , position:'absolute' , right:"23px"}}>{date}</span></p>
</div>
 </div></div>)}
<br/><br/> </div> )

}}		

