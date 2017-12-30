const Product = require('../model/Product')

exports.getProduct = async (ctx) => {
	const product = await Product.find({})
	if (!product) {
		throw new Error("There was an error while retrieving your product.")
	} else {
		ctx.body = product
	}
}

exports.createProduct = async (ctx) => {
	const result = await Product.create({
		name: ctx.request.body.name,
		price: ctx.request.body.price,
		information:ctx.request.body.information,
		image:ctx.request.body.image,
		size:ctx.request.body.size,
		category:ctx.request.body.category,
		amount:ctx.request.body.amount,
		rating:ctx.request.body.rating
	})
	if (!result) {
		throw new Error('Product create failed.')
	} else {
		ctx.body = {message: 'New product created!', data: result}
	}
}

exports.updateProduct = async (ctx) => {
	const searchByName = {name: ctx.request.body.name}
	const update = {		
		name: ctx.request.body.newName,
		price: Numctx.request.body.newPrice,
		information:ctx.request.body.newInformation,
		image:ctx.request.body.newImage,
		size:ctx.request.body.newSize,
		category:ctx.request.body.newCategory,
		amount:ctx.request.body.newAmount,
		rating:ctx.request.body.newRating
	}
	const result = await Product.findOneAndUpdate(searchByName, update)
	if (!result) {
		throw new Error('Product failed to update.')
	} else {
		console.log(result)
		ctx.body = {message: 'Product updated!', data: result}
	}
}

exports.deleteProduct = async (ctx) => {
	const result = await Product.findOneAndRemove({name: ctx.request.body.name})
	if (!result) {
		throw new Error('Product failed to delete.')
	} else {
		ctx.status = 200
		ctx.body = {message: 'success!'}
	}
}