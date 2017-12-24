const mongoose = require('mongoose')

/*
	Cart Schema
*/
 const CartSchema = mongoose.Schema = {
	buyProduct: Array,
	paymentType: String,
	totalPrice:String,
	address:String,
	isBuying:Boolean
}

module.exports = mongoose.model("Cart", CartSchema)