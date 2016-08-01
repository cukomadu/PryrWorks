import React from 'react'
import $ from 'jquery'
import PostLoginHeader from './postloginheader'
import {User, PryrCollection} from '../models/models'
import PRYR_STORE from '../pryrStore'
import ACTIONS from '../actions'

const SharedPryrs = React.createClass({

	getInitialState: function() {
		return PRYR_STORE._getData()
	},

	componentWillMount: function(){
		//console.log('fetching prayers >> pryrs.js 15')
		var fromMePrayerQuery = {
		    from: User.getCurrentUser().email
		}

		ACTIONS.fetchPryrsByQuery(fromMePrayerQuery)
		
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
					<h3>Prayers <span className="HeadingFromMe">From Me => To Others</span></h3>
					<FromMePryrs pryrColl={this.state.pryrCollection}/>
				</div>
			)
	}
})

const FromMePryrs = React.createClass({

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

	_deletePryr: function(){
		var clickedModelId = this.props.pryrmodel.id
		ACTIONS.deletePryrModel(clickedModelId)
	},

	render: function(){
		return (
				<div className="FromMePrayers">
					<p><strong className="labelFromMe">From Me:</strong> {this.props.pryrmodel.get('from')}</p>
					<p><strong className="labelFromMe">To Other Users:</strong> {this.props.pryrmodel.get('to')}</p>
					<p><strong className="labelFromMe">Prayer Title:</strong> {this.props.pryrmodel.get('title')}</p>
					<p><strong className="labelFromMe">Prayer Details:</strong> {this.props.pryrmodel.get('description')}</p>
					<button onClick={this._deletePryr}>X</button>
				</div>
			)
	}
})


export default SharedPryrs