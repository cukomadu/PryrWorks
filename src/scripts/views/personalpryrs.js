import React from 'react'
import $ from 'jquery'
import PostLoginHeader from './postloginheader'
import {User, PryrCollection} from '../models/models'
import PRYR_STORE from '../pryrStore'
import ACTIONS from '../actions'

const PersonalPryrs = React.createClass({

	getInitialState: function() {
		return PRYR_STORE._getData()
	},

	componentWillMount: function(){
		console.log('fetching prayers >> pryrs.js 15')
		var toMePrayerQuery = {
			to: User.getCurrentUser().email
		}
		
		ACTIONS.fetchPryrsByQuery(toMePrayerQuery)

		// ACTIONS.fetchPersonalPryrs()
		PRYR_STORE.on('updatePryrList', () => {
			this.setState(PRYR_STORE._getData())
		})
	},

	componentWillUnmount: function(){
		PRYR_STORE.off('updatePryrList')
	},

	render: function(){
		return (
				<div className="Pryrs">
					<PostLoginHeader />
					<h3>Prayers <span className="HeadingToMe">{`To Me <= From Others`}</span></h3>
					<ToMePryrs pryrColl={this.state.pryrCollection}/>
				</div>
			)
	}
})

const ToMePryrs = React.createClass({

	_createPryr: function(pryrColl){
		var JSXPryrModel = pryrColl.map((model) => {
			return <PryrItem key={model.id} pryrmodel={model} />
		})
		return JSXPryrModel
	},

	render: function(){
		//console.log('this is pryr coll >>>', this.props.pryrColl)
		return (
				<div className="MyPryrs">
					{this._createPryr(this.props.pryrColl)}
				</div>
			)
	}
})

const PryrItem = React.createClass({

	_toggleAnswered: function(){
		console.log('answered status pryrs line 65', this.props.pryrmodel.get('answered'))
		var clickedModelId = this.props.pryrmodel.id
		console.log(clickedModelId)
		
		ACTIONS.updatePryrModel(clickedModelId)
	},

	render: function(){
		return (
				<div className="ToMePrayers">
					<p><strong className="labelToMe">To Me:</strong> {this.props.pryrmodel.get('to')}</p>
					<p><strong className="labelToMe">From Me / From Other Users:</strong> {this.props.pryrmodel.get('from')}</p>
					<p><strong className="labelToMe">Prayer Title:</strong> {this.props.pryrmodel.get('title')}</p>
					<p><strong className="labelToMe">Prayer Details:</strong> {this.props.pryrmodel.get('description')}</p>
					<span className="HeadingFromMe">Answered?</span>
					<input type="checkbox" name="answered" onClick={this._toggleAnswered} />
				</div>
			)
	}
})


export default PersonalPryrs