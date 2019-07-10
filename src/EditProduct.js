import React, {Component} from 'react';

class Edit extends Component {

	state = {
		name: '',
		weight: '',
		availability : '',
		productUrl : '',
		PriceTier: '',
		priceRange: '',

		isFormFilled: false,
	}


	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value });
		var { name, weight, productUrl, PriceTier, priceRange } = this.state;

		if(name && weight && productUrl && PriceTier && priceRange) {
			this.setState({isFormFilled: true});
		}
	}


	submitChanges = (e) => {
		this.setState({[e.target.name] : e.target.value})
	}


	// submitButton = () => {
	// 	var { name, weight, availability, productUrl, PriceTier, priceRange } = this.state;

	// 	if(name && weight && productUrl && PriceTier && priceRange) {
	// 		this.setState({isFormFilled: true});
	// 	}
	// }


	render() {

		return(
			<div>
				<form className='edit-form'>
					<input className='input' onChange={this.handleChange} 
					type='text' name='name' placeholder='enter product name'></input>
					<input className='input' onChange={this.handleChange} 
					type='number' name='weight' placeholder='enter the weight'></input>
					<input className='input' onChange={this.handleChange} 
					type='number' name='availability' placeholder='enter quantities available'></input>
					<input className='input' onChange={this.handleChange} 
					type='text' name='productUrl' placeholder='enter product url'></input>
					
					<div className='radioButton'>
						<input onChange={this.handleChange} type="radio" name="PriceTier" value="Premier"/> Premier<br/>
  					<input onChange={this.handleChange} type="radio" name="PriceTier" value="Budget"/> Budget<br/>
					</div>
					{
						this.state.PriceTier ? this.state.PriceTier === 'Budget' ? 
						(
							<div class="field">
							  <div class="control">
							    <div class="select is-info">
							      <select name='priceRange' onChange={this.submitChanges}>
							        <option>Select price range </option>
							        <option> 4k - 6k</option>
							        <option> 6k - 9k</option>
							        <option> 9k - 11k</option>
							      </select>
							    </div>
							  </div> 
							</div>
						)
						:
						(
							<div class="field">
							  <div class="control">
							    <div class="select is-info">
							      <select name='priceRange' onChange={this.submitChanges}>
							        <option>Select price range</option>
							        <option> 11k - 20k</option>
							        <option> 20k - 30k</option>
							        <option> 30k+</option>
							      </select>
							    </div>
							  </div>
							</div>
						)
						:
						''
					}
					{
						this.state.isFormFilled ? <button>submit</button> : ''
					}
				</form>
			</div>
		)
	}
}


export default Edit;