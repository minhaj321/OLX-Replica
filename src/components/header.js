import React , {Component} from 'react';
import './component.css';
import Name from './../images/name.png';
import {Link} from 'react-router-dom';
import Form from './form.js';
export default class Header extends Component{
render(){
	return(
	<nav style={{position:"fixed" , marginTop:"-78px" , zIndex:1 , width:"100%"}}
  className="navbar navbar-expand-lg navbar-light bg-light">

        <img width="60px" src={Name} alt="logo"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <form className="form-inline my-2 my-lg-0">
          
      <select className="header_select">
     <option disabled>Popular Location</option>
      <hr/>
      
      <option selected disabled>Pakistan</option>
      <option className="header_option">Punjab</option>
      <option className="header_option">Islamabad Capital Territory</option>
      <option className="header_option">Sindh</option>
      <option className="header_option">Khyber PakhtunKhwa</option>
    </select>  
          <input className="header_search mr-sm-2" type="search" placeholder=" Find Cars , mobile phones and more ..." />
          <button className=" btn my-2 my-sm-0" type="submit">
          <h5 className="header_login">Login</h5></button>
    	    <Link to="/form"> 
          <button className="sell_btn ml-sm-2 my-2 my-sm-0" type="botton">
          <h5 className="header_Sell">+ Sell</h5></button>
          </Link>
          </form>
        </div>
      </nav>
 )
}
}