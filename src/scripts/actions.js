import { User, PryrModel, PryrCollection } from './models/models'



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
                location.hash = 'home' 
                //location.hash = 'pryrs/read'
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

    savePryrModel: function(model){
    	model.save().then((data) => {
    		console.log(data)
    		alert('Pryr saved successfully')
    	})
    },

    fetchPryrs: function(){
    	
    }
}

export default ACTIONS