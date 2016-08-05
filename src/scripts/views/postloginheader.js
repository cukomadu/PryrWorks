import React from 'react'
import ACTIONS from '../actions'

const PostLoginHeader = React.createClass({
	render: function(){
		return (
				<div className="PostLoginHeader">
					<h1 id="Header"><a href="#home">PryrWorks</a></h1>
					<NavBar />
				</div>
			)
	}
})

const NavBar = React.createClass({

	render: function(){
		return (
				<div className="NavBar aLinks">
					<a className="button" href="#pryrs/dashboard">Dash</a>
					<a className="button actiontome" 
					href="#pryrs/personal">{`Inbox`}</a>
					<a className="button actionfromme" 
					href="#pryrs/shared">Shared</a>
					<a className="button" href="#pryrs/create">Add Prayer</a>
					<a className="button" href="#" onClick={ACTIONS.logUserOut} >Log Out</a>
				</div>
			)
	}
})

export default PostLoginHeader