import React from 'react'
import ACTIONS from '../actions'

const PostLoginHeader = React.createClass({
	render: function(){
		return (
				<div>
					<h1 id="Header"><a href="#pryrs/dashboard">PryrWorks</a></h1>
					<NavBar />
				</div>
			)
	}
})

const NavBar = React.createClass({

	render: function(){
		return (
				<div className="NavBar aLinks">
					<a className="button actiontome" 
					href="#pryrs/personal">{`My Prayers`}</a>
					<a className="button actionfromme" 
					href="#pryrs/shared">Shared Prayers</a>
					<a className="button" href="#pryrs/create">Add New Prayer</a>
					<a className="button" href="#" onClick={ACTIONS.logUserOut} >Log Out</a>
				</div>
			)
	}
})

export default PostLoginHeader