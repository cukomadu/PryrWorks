import React from 'react'
import ACTIONS from '../actions'

const Header = React.createClass({
	render: function(){
		return (
				<div>
					<h1 id="Header"><a href="#home">PryrWorks</a></h1>
					<NavBar />
				</div>
			)
	}
})

const NavBar = React.createClass({
	render: function(){
		return (
				<div className="NavBar navLinks">
					<a className="button button-primary" href="#home">Home</a>
					<a className="button button-primary" href="#login">Log In</a>
					<a className="button button-primary" href="#signup">Sign Up</a>
				</div>
			)
	}
})

export default Header