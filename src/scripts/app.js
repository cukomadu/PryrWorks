import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import { User, PryrModel, PryrCollection } from './models/models'
import SharedPryrs from './views/sharedpryrs'
import PryrEditor from './views/pryrEditor'
import PersonalPryrs from './views/personalpryrs'
import DashBoard from './views/dashboard'
import LogIn from './views/login'
import SignUp from './views/signup'
import Home from './views/home'


const app = function() {
 
  const PryrRouter = Backbone.Router.extend({
  	routes: {
  		"pryrs/shared": "_showSharedPryrs",
  		"pryrs/create": "_showEditor",
      "pryrs/personal": "_showPersonalPryrs",
      "pryrs/dashboard": "_showDashboard",
  		"login": "_showLogin",
  		"signup": "_showSignUp",
  		"home": "_showHome",
  		"*catchall": "_redirect"
  	},

  	_showSharedPryrs: function(){
  		ReactDOM.render(<SharedPryrs />, document.querySelector('.container'))
  	},

    _showDashboard: function(){
      ReactDOM.render(<DashBoard />, document.querySelector('.container'))
    },

    _showPersonalPryrs: function(){
      ReactDOM.render(<PersonalPryrs />, document.querySelector('.container'))
    },

  	_showEditor: function(){
  		ReactDOM.render(<PryrEditor />, document.querySelector('.container'))
  	},

  	_showLogin: function(){
  		ReactDOM.render(<LogIn />, document.querySelector('.container'))
  	},

  	_showSignUp: function(){
  		ReactDOM.render(<SignUp />, document.querySelector('.container'))
  	},

  	_showHome: function(){
  		ReactDOM.render(<Home />, document.querySelector('.container'))
  	},

  	_redirect: function(){
  		location.hash = "home"
  	},

  	initialize: function(){
  		Backbone.history.start()

      // this.on('route', function(_showPryrs, _showPryrEditor){
      //    if(!User.getCurrentUser()){
      //     location.hash = "login"
      //    }
         
      // })
  	}

  })

  new PryrRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..