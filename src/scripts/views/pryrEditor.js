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

	_getPryrInfo: function(evt){
		evt.preventDefault()
		
		ACTIONS.savePryrModel({
			title: evt.currentTarget.title.value,
			to: evt.currentTarget.to.value,
			from: User.getCurrentUser().email,
			description: evt.currentTarget.description.value
		})

		evt.currentTarget.reset()
	},

	render: function(){
		return (
				<div className="PryrEditor PryrComposer">
					<h3>Add A New Prayer</h3>
					<form onSubmit={this._getPryrInfo}>
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