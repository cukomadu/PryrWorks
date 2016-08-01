import { User, PryrModel, PryrCollection } from './models/models'
import PRYR_STORE from './pryrStore'


const ACTIONS = {

	signUserUp: function(userObj){
		//console.log(userObj)
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

    updatePryrModel: function(modelId){
        let pryrUpdate = PRYR_STORE.data.pryrCollection.get(modelId)
         
            //Break code in line 64 down
            pryrUpdate.set({answered: pryrUpdate.get('answered') ? false : true})
            pryrUpdate.save().then((responseData) => {
                console.log(responseData)
                alert('Pryr updated successfully')    
                },
                
                (error) => {
                    alert('Pryr update not successfully')
                    console.log(error)
                }   
            )

            PRYR_STORE.data.pryrCollection.trigger('update')
            //console.log('this is pryr collection', PRYR_STORE.data.pryrCollection.models)
           // console.log('answered status actions line 72', pryrUpdate.get('answered'))

    },
             
    fetchPryrsByQuery: function(queryObj){
        PRYR_STORE.data.pryrCollection.fetch({
            data: queryObj
        })
    },

    updateCurrentView: function(clickedView){
        console.log('this is clickedView from ACTIONS.js', clickedView)
       PRYR_STORE._set('currentView', clickedView)
    },

    deletePryrModel: function(modelId){
        let pryrModel = PRYR_STORE.data.pryrCollection.get(modelId)
        pryrModel.destroy()
    }
}

export default ACTIONS