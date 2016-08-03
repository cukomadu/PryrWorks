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
		//console.log('fetching prayers >> pryrs.js 15')
		//console.log('this is clickedView in state passed from store line 16', this.state.currentView)
		
		var toMePrayerQuery = {
			to: User.getCurrentUser().email
		}
		
		ACTIONS.fetchPryrsByQuery(toMePrayerQuery)
		
		PRYR_STORE.on('updatePryrList', () => {
			this.setState(PRYR_STORE._getData())
		})
	},

	componentWillUnmount: function(){
		PRYR_STORE.off('updatePryrList')

	},

	render: function(){

		let collectionToPassDown 
		
		if(this.state.currentView === "mypryrlist"){
			collectionToPassDown = this.state.pryrCollection.where({
				from: User.getCurrentUser().email, answered: false
			})
		} 
		
		else if(this.state.currentView === "answered"){
			collectionToPassDown = this.state.pryrCollection.where({
				answered: true
			})
		}
		
		else if(this.state.currentView === "pryrstomefromothers"){

			collectionToPassDown = this.state.pryrCollection.filter((model) => {
				if((model.get('from') !== User.getCurrentUser().email) && (model.get('answered') === false) ){
					return true
				}
			})
		}
		
		else {
			collectionToPassDown = this.state.pryrCollection.where({
				answered: false
			})
			
		}
		

		return (
				<div className="Pryrs">
					<PostLoginHeader />
					<h3>Prayers <span className="HeadingToMe">{`To Me <= From Others`}</span></h3>
					<NavBar />
					<ToMePryrs pryrColl={collectionToPassDown} 
					pDisplay={this.state.pDisplay} buttonState={this.state.buttonState}/>
				</div>
			)
	}
})

const NavBar = React.createClass({

	_getCurrentView: function(evt){
		console.log('this is current viewType', evt.target.value)
		var clickedView = evt.target.value

		ACTIONS.updateCurrentView(clickedView)
	},


    render: function(){
        return (
                    <div>
                    	<button 
						value="allpryrstome"
						onClick={this._getCurrentView}
						>All Prayers To Me</button>
						
						<button  
						value="mypryrlist"
						onClick={this._getCurrentView}
						>My Prayer List </button>
						
						<button 
						value="pryrstomefromothers"
						onClick={this._getCurrentView}
						>Prayers To Me from Other</button>
						
						<button 
						value="answered"
						onClick={this._getCurrentView}
						>Answered</button>
                    </div>
            )
    }

})

const ToMePryrs = React.createClass({

	_createPryr: function(pryrColl){
		var JSXPryrModel = pryrColl.map((model) => {
			return <PryrItem key={model.id} pryrmodel={model} modelDisplay={this.props.pDisplay} modelButtonState={this.props.buttonState}/>
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

	_toggleDisplay: function(){
		console.log('buttonState', this.props.modelButtonState)
		console.log('pDisplay', this.props.modelDisplay)

		var pDisplay = this.props.modelDisplay,
			buttonState = this.props.modelButtonState,
			clickedModelId = this.props.pryrmodel.id

		ACTIONS.updateViewedStatus(clickedModelId)

		ACTIONS.updateStateProps(buttonState, pDisplay)
	},

	_toggleAnswered: function(){
		//console.log('answered status pryrs line 65', this.props.pryrmodel.get('answered'))
		var clickedModelId = this.props.pryrmodel.id
		//console.log(clickedModelId)
		
		ACTIONS.updatePryrModel(clickedModelId)
	},

	_deletePryr: function(){
		var clickedModelId = this.props.pryrmodel.id
		ACTIONS.deletePryrModel(clickedModelId)
	},

	render: function(){
		var styleObj = {
			display: this.props.modelDisplay
		}

		return (
				<div className="ToMePrayers">
					<p><strong className="labelToMe">To Me:</strong> {this.props.pryrmodel.get('to')}</p>
					<button onClick={this._toggleDisplay} className="expand">{this.props.modelButtonState}</button>
					<div style={styleObj}>
						<p><strong className="labelToMe">From Me / From Other Users:</strong> {this.props.pryrmodel.get('from')}</p>
						<p><strong className="labelToMe">Prayer Title:</strong> {this.props.pryrmodel.get('title')}</p>
						<p><strong className="labelToMe">Prayer Details:</strong> {this.props.pryrmodel.get('description')}</p>
						<span className="HeadingFromMe">Answered?</span>
						<input type="checkbox" name="answered" onClick={this._toggleAnswered} />
						<button onClick={this._deletePryr}>X</button>
					</div>
				</div>
			)
	}
})


export default PersonalPryrs