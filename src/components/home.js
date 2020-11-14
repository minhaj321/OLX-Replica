import React ,{Component} from 'react';
import './../App.css';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import Card from './card';
import PhoneImages from './../CardImages/phoneimages.js';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './slider';
import After_Advertising from './After_Advertising';
import Before_Advertising from './Before_Advertising';
import SideMenu from './sideMenu';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            value:PhoneImages,
            condition:false,
            widthOfCard:"96%"
            
        };
    }
    getValue =(getVal,cond)=>{
        this.setState({value:getVal});
        this.setState({condition:cond});
        if(cond){
        this.setState({widthOfCard:'70%'});}
        else{
        this.setState({widthOfCard:'96%'});}
    };
render(){
    console.log(this.state.detail)
 return (
    <div className="App">
    <Header/> 
     <Menu getValue={this.getValue}/>
      <Slider/>
    <Before_Advertising/>
    {  this.state.condition ? <SideMenu/> :null   }
      <Card Num={this.state.value} Width={this.state.widthOfCard}/>
     <After_Advertising/>
    <Contact/>
    
    <Footer/>
    </div>
  )
  }}
 
  
