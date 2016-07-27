import React from 'react'
import ACTIONS from '../actions'
import Header from './header'

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
	render: function(){
		return (
				<div className="signUpForm signUpView">
					<form>
						<h3>Sign Up</h3>
						<label>Enter Email Address</label>
						<input type="email" name="email" placeholder="Email Address" />
						<label>Create Password</label>
						<input type="password" name="password" placeholder="Password" />
						<button type="submit">Log In</button>
					</form>
				</div>
			)
	}
})

export default SignUp