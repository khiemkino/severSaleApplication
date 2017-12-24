const mongoose = require('mongoose')
/*
	Account Schema
*/
const AccountSchema = mongoose.Schema = {
	username: String,
	password: String,
	email:String,
	image:String,
	phone:String,
	birthDay:String,
	genre:Boolean,
	balance:String
}

module.exports = mongoose.model("Account", AccountSchema)