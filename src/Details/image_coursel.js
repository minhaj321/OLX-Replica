import React ,{Component} from 'react';
export default class Image_Coursel extends Component{
render(){
	const detail_img={
    widht:"500px",
    height:"510px",
    marginLeft:"10px"
  }
return(

<div  style={{width:"98%", height:"400px"}} id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={detail_img} className="d-block w-100" src={this.props.path}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

	)}}