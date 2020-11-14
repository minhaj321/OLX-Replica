import React , {Component} from 'react';
import {Route ,Link} from 'react-router-dom';
import Name from './../images/name.png';
export default class Sell_Categories extends Component{
constructor(){
	super();
	this.state={
		second_disp:false,
		Disp_id:null
	}
}
second_div=(get) =>{
this.setState({second_disp:true}) ;
this.setState({Disp_id:get-1})
}

render(){
console.log(this.state.Disp_id)
const categories=[
{id:1, Names:"Mobiles", more:['Tablets','Accesories','Mobile Phones']},

{id:2, Names:"Vehicles", more:['Cars','Cars on intallment','Cars Accesories','Spare Parts'
,'Buses , Vans & Trucks','Rikshaw & chingchi','Other Vehicles','Boats','Tractors & Trailors']},

{id:3, Names:"Property for sale", more:['Land & Ports','Houses','Appartment & Flats'
,'Shops - Offices - Commercial Space','Portions & Floors']},

{id:4, Names:"Property for rent", more:['Houses','Apartments & Flats','Portions & Floors'
,'Shops - Offices - Commercial Space','Rooms','Roommates & Paying Guests','Vacation Rentals - Guest Houses'
,'Land & Plots']},

{id:5, Names:"Electronics & Home Appliances" ,more:['Computers & Accessories'
,'TV - Video - Audio','Cameras & Accessories','Games & Entertainment','Other Home Appliances'
,'Generators, UPS & Power Solutions','Kitchen Appliances','AC & Coolers','Fridges & Freezers'
,'Washing Machines & Dryers']},

{id:6, Names:"Bikes",more:['Motorcycles','Spare Parts','Bicycles','ATV & Quads','Scooters']},

{id:7, Names:"Business , Industrial & Agriculture",
more:['Business for Sale','Food & Restaurants','Trade & Industrial','Agriculture'
,'Construction & Heavy Machinery','Other Business & Industry','Medical & Pharma']},

{id:8, Names:"Services", 
more:['Education & Classes','Travel & Visa','Car Rental','Drivers & Taxi','Web Development'
,'Other Services','Electronics & Computer Repair','Event Services','Health & Beauty'
,'Maids & Domestic Help','Movers & Packers','Home & Office Repair','Catering & Restaurant','Farm & Fresh Food']},

{id:9, Names:"Jobs", more:['Online'
,'Marketing','Advertising & PR','Accounting & Finance','Manufacturing','Education','Customer Service'
,'Hotels & Tourism','Medical','Sales','IT & Networking','Clerical & Administration','Human Resources','Part - Time','Domestic Staff','Other Jobs']},

{id:10, Names:"Animals", more:['Birds','Hens & Aseel','Dogs','Pet Food & Accessories',
'Livestock','Horses','Cats','Fish & Aquariums','Other Animals']},

{id:11, Names:"Furniture & Home Decor", more:['Sofa & Chairs','Other Household Items','Curtains & Blinds'
,'Garden & Outdoor','Painting & Mirrors','Beds & Wardrobes','Home Decoration','Tables & Dining'
,'Rugs & Carpets','Office Furniture']},

{id:12, Names:"Fashion & Beauty", more:['Jewellery','Make Up','Footwear','Lawn & Pret'
,'Couture','Skin & Hair','Watches','Wedding','Clother','Accessories']},

{id:13, Names:"Books , Sports & Hobbies" ,more:['Books & Magazines','Musical Instruments','Other Hobbies'
,'Sports Equipment','Gym & Fitness','','','','','','','']},

{id:14, Names:"Kids" ,more:['Kids Accessories','Swings & Slides','Prams & Walkers','Kids Furniture'
,'Toys','Kids Bikes']}
];	


	return(
<div><nav className="bg-light">
<Link to="/"><img width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAAAdVBMVEX///8AAABDQ0O/v7/8/Pzv7+/4+PjOzs7p6elra2vV1dVdXV2AgIDZ2dmHh4fc3NykpKTGxsaWlpYgICCwsLDk5OS4uLiampqQkJArKytPT09gYGBxcXE6OjpHR0cmJiYLCwsyMjIVFRV2dnZXV1c+Pj6Dg4Nm1U8eAAAEBklEQVR4nO3d61JiMRAEYCJy8woqoKIgiL7/Iy4UJeSck5NMb7k7TVV/T9A/wElPQtnpiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIyP/UH3on+GuzRdhZjea33klwg8dwtO15p8H0rkPFwDsQ4jnUdb0jmXUb2XeuvFPZTC9S4UO49A5mcHmTzh7CnXe0sqe27Dve2UquXjLhw8Q7XlZvlMtO/tGZ57OHsPBO2G7yUQofLrwzthm+FrPzpr8zZA/h2jtm0syUnfNbe/9uDE941Om/WbMTTquxPTvdBycuIGVcp7R6ASngOiE3C0gW1Vc2WUAymIr5dIllZ/rCtheQtCXTUidXQFKYPvH5AtL07B040i8UkDqqNVSxgFR9MHVBQwGpePAOHDEVkMiC6UNjKyBHj0yLS2sB+TH2DhyxF5CDt7534hOkgOyt770TR5ACsvfkHTiCFZAQbrwDR8ACEpZT78QRsIBQncfQAsJ0HkMLyDXRaEULCNVoRQsI02hFCwjVaAULyJppXQAWEKrROtlg2W+I1ntoAaEarWABoRqtaAFhGq1oAWEarWgBoRqtaAFhGq1oAfkkGq1oAXlnaq1oAZl5B46gBYTpFgEtIFuiWwS0gGyYFsJXWPYw9w4cm2DZR0R/JXcHAyg7VQHZgcIzFZC9ByA7UwE5sGenKiAH9iHFVEB+WM/DTNdmJ1+m7EwFJNbySLuCqoBUGNIzFZCaYnqm3V5DIT3baK3Jp2cbrXW59HyjtS6TfsVUW9Oynxyq1xEphW8tVRFpKv3FpHoV1FCeVq9EBbzOclJgWn5UWdJzLZ5ixj0O1dLvxLz+Y1q4Ht1a03OeNdf2+Cu+cz60i+IbvtgOk67fgncObLuFTyw+2/A955uHPfTWh6x09bZYfLbhi74JYVs2oO9xyIYv+haKbcmGvkNjW3CibwDJhu8lOLzYhu/UthY/YrtUQR9HfXsHrkEfppENX/RRINu2Gf1FmIbvr+otsPh0w3eF5WcbvugrQaanpZ3zH77o69hzH75sV14avq7OffgiD6n2NHx/FfpMnG3tjA5fsuaL/jyC7c73fo3lZ1s7o4sTtrXzN5if7M4XfbN/QXZ2Q28tmH7lv4cOX7KzG/w7IbKPDzp82fZu4PB9ITt6gsN3Q1a8OrdrJP6rd9wGaPiSTa4O9qOtjXfYBGD4knXeA/PwJX3naXwyMPLO2cL2ZGDpHbPVwPBkgDe9ZfiynTYrik8GyBY9dYUnA2Rrnqbs8CVb8iRkhi/fQSeh7R+GBLKHVW3StxZkV1sZieFL/E8fGob14ct6SmhRfa9H/qc+YfxzZ/3xTFZqbYbd8XzcJVvGioiIiIiIiPxzfwDaSjLB4m7zXAAAAABJRU5ErkJggg=="
 alt="logo" style={{marginLeft:"35px"}}/></Link>
<img width="65px" src={Name} alt="logo"  style={{marginLeft:"35px",marginTop:"10px"}}/>
<br/><br/>
</nav>
<h4 style={{fontWeight:"bold",marginTop:"10px",marginLeft:"40%"}}>POST YOUR AD</h4>
<div style={{width:"66%" , border:"1px solid black",marginLeft:"17%"}}>
<h5>CHOOSE A CATEGORY</h5>
<div style={{display:"block-inline"}}>
{categories.map(({id,Names})=>
	<div onClick={()=>this.second_div(id)} style={{border:"1px solid lightgrey",width:"49%",height:"45px"
,fontSize:"20px",color:"grey",paddingLeft:"5px"}}>{Names}
<span style={{float:"right",marginRight:"10px"}}> > </span>
</div>
)}
</div>
<div  style={{display:"block"}}>
{this.state.second_disp? 
categories[this.state.Disp_id].more.map((name)=>
<div style={{border:"1px solid lightgrey",width:"49%",height:"45px",position:"relative",left:"50%"
,top:"-630px",fontSize:"20px",color:"grey",paddingLeft:"5px"}}>{name}
</div>
)
	:null}
	</div>
</div>



</div>
		)

}

}