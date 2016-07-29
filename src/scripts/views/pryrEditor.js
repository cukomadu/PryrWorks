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
			to: this.state.category === "toMe" ? User.getCurrentUser().email  : evt.currentTarget.to.value,
			from: User.getCurrentUser().email,
			title: evt.currentTarget.title.value,
			description: evt.currentTarget.description.value
		})

		evt.currentTarget.reset()
	},

	_toMeButton: function(evt){
		evt.preventDefault()
		this.setState({
			category: 'toMe'
		})
	},

	_fromMeButton: function(evt){
		evt.preventDefault()
		this.setState({
			category: 'fromMepryr'
		})
	},

	render: function(){
		var formClass = 'hide',
			toMeClass = '',
			fromMePryrClass = '',
			classNameForSendTo = '',
			fromMeButtonClass = '',
			toMeButtonClass = ''

		 if(this.state.category === 'toMe'){
		 	classNameForSendTo = 'hide'
		 	formClass = ''
		 	toMeButtonClass = 'isSelected'
		 }
		 if(this.state.category === 'fromMepryr'){
		 	classNameForSendTo = ''
		 	formClass = ''
		 	fromMeButtonClass = 'isSelected'
		 }

		
		return (
				<div className="PryrEditor PryrComposer">
					<h3>Add A New Prayer</h3>
					<label><strong className="labelToMe">Who Are You Praying For?</strong></label>
					<button className={toMeButtonClass} onClick={this._toMeButton}>Me: To Me</button>
					<button className={fromMeButtonClass} onClick={this._fromMeButton}>Others Users: From Me</button>
					
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