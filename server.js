var port = process.env.PORT || 1337;
//load modules
const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
//set view engine
app.set("view engine", "ejs");
function auth (req, res, next) {
  console.log(req.headers);
  var authHeader = req.headers.authorization;
  if (!authHeader) {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      next(err);
      return;
  }

  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  if (user == 'admin' && pass == 'password') {
      next(); // authorized
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      err.status = 401;
      next(err);
  }
}

app.use(auth);

const MongoClient = require("mongodb").MongoClient;
///connection string to cloud mongodb database
//const url = "mongodb+srv://admin:admin123@wpr252.xtsfi.mongodb.net/webdevelopment?retryWrites=true&w=majority";
/// database connection
let dbconnect;
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, database) {
    if (err) {
        console.log(err.message);
    } else {
        dbconnect = database.db("webdevelopment")///creates the database if is nots already created
        console.log("using " + dbconnect.databaseName + " database");

    }
})
//extract form
app.use(express.urlencoded({ extended: true }))
///create database
//const database = new sqlite3.Database("blog.db", function (err) {
//    if (err) {
//        console.log(err.message);
//    } else {
//        console.log("connected to the database");
//    }
//})
///create a table
//database.run("create table blogs( blog_id integer primary key autoincrement not null,\
//fname nvarchar(30) not null,\
//topic nvarchar(30) not null,\
//post nvarchar(300) not null,\
//date nvarchar(30) not null)", function (err) {
//        if (err) {
//            console.log(err.message);
//        } else {
//            console.log("table created");
//        }
//})
app.get("/", function (req, res) {
    //database.all("select * from blogs", function (err, rows) {
    //    if (err) {
    //        console.log(err.message);
    //    } else {
    //        console.log(rows);
    //        res.render("index", {rows})
    //    }
    //})
    ///////////
    dbconnect.collection("blogs").find({}).toArray(function (err, rows) {
    if (err) {
            console.log(err.message);
        } else {
            console.log(rows);
            res.render("index", {rows})
        }

    })
})
//let insert="INSERT INTO blogs (fname,topic,post,date) VALUES(?,?,?,?)"
app.post("/blogData", function (req, res) {
    let blog = req.body;
    blog["date"] = new Date();

    /// insert one object blog in the database
   /// database.run(insert, [blog.name, blog.topic, blog.blog, blog.date])
    ///
    //database.all("select * from blogs", function (err, rows) {
    //    if (err) {
    //        console.log(err.message);
    //    } else {
    //        console.log(rows);
    //        res.render("index", { rows })
    //    }
    //})
    dbconnect.collection("blogs").insertOne(blog, function (err, result) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(result.insertedCount, "One blog inserted");
        }
    })
    dbconnect.collection("blogs").find({}).toArray(function (err, rows) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(rows);
            res.render("index", { rows })
        }

    })


})

//database.all("select * from blogs", function (err, rows) {
//    if (err) {
//        console.log(err.message);
//    } else {
//        console.log(rows.sort((a, b) => b.date-a.date));
       
//    }
//})
app.listen(port)
