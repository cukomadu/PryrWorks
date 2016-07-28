import Backbone from 'backbone'
import _ from 'underscore'
import { PryrCollection } from './models/models'

const PRYR_STORE = _.extend(Backbone.Events, {

	data: {
		collection: new PryrCollection()
	},

	_emitChange: function(){
		this.trigger('updatePryrList')
	},

	_getData: function(){ //state lives here
		return _.clone(this.data)
	},

	initialize: function(){
		this.data.collection.on('sync update', this._emitChange.bind(this))
	}
})

PRYR_STORE.initialize()

export default PRYR_STORE