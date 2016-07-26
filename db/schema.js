const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})


// -----------------------
// PRYR LISTS
// -----------------------
const pryrSchema = new Schema({
	title: {type: String/*, required: true*/},
	to: {type: String/*, required: true*/},
	from: {type:String/*, required: true*/},
	reply_to: {type:String},
	description: {type: String/*, required: true*/},
	category: {type: String},
	cc_bcc: {type: String},
	answered: {type: Boolean, default: false}

})

module.exports = {
  User: createModel('User', usersSchema),
  Pryr: createModel('Pryr', pryrSchema)
}