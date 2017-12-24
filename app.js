const koa = require('koa')
const mongoose = require('mongoose')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const router = require('koa-simple-router')
const error = require('koa-json-error')
const logger = require('koa-logger')
const koaRes = require('koa-res')
const handleError = require('koa-handle-error')
// controller
const product = require('./controller/product')
const account = require('./controller/account')
const cart = require('./controller/cart')
const app = new koa()

// Mongoose Config
mongoose.Promise = require('bluebird')
mongoose
	// .connect('mongodb://khiemkino:khiemhaha@ds161146.mlab.com:61146/arigatou_server')
	.connect('mongodb://localhost:27017/arigatou')
	.then((response) => {
		console.log('mongo connection created')
	})
	.catch((err) => {
		console.log("Error connecting to Mongo")
		console.log(err);
	})

// -------------------------
// 		 Server Config
// -------------------------
// Error handling
app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.status = err.status || 500
		ctx.body = err.message
		ctx.app.emit('error', err, ctx)
	}
})

// Logging
app.use(logger())
// Body parsing
app.use(bodyParser())
// Format response as JSON
app.use(convert(koaRes()))
// Configure router
app.use(router(event => {
	event.get('/sayhello', async (ctx) => {
		ctx.body = 'hello world'
	}),
		event.get('/product', product.getProduct),
		event.post('/product', product.createProduct),
		event.put('/product', product.updateProduct),
		event.delete('/product', product.deleteProduct),
		//Account
		event.get('/account', account.getAccount),
		event.post('/account', account.createAccount),
		event.put('/account', account.updateAccount),
		event.delete('/account', account.deleteAccount).account,
		event.post('/findUser', account.findUserById),
		//Cart
		event.get('/cart', cart.getCart),
		event.post('/cart', cart.createCart),
		event.delete('/cart', cart.deleteCart).cart
}))

app.listen(process.env.PORT || 3000)