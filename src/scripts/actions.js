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
                location.hash = 'pryrs/dashboard' 
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
        newPryr.save().then(
            (responseData) => { 
                console.log(responseData)
                alert('Pryr saved successfully!')
        		location.hash = 'pryrs/dashboard'    
            },
            (error) => {
                alert('Pryr did not save successfully!')
                console.log(error)
            }
        )
    },

    updatePryrModel: function(model){

    },

    // fetchSharedPryrs: function(){
    //     console.log('fetching prayers >> action.js 56')
    // 	PRYR_STORE.data.sharedPryrCollection.fetch()
    // },

    // fetchPersonalPryrs: function(){
    //     console.log('fetching prayers >> action.js 56')
    //     PRYR_STORE.data.personalPryrCollection.fetch()
    // },

    // GET   /api/pryrs?answered=true&catefory=shared&to=584298rhwtnpi23333
    //       queryObj === {answered: true, sharedPryr: 'shared', to: getCurrentUser().id}
    //               
    fetchPryrsByQuery: function(queryObj){
        // $.getJSON('/api/pryrs?answered=true&catefory=shared&to=584298rhwtnpi23333')

        PRYR_STORE.data.pryrCollection.fetch({
            data: queryObj
        })

    }
}

export default ACTIONS