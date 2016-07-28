import React from 'react'
import ACTIONS from '../actions'
import Header from './header'
import { User, PryrModel, PryrCollection } from '../models/models'

const PryrEditor = React.createClass({
	render: function(){
		return (
				<div>
					<Header />
					<PryrComposer />
				</div>
			)
	}
})


const PryrComposer = React.createClass({

	_savePryrInfo: function(evt){
		evt.preventDefault()
		
		var newPryr = new PryrModel({
			title: evt.currentTarget.title.value,
			to: evt.currentTarget.to.value,
			from: User.getCurrentUser().email,
			description: evt.currentTarget.description.value
		})

		ACTIONS.savePryrModel(newPryr)
		evt.currentTarget.reset()
	},

	render: function(){
		return (
				<div className="PryrEditor PryrComposer">
					<form onSubmit={this._savePryrInfo}>
						<label>Send To</label>
						<input className="u-full-width" type="text" name="to" placeholder="Enter email address of the person you are praying for" />
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