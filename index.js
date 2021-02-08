const Mongo = require('./data/Books.data')

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const { mongo } = require('mongoose')
const app = express()
const cors =require("cors")
app.use(cors());
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/createbook', (req, res) => {
	res.render('books/create')
})

app.post('/createbook', (req, res) => {
	let book = {
		title: req.body.title,
		author: req.body.author,
		year: req.body.year,
	}
	Mongo.insert(book).then((data) => {
		if (data) {
			res.render('success')
		} else {
			res.render('fail', { err: data })
		}
	})
})

app.get('/books', (req, res) => {
	let books
	Mongo.selectAll().then((data) => {
		books = data
		console.log(data)
		res.render('Books/ReadAll', { books: books })
	})
})
app.get('/booksjson', (req, res) => {
	let books
	Mongo.selectAll().then((data) => {
		books = data
		console.log(data)
		res.json(data)
	})
})


app.listen(8000, () => {
	console.log('Server started on port 3000')
})
