import React from 'react'
import PostLoginHeader from './postloginheader'
import PRYR_STORE from '../pryrStore'
import ACTIONS from '../actions'
import {User, PryrCollection} from '../models/models'


const DashBoard = React.createClass({
	getInitialState: function() {
		return PRYR_STORE._getData()
	},

	componentWillMount: function(){

		ACTIONS.fetchPryrsByQuery()
		
		PRYR_STORE.on('updatePryrList', () => {
			this.setState(PRYR_STORE._getData())
		})
	},

	componentWillUnmount: function(){
		PRYR_STORE.off('updatePryrList')
	},

	render: function(){
		console.log('state in dashboard', this.state.pryrCollection)
		return (
				<div>
					<PostLoginHeader />
					<h3>Your Prayer Dashboard</h3>
					<PryrSummary pryrColl={this.state.pryrCollection}/>
				</div>
			)
	}
		
})

const PryrSummary = React.createClass({

	_calculateSharedAnswered: function(pryrColl){
		var filteredColl = pryrColl.filter((model) => {
			if((model.get('from') === User.getCurrentUser().email) && (model.get('answeredStatus') === true)){
				return true
			}	
		})

		//return filteredColl.length
		var collLength = filteredColl.length
		console.log('this is collLength', collLength)
		if(collLength < 2){
			return <p>You Have <a href="#pryrs/shared">{collLength} New</a> Answered Prayer from Shared Prayers!</p>
		}
		else {
			return <p>You Have <a href="#pryrs/shared">{collLength} New</a> Answered Prayers from Shared Prayers!</p>
		}
        
	},

	_calculateNewPryrs: function(pryrColl){
		var filteredColl = pryrColl.filter((model) => {
			if((model.get('to') === User.getCurrentUser().email) && (model.get('viewStatus') === false)){
				return true
			}	
		})
		var collLength = filteredColl.length
		if(collLength < 2){
			return <p>You Have <a href="#pryrs/personal">{collLength} New</a> Prayer in your Inbox!</p>
		}
		else {
			return <p>You Have <a href="#pryrs/personal">{collLength} New</a> Prayers in your Inbox!</p>
		}
	},

	_calculateMyAnswered: function(pryrColl){
		var filteredColl = pryrColl.filter((model) => {
			if((model.get('to') === User.getCurrentUser().email) && (model.get('answered') === true)){
				return true
			}	
		})
		var collLength = filteredColl.length
		if(collLength < 2){
			return <p>You Have <a href="#pryrs/personal">{collLength} New</a> Answered Prayer from My Prayers!</p>
		}
		else {
			return <p>You Have <a href="#pryrs/personal">{collLength} New</a> Answered Prayer from My Prayers!</p>
		}
	},

    render: function(){
        return (
                    <div>
                    	<p>My Prayers</p>
                    	{this._calculateNewPryrs(this.props.pryrColl)}
                    	{this._calculateMyAnswered(this.props.pryrColl)}
                    	<hr/>
                    	<p>Shared Prayers</p>
                    	{this._calculateSharedAnswered(this.props.pryrColl)}
                    	{/*<p><a href="#pryrs/shared"> {this._calculatePryrStats(this.props.pryrColl)}
                    	  New</a> Answered Prayer from Shared Prayers</p>*/}
                    	<hr/>
                    </div>
            )
    }

})
	

export default DashBoard