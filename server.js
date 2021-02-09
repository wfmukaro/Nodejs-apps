var port = process.env.PORT || 1337;
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
///connection string to cloud mongodb database
const url = "mongodb+srv://admin:admin123@wpr252.xtsfi.mongodb.net/humanresources?retryWrites=true&w=majority";
/// database connection
var dbconnect;
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, database) {
    if (err) {
        console.log(err.message);
    } else {
        dbconnect = database.db("humanresources")///creates the database if is nots already created
        console.log("using " + dbconnect.databaseName + " database");

            /////
        //dbconnect.createCollection("workers", function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result, " collection created");
        //    }
        //})
      
    }
})
///register view
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))//extract form
app.get("/", function (req, res) {
    dbconnect.collection("workers").find({}).toArray(function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(results)
            let data = results;
            res.render("index", { data })
        }
    })
   
})
app.get("/newworker", function (req, res) {
        res.render("form")
})
app.post("/addworker", function (req, res) {
    console.log(req.body);
    let newWorker = req.body;
    dbconnect.collection("workers").insertOne(newWorker, function (err, result) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("workers successfully added to the database");
        }
    })
    dbconnect.collection("workers").find({}).toArray(function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(results)
            let data = results;
            res.render("index", { data })
        }
    })
})
app.get("/jobs/:job", function (req, res) {
    let search = req.params
    console.log(search);
    dbconnect.collection("workers").find({ "job": search.job }).toArray(function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(results)
            let data = results;
            res.render("index", { data })
        }
    })
})

app.listen(port)