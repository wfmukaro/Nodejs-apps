const express = require("express");
const app = express();
//third party middleware 
//let bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded())
app.use(express.urlencoded({ extended: true }))
//rendering html files, pdf,word
app.get("/", function (req, res) {
    res.sendFile("./views/index.html", { root: __dirname })
})
app.get("/products", function (req, res) {
    res.sendFile("./views/products.html", { root: __dirname })
})
app.get("/document", function (req, res) {
    res.sendFile("./views/document.pdf", { root: __dirname })
})
app.get("/services", function (req, res) {
    res.redirect("/products")
})
app.get("/contactus", function (req, res) {
    res.sendFile("./views/contactus.html", { root: __dirname })
})
let queries = [];
app.post("/formData", function (req, res) {
    console.log(req.body);
    let comments = req.body
    queries.push(comments)
    res.send(queries)
})
app.use(function (req, res) {
    res.sendFile("./views/404.html", { root: __dirname })
})
app.listen(1337)
///////create express web server that collect student data(name,surname,age,program) using and prints 
//the collected student data