import React from 'react'
import ACTIONS from '../actions'

const LoginHeader = React.createClass({
	render: function(){
		return (
				<div>
					<h1 id="Header">PryrWorks</h1>
					<NavBar />
				</div>
			)
	}
})

const NavBar = React.createClass({
	render: function(){
		return (
				<div className="NavBar aLinks">
					<a href="#home">Home</a>
					<a href="#login">Log In</a>
					<a href="#signup">Sign Up</a>
					<a href="#messages/read">Your Prayers</a>
					<a href="#messages/write">Add Prayer</a>
					<a href="#" onClick={ACTIONS.logUserOut} >Log Out</a>
				</div>
			)
	}
})

export default Header