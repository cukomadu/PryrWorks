import { User, PryrModel, PryrCollection } from './models/models'
import PRYR_STORE from './pryrStore'


const ACTIONS = {

	signUserUp: function(userObj){
		User.register(userObj).then( () => ACTIONS.logUserIn(userObj.email, userObj.password),
            (error) => {
                alert('SignUp Unsuccessful')
                //console.log(error)
            }
        )
	},

	logUserIn: function(email, password) {
        User.login(email, password).then(
            (responseData) => {
                alert(`User ${email} Logged In successfully!`)
                //console.log(responseData)
                location.hash = 'pryrs/dashboard' 
            },
            (error) => {
                alert('LogIn Unsuccessful')
               // console.log(error)
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
                //console.log(responseData)
                alert('Pryr saved successfully!')
        		location.hash = 'pryrs/dashboard'    
            },
            (error) => {
                alert('Pryr did not save successfully!')
                //console.log(error)
            }
        )
    },

    updatePryrModel: function(modelId){
        let pryrUpdate = PRYR_STORE.data.pryrCollection.get(modelId)
         
            pryrUpdate.set({
                answered: pryrUpdate.get('answered') ? false : true,
                answeredStatus: pryrUpdate.get('answeredStatus') ? false : true
            })
            pryrUpdate.save().then((responseData) => {
                //console.log(responseData)
                alert('Pryr updated successfully')    
                },
                
                (error) => {
                    alert('Pryr update not successfully')
                    //console.log(error)
                }   
            )

            PRYR_STORE.data.pryrCollection.trigger('update')
    },

    updateViewedStatus: function(modelId){
        let pryrViewedStatus = PRYR_STORE.data.pryrCollection.get(modelId)

            pryrViewedStatus.set({
                viewStatus: true
            })

            pryrViewedStatus.save().then((responseData) => {
                //console.log(responseData)
                alert('Pryr ViewStatus updated successfully')    
                },
                
                (error) => {
                    alert('Pryr ViewStatus update not successfully')
                    //console.log(error)
                }   
            )
        
        PRYR_STORE.data.pryrCollection.trigger('update')
    
    },

    updateStateProps: function(buttonState, pDisplay){
        if(pDisplay === 'none'){
            PRYR_STORE._set('pDisplay', 'block')
            PRYR_STORE._set('buttonState', '-')
        } 
        else {
            PRYR_STORE._set('pDisplay', 'none')
            PRYR_STORE._set('buttonState', '+')
        }
    },
             
    fetchPryrsByQuery: function(queryObj){
        PRYR_STORE.data.pryrCollection.fetch({
            data: queryObj
        })
    },

    updateCurrentView: function(clickedView){
       PRYR_STORE._set('currentView', clickedView)
    },

    deletePryrModel: function(modelId){
        let pryrModel = PRYR_STORE.data.pryrCollection.get(modelId)
        pryrModel.destroy()
    }
}

export default ACTIONS