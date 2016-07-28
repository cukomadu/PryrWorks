import React from 'react'
import $ from 'jquery'
import Header from './header'
import {MsgCollection} from '../models/models'
import PRYR_STORE from '../pryrStore'
import ACTIONS from '../actions'

const PRYRS = React.createClass({

	getInitialState: function() {
		return PRYR_STORE.getData()
	},

	componentWillMount: function(){
		ACTION.fetchPryrs()
		PRYR_STORE.on('updatePryrList', () => {
			this.setState(PRYR_STORE.getData())
		})
	},

	componentWillUnmount: function(){
		PRYR_STORE.off('updatePryrList')
	},

	render: function(){
		return (
				<div className="Pryrs">
					<Header />
					<MyPryrs pryrColl={this.state.collection}/>
				</div>
			)
	}
})

const MyPryrs = React.createClass({

	_createPryr: function(pryrColl){
		pryrColl.map((pryrmodel) => {
			return <PryrItem key={pryrmodel.id} pryrmodel={pryrmodel} />
		})
	},

	render: function(){
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
					<span>Pray For: {this.props.pryrmodel.get('title')}</span>
					<span>Details: {this.props.pryrmodel.get('description')}</span>
				</div>
			)
	}
})


export default PRYRS