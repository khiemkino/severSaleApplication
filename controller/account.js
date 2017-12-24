const Account = require('../model/Account')

exports.getAccount = async (ctx) => {
	const account = await Account.find({})
	if (!account) {
		throw new Error("There was an error while retrieving your Account.")
	} else {
		ctx.body = account
	}
}

exports.createAccount = async (ctx) => {
	const result = await Account.create({
		username: ctx.request.body.username,
		password: ctx.request.body.password,
		email:ctx.request.body.email,
		image:ctx.request.body.image,
		phone:ctx.request.body.phone,
		birthDay:ctx.request.body.birthDay,
		genre:ctx.request.body.genre,
		balance:ctx.request.body.balance
	})
	if (!result) {
		throw new Error('Account create failed.')
	} else {
		ctx.body = {message: 'New account created!', data: result}
	}
}

exports.updateAccount = async (ctx) => {
	const searchByName = {username: ctx.request.body.username}
	const update = {		
		username: ctx.request.body.newUsername,
		password: ctx.request.body.newPassword,
		email:ctx.request.body.newEmail,
		image:ctx.request.body.newImage,
		phone:ctx.request.body.newPhone,
		birthDay:ctx.request.body.newBirthDay,
		genre:ctx.request.body.newGenre,
		balance:ctx.request.body.newBalance
	}
	const result = await Account.findOneAndUpdate(searchByName, update)
	if (!result) {
		throw new Error('Account failed to update.')
	} else {
		console.log(result)
		ctx.body = {message: 'Account updated!', data: result}
	}
}

exports.deleteAccount = async (ctx) => {
	const result = await Account.findOneAndRemove({username: ctx.request.body.username})
	if (!result) {
		throw new Error('Account failed to delete.')
	} else {
		ctx.status = 200
		ctx.body = {message: 'success!'}
	}
}

exports.findUser = async (ctx) => {
	const result = await Account.find({username: ctx.request.body.username})
	if (!result) {
		throw new Error('Account not yet register.')
	} else {
		ctx.status = 200
		ctx.body = {message: 'success!',data:result}
	}
}