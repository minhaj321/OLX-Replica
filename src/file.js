import React ,{Component} from 'react';
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
import Home from './components/home';
import Detail from './Details/Detail';
import Form from './components/form';
import Sell_Categories from './components/sell_categories';

export default class AppRouter extends Component{
render(){
return(
<Router>
<Route exact path='/' component={Home} />
<Route path='/detail' component={Detail} />
<Route path='/form' component={Form} />
<Route path='/sellcategories' component={Sell_Categories} />
</Router>
	)

}}