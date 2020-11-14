import React , {Component} from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import Menu from './../components/menu';
import Contact from './../components/contact';
import Before_Advertising from './../components/Before_Advertising';
import PhoneImages from './../CardImages/phoneimages.js';
import BikeImages from './../CardImages/BikeImages.js';
import CarImages from './../CardImages/carImages.js';
import HouseImages from './../CardImages/HouseImages.js';
import LandImages from './../CardImages/LandImages.js';
import TabletImages from './../CardImages/tabletImages.js';
import TVImages from './../CardImages/TvImages.js';
import SideMenu from './../components/sideMenu';
import Card from './../components/card';
import Related_Ads from './related_ads.js';
import './../components/component.css';
import Detail_Description from './detail_description.js';
import Detail_Details from './detail_details.js';
import Image_Coursel from './image_coursel';
import {Link} from 'react-router-dom';
import Detail_Sidebar from './detail_sidebar';


export default class Detail extends Component{
  constructor(){
    super();
    this.state={
      value:null,
      condition:false,
      widthOfCard:"70%"
    }
  };
      getValue =(getVal,cond)=>{
        this.setState({value:getVal});
        this.setState({condition:cond});
    };
render(){
  const detail_more_img={
    width:"100px",
    height:"70px",
    border:"2px solid lightgrey",
    marginLeft:"20px"
  };
  return(
  <div>

<Header/>
<Link to="/" style={{color:"black"}}><Menu  getValue={this.getValue}/></Link><hr/>

<Before_Advertising/>
{  this.state.condition ? 
  <>
    <SideMenu/> 
    <Card Num={this.state.value} Width={this.state.widthOfCard}/>
  </>
  :null   }
<div style={{width:"65%" , display:"inline-block"}}>
   
<Image_Coursel path={this.props.location.state.path}/>
<br/><br/><br/><br/><br/><br/>

<img style={detail_more_img} src={this.props.location.state.foo[0].path}/>
<img style={detail_more_img} src={this.props.location.state.foo[1].path}/>
<img style={detail_more_img} src={this.props.location.state.foo[2].path}/>
<img style={detail_more_img} src={this.props.location.state.foo[3].path}/>
<img style={detail_more_img} src={this.props.location.state.foo[4].path}/>
<br/>
<br/>
<h4 style={{marginLeft:"30px"}}>Details</h4>
<Detail_Details/>
<hr/>
<Detail_Description/>
<br/><br/>
<h4 style={{marginLeft:"20px"}}>Related Ads</h4>
<div className="row">
<div className="col-8">
<Related_Ads card={this.props.location.state.foo}/>
</div>
</div>

</div>
<div style={{width:"35%", position:"absolute" , Top:"20px",display:"inline-block"}}>
<Detail_Sidebar/></div>




<Contact/>
<Footer/>

 </div>
 )
}
}