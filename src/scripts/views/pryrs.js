import React from 'react'
import $ from 'jquery'
import Header from './header'
import {PryrCollection} from '../models/models'
import PRYR_STORE from '../pryrStore'
import ACTIONS from '../actions'

const Pryrs = React.createClass({

	getInitialState: function() {
		return PRYR_STORE._getData()
	},

	componentWillMount: function(){
		console.log('fetching prayers >> pryrs.js 15')
		ACTIONS.fetchPryrs()
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
					<Header />
					<h3>Your Prayers</h3>
					<MyPryrs pryrColl={this.state.collection}/>
				</div>
			)
	}
})

const MyPryrs = React.createClass({

	_createPryr: function(pryrColl){
		var JSXPryrModel = pryrColl.map((model) => {
			return <PryrItem key={model.id} pryrmodel={model} />
		})
		return JSXPryrModel
	},

	render: function(){
		console.log('this is pryr coll >>>', this.props.pryrColl)
		return (
				<div className="MyPryrs">
					{this._createPryr(this.props.pryrColl)}
				</div>
			)
	}
})

const PryrItem = React.createClass({
	render: function(){
		return (
				<div className="PryrItem">
					<span>Send To: {this.props.pryrmodel.get('to')}</span>
					<span>Pray For: {this.props.pryrmodel.get('title')}</span>
					<span>Details: {this.props.pryrmodel.get('description')}</span>
				</div>
			)
	}
})


export default Pryrs