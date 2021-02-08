const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
let repairs = [
    { custName: 'David', carModel: 'BMW i250', fee: 800 },
    { custName: 'Vernon', carModel: 'Audi A3', fee: 1500 },
    { custName: 'Ryan', carModel: 'Renault Sandero', fee: 200 },
]

app.get('/', (req, res) => {
	res.render('index',{repairs:repairs})
})

app.get('/form', (req, res) => {
	res.render('form')
})

app.post('/formaction', (req, res) => {
	let custName = req.body.userNameInput
	let carModel = req.body.userCarInput
    let fee = req.body.userFeeInput
    if(custName == '' || carModel == '' || fee == ''){
        res.send('please type in some valid data')
    }else{
        repairs.push({custName,carModel,fee})
        res.redirect('/')
    }
})

app.get('**', (req, res) => {
	res.render('404')
})

app.listen(3000, () => {
	console.log('Server started on port 3000')
})
