import React from 'react'
import ACTIONS from '../actions'
import Header from './preloginheader'

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

	_getLogInInfo: function(evt){
		evt.preventDefault()
		
		ACTIONS.logUserIn(evt.currentTarget.email.value, evt.currentTarget.password.value)

		evt.currentTarget.reset()
	},

	render: function(){
		return (
				<div className="loginForm loginView">
					<form onSubmit={this._getLogInInfo}>
						<h3>Log In</h3>
						<label className="email">Enter Email Address</label>
						<input type="email" name="email" placeholder="Email Address" />
						<label className="password">Enter Password</label>
						<input type="password" name="password" placeholder="Password" />
						<button className="LogIn" type="submit">Log In</button>
					</form>
				</div>
			)
	}
})

export default LogIn