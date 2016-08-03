import React from 'react'
import ACTIONS from '../actions'
import Header from './preloginheader'

const SignUp = React.createClass({
	render: function(){
		return (
				<div className="SignUp">
					<Header />
					<SignUpForm />
				</div>
			)
	}
})

const SignUpForm = React.createClass({

	_getSignUpInfo: function(evt){
		evt.preventDefault()
		
		ACTIONS.signUserUp({
			email: evt.currentTarget.email.value, 
			password: evt.currentTarget.password.value
		})

		evt.currentTarget.reset()
	},

	render: function(){
		return (
				<div className="signUpForm signUpView">
					<form onSubmit={this._getSignUpInfo}>
						<h3>Sign Up</h3>
						<label className="email">Enter Email Address</label>
						<input type="email" name="email" placeholder="Email Address" />
						<label className="password">Create Password</label>
						<input type="password" name="password" placeholder="Password" />
						<button className="SignUp" type="submit">Sign Up</button>
					</form>
				</div>
			)
	}
})

export default SignUp