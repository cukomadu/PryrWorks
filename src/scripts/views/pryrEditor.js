import React from 'react'
import ACTIONS from '../actions'
import PostLoginHeader from './postloginheader'
import { User, PryrModel } from '../models/models'

const PryrEditor = React.createClass({
	render: function(){
		return (
				<div>
					<PostLoginHeader />
					<PryrComposer />
				</div>
			)
	}
})


const PryrComposer = React.createClass({

	getInitialState: function(){
		return {
			category: ''

		}
	},

	_getPryrInfo: function(evt){
		evt.preventDefault()
		
		ACTIONS.savePryrModel({
			title: evt.currentTarget.title.value,
			to: evt.currentTarget.to.value,
			// this.state.category === 'mypryr' ? 
			//     User.getCurrentUser().email  :
			//     evt.currentTarget.to.value
			
			from: User.getCurrentUser().email,
			description: evt.currentTarget.description.value
		})

		evt.currentTarget.reset()
	},

	_myPryrButton: function(evt){
		evt.preventDefault()
		this.setState({
			category: 'mypryr'
		})
	},

	_sharedButton: function(evt){
		evt.preventDefault()
		this.setState({
			category: 'sharedpryr'
		})
	},

	render: function(){
		var formClass = 'hide',
			myPryrClass = '',
			sharedPryrClass = '',
			classNameForSendTo = '',
			sharedButtonClass = '',
			myPryrButtonClass = ''

		 if(this.state.category === 'mypryr'){
		 	classNameForSendTo = 'hide'
		 	formClass = ''
		 	myPryrButtonClass = 'isSelected'
		 }
		 if(this.state.category === 'sharedpryr'){
		 	classNameForSendTo = ''
		 	formClass = ''
		 	sharedButtonClass = 'isSelected'
		 }

		
		return (
				<div className="PryrEditor PryrComposer">
					<h3>Add A New Prayer</h3>
					<label><strong className="labelToMe">Who Are You Praying For?</strong></label>
					<button className={myPryrButtonClass} onClick={this._myPryrButton}>Me: To Me</button>
					<button className={sharedButtonClass} onClick={this._sharedButton}>Others Users: From Me</button>
					
					<form className={formClass} onSubmit={this._getPryrInfo}>
						<hr />
						<label className={`${classNameForSendTo}`}>Recipient Email Address</label>
						<input className={`u-full-width ${classNameForSendTo}`} type="text" name="to" placeholder="Enter email address of the person you are praying for" />
						<label>Prayer Title</label>
						<input className="u-full-width" type="text" name="title" placeholder="Who or What you want to pray for?" />
						<label>Description</label>
						<textarea className="u-full-width" name="description" placeholder="Add details to this prayer..."></textarea>
						<button type="submit">Add to PryrList</button>
					</form>
				</div>
			)
	}
})

export default PryrEditor