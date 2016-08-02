import Backbone from 'backbone'
import _ from 'underscore'
import { PryrCollection } from './models/models'

const PRYR_STORE = _.extend(Backbone.Events, {

	data: {
		pryrCollection: new PryrCollection(),
		currentView: 'allpryrstome'
	},

	_emitChange: function(){
		this.trigger('updatePryrList')
	},

	_getData: function(){ //state lives here
		return _.clone(this.data)
	},

	_set: function(key, value){
		console.log(key + ':' + value)
		if(this.data[key] === undefined){
			throw new Error('Key has no value assigned to it')
		}
			this.data[key] = value
			this._emitChange()
			console.log('>>>> store line 27', this.data)
	},

	initialize: function(){
		this.data.pryrCollection.on('sync update', this._emitChange.bind(this))
	}
})

PRYR_STORE.initialize()

export default PRYR_STORE