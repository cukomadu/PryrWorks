import { User, PryrModel, PryrCollection } from './models/models'
import PRYR_STORE from './pryrStore'


const ACTIONS = {

	signUserUp: function(userObj){
		console.log(userObj)
		User.register(userObj).then( () => ACTIONS.logUserIn(userObj.email, userObj.password),
            (error) => {
                alert('SignUp Unsuccessful')
                console.log(error)
            }
        )
	},

	logUserIn: function(email, password) {
        User.login(email, password).then(
            (responseData) => {
                alert(`User ${email} Logged In successfully!`)
                console.log(responseData)
                location.hash = 'pryrs/create' 
            },
            (error) => {
                alert('LogIn Unsuccessful')
                console.log(error)
            }
        )
    },

    logUserOut: function() { 
        User.logout().then(
            () => {
            	alert('LogOut Successful')
            	location.hash = 'home'
            }
        )
    },

    savePryrModel: function(pryrObj){
    	var newPryr = new PryrModel(pryrObj)
        // var newPryrColl = new PryrCollection(PRYR_STORE.data.collection.models)
        // newPryrColl.add(newPryr)
        newPryr.save().then(
            (responseData) => { 
                console.log(responseData)
                alert('Pryr saved successfully!')
        		location.hash = 'pryrs/read'    
            },
            (error) => {
                alert('Pryr did not save successfully!')
                console.log(error)
            }
        )
    },

    fetchPryrs: function(){
        console.log('fetching prayers >> action.js 56')
    	PRYR_STORE.data.collection.fetch()
    }
}

export default ACTIONS