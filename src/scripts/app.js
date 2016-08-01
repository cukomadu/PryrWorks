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
     // "pryrs/answered": "_showAnswered",
  		"login": "_showLogin",
  		"signup": "_showSignUp",
  		"home": "_showHome"//,
  		//"*catchall": "_redirect"
  	},

    // _showAnswered: function(){
    //   console.log('this is Answered Pryrs')
    //   ReactDOM.render(<Answered />, document.querySelector('.container'))
    // },

  	_showSharedPryrs: function(){
  		//console.log('this is Pryrs')
  		ReactDOM.render(<SharedPryrs />, document.querySelector('.container'))
  	},

    _showDashboard: function(){
      //console.log('this is Pryrs')
      ReactDOM.render(<DashBoard />, document.querySelector('.container'))
    },

    _showPersonalPryrs: function(){
     // console.log('this is Pryrs')
      ReactDOM.render(<PersonalPryrs />, document.querySelector('.container'))
    },

  	_showEditor: function(){
  		//console.log('this is PryrEditor')
  		ReactDOM.render(<PryrEditor />, document.querySelector('.container'))
  	},

  	_showLogin: function(){
  	//	console.log('this is Login')
  		ReactDOM.render(<LogIn />, document.querySelector('.container'))
  	},

  	_showSignUp: function(){
  		//console.log('this is Sign Up')
  		ReactDOM.render(<SignUp />, document.querySelector('.container'))
  	},

  	_showHome: function(){
  	//	console.log('this is Home')
  		ReactDOM.render(<Home />, document.querySelector('.container'))
  	},

  	// _redirect: function(){
  	// 	location.hash = "home"
  	// },

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