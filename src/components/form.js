import React , {Component} from 'react';
import {Route ,Link} from 'react-router-dom';
export default class Form extends Component{
render(){
const button={
				width:"90%",marginLeft:"5%",
				height:"50px",
				marginTop:"10px",
				border:"2px black solid",
				borderRadius:"4px"
				}
	return(
<div className="center">
<div style={{border:"1px black solid",margin:"auto", marginTop:"2%",width:"32%"}}>
<Link to="/"><img style={{float:"right"}} width="20px" height="20px" src="data:image/png;base64,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"/>
</Link>
<br/>



<div style={{height:"150px",width:"150px",marginLeft:"30%"}} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height="150px" className="d-block w-100" src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img height="150px" className ="d-block w-100" src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img height="150px" className="d-block w-100" src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>






<br/>
<form>
<button style={button}>Continue With Phone</button>
<button style={button}>Continue With Facebook</button>
<button style={button}>Continue With Google</button>
<Link to="/sellcategories"><button style={button}>Continue With Email</button>
</Link>
<hr/>

<p style={{marginLeft:"18%" , fontSize:"11px"}}>We won't share your personal details with anyone</p><hr/>
<p style={{paddingRight:"15px",paddingLeft:"25px" , fontSize:"12px"}}>If you continue, you are accepting 
<span style={{color:"blue"}}> OLX Terms and Conditions and Privacy Policy</span></p>
</form>
<br/>
</div>
</div>
		)
}


	}