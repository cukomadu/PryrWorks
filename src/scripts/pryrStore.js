import Backbone from 'backbone'
import _ from 'underscore'
import { PryrCollection } from './models/models'

const PRYR_STORE = _.extend(Backbone.Events, {

	data: {
		collection: new PryrCollection()
	}
})