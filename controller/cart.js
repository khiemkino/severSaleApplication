const Cart = require('../model/Cart')

exports.getCart = async (ctx) => {
	const cart = await Cart.find({})
	if (!cart) {
		throw new Error("There was an error while retrieving your cart.")
	} else {
		ctx.body = cart
	}
}

exports.createCart = async (ctx) => {
	const result = await Cart.create({
		buyProduct: ctx.request.body.buyProduct,
		paymentType: ctx.request.body.paymentType,
		totalPrice:ctx.request.body.totalPrice,
		address:ctx.request.body.address,
		isBuying:ctx.request.body.isBuying,
	})
	if (!result) {
		throw new Error('Cart create failed.')
	} else {
		ctx.body = {message: 'New cart created!', data: result}
	}
}

exports.deleteCart= async (ctx) => {
	const result = await Cart.findById({_id: ctx.request.body.id})
	if (!result) {
		throw new Error('Cart failed to delete.')
	} else {
		ctx.status = 200
		ctx.body = {message: 'success!'}
	}
}