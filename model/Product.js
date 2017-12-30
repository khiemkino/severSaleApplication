const mongoose = require('mongoose')
/*
	Product Schema
*/
const ProductSchema = mongoose.Schema = {
	name: String,
	price: String,
	information:String,
	image:String,
	size:String,
	category:String,
	amount:String,
	rating:Number
}

module.exports = mongoose.model("Product", ProductSchema)