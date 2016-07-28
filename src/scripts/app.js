import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import { User, PryrModel, PryrCollection } from './models/models'
import Pryrs from './views/pryrs'
import PryrEditor from './views/pryrEditor'
import LogIn from './views/login'
import SignUp from './views/signup'
import Home from './views/home'


const app = function() {
 
  const PryrRouter = Backbone.Router.extend({
  	routes: {
  		"pryrs/read": "_showPryrs",
  		"pryrs/create": "_showPryrEditor",
  		"login": "_showLogin",
  		"signup": "_showSignUp",
  		"home": "_showHome",
  		"*catchall": "_redirect"
  	},

  	_showPryrs: function(){
  		console.log('this is Pryrs')
      var newPryrColl = new PryrCollection()
      newPryrColl.fetch()

  		ReactDOM.render(<Pryrs />, document.querySelector('.container'))
  	},

  	_showPryrEditor: function(){
  		console.log('this is PryrEditor')
  		ReactDOM.render(<PryrEditor />, document.querySelector('.container'))
  	},

  	_showLogin: function(){
  		console.log('this is Login')
  		ReactDOM.render(<LogIn />, document.querySelector('.container'))
  	},

  	_showSignUp: function(){
  		console.log('this is Sign Up')
  		ReactDOM.render(<SignUp />, document.querySelector('.container'))
  	},

  	_showHome: function(){
  		console.log('this is Home')
  		ReactDOM.render(<Home />, document.querySelector('.container'))
  	},

  	_redirect: function(){
  		location.hash = "home"
  	},

  	initialize: function(){
  		Backbone.history.start()

      this.on('route', function(_showPryrs, _showPryrEditor){
         if(!User.getCurrentUser()){
          location.hash = "login"
         }
         
      })
  	}

  })

  new PryrRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..