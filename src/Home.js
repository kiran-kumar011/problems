import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
 

class Home extends Component {
	render() {
		var products = this.props.products.products ? this.props.products.products : [];
		console.log(this.props.products)
		return(
			<div>
				<h1>display the tables</h1>
				<div className='products-wrap'>
					{
						products.map((item, index) => {
							return <div className='product' key={index}>
											 <h1>name : {item.name}</h1>
											 <p>pricingTier : {item.pricingTier}</p>
											 <p>priceRange : {item.priceRange}</p>
											 <p>weight : {item.weight}</p>
											 <p>availability : {item.availability}</p>
											 <p>url : {item.productUrl}</p>
											 {
											 	item.isEditable ? <Link to='/edit-product'><button>edit</button></Link> : ''
											 }
										</div>
						})
					}
				</div>
			</div>
		)
	}
}


// "name": "OnePlus 6T",
// "pricingTier": "premier",
// "priceRange": "35k-45k",
// "weight": 200,
// "availability": 30,
// "productUrl": "https://e...content-available-to-author-only...e.com/op6t",
// "isEditable": true

function mapStateToProps(state) {
	return {
		products: state.products,
	}
}


export default connect(mapStateToProps)(Home);