import React from 'react'
import ACTIONS from '../actions'
import Header from './header'

const LogIn = React.createClass({
	render: function(){
		return (
				<div className="LogIn">
					<Header />
					<LoginForm />
				</div>
			)
	}
})

const LoginForm = React.createClass({
	render: function(){
		return (
				<div className="loginForm loginView">
					<form>
						<h3>Log In</h3>
						<label>Enter Email Address</label>
						<input type="email" name="email" placeholder="Email Address" />
						<label>Enter Password</label>
						<input type="password" name="password" placeholder="Password" />
						<button type="submit">Log In</button>
					</form>
				</div>
			)
	}
})

export default LogIn