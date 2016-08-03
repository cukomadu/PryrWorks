import React from 'react'
import ACTIONS from '../actions'

const Header = React.createClass({
	render: function(){
		return (
				<div className="Header">
					
					<NavBar />
				</div>
			)
	}
})

const NavBar = React.createClass({
	render: function(){
		return (
				<div className="NavBar navLinks">
					<h1><a href="#home"><span className="AppName" id="left">Pryr</span><span className="AppName" id="right">Works</span></a></h1>
					<a className="button button-primary" href="#home">Home</a>
					<a className="button button-primary" href="#login">Log In</a>
					<a className="button button-primary" href="#signup">Sign Up</a>
				</div>
			)
	}
})

export default Header