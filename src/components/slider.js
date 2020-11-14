import React , {Component} from 'react';
import Display from './../images/display.png';
import './component.css';
export default class Slider extends Component{
render(){
  const display_style={
    margin:"auto"
  }
  return(<div>
        <img src={Display} alt="logo" style={display_style}/>
 </div>
 )
}
}