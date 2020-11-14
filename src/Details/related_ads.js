import React ,{Component} from 'react';

export default class Related_Ads extends Component{
render(){
return(
<div style={{border:"1px lightgrey solid" , padding:"3px" }}>

<div className="card" style={{width: '9rem' ,
  padding:'5px' , display:"inline-block" , marginLeft:"15px"}}>
  <img width="70px" height='80px' src={this.props.card[5].path} className="card-img-top"/>
  <div className="card-body" style={{padding:'10px'}}>
 <div style={{textAlign:"left"}} className="card-text">
 <h4>Rs:{this.props.card[5].price}</h4>
 <p>{this.props.card[5].name}</p>
 <p>{this.props.card[5].add} <p style={{textAlign:"left" , position:'absolute' , right:"23px"}}>
 {this.props.card[5].date}</p></p>
</div>
 </div></div>


<div className="card" style={{width: '9rem' ,
  padding:'5px' , display:"inline-block" , marginLeft:"15px"}}>
  <img width="70px" height='80px' src={this.props.card[6].path} className="card-img-top"/>
  <div className="card-body" style={{padding:'10px'}}>
 <div style={{textAlign:"left"}} className="card-text">
 <h4>Rs:{this.props.card[6].price}</h4>
 <p>{this.props.card[6].name}</p>
 <p>{this.props.card[6].add} <p style={{textAlign:"left" , position:'absolute' , right:"23px"}}>
 {this.props.card[6].date}</p></p>
</div>
 </div></div>


<div className="card" style={{width: '9rem' ,
  padding:'5px' , display:"inline-block" , marginLeft:"15px"}}>
  <img width="70px" height='80px' src={this.props.card[7].path} className="card-img-top"/>
  <div className="card-body" style={{padding:'10px'}}>
 <div style={{textAlign:"left"}} className="card-text">
 <h4>Rs:{this.props.card[7].price}</h4>
 <p>{this.props.card[7].name}</p>
 <p>{this.props.card[7].add} <p style={{textAlign:"left" , position:'absolute' , right:"23px"}}>
 {this.props.card[7].date}</p></p>
</div>
 </div></div>

<div className="card" style={{width: '9rem' ,
  padding:'5px' , display:"inline-block" , marginLeft:"15px"}}>
  <img width="70px" height='80px' src={this.props.card[8].path} className="card-img-top"/>
  <div className="card-body" style={{padding:'10px'}}>
 <div style={{textAlign:"left"}} className="card-text">
 <h4>Rs:{this.props.card[8].price}</h4>
 <p>{this.props.card[8].name}</p>
 <p>{this.props.card[8].add} <p style={{textAlign:"left" , position:'absolute' , right:"23px"}}>
 {this.props.card[8].date}</p></p>
</div>
 </div></div>
</div>	
)}}