//install mongodb package
const url = "mongodb+srv://admin:admin123@wpr252.xtsfi.mongodb.net/webdevelopment?retryWrites=true&w=majority"
///local mongodb database
// const url="mongodb://localhost:27017"

//create a mongodb client
const MongoClient = require("mongodb").MongoClient;

//make client connect to mongodb service
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, database) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Application successfully connected to mongodb");
        var dbconnect = database.db("webdevelopment");
        console.log("Switched to " + dbconnect.databaseName + " database");

        //////create a collection
        //dbconnect.createCollection("employees", function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log("collection created");
        //    }
        //})
        //////////

        ///inserting one object
        let student = { name: "simon", age: 23, major: "Business Intelligence" }
        //dbconnect.collection("students").insertOne(student, function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result.insertedCount,"document inserted");
        //    }
        //})

        ///insert an employee in the employees collection 
        //let employee = { name: "simon", age: 23, job: "Business Intelligence" }

        let employee = [
            { name: "Bryan", surname: "Fury", age: 24, JobTitle: "Boxer", salary: 1000000 },
            { name: "Simon", surname: "Barry", age: 20, JobTitle: "pianist", salary: 80000 },
            { name: "Nok", surname: "wanda", age: 24, JobTitle: "Player", salary: 5000000 },
            { name: "Mon", surname: "day", age: 12, JobTitle: "Learning", salary: 14000 },
            { name: "Sham", surname: "mah", age: 21, JobTitle: "WannaBe", salary: 8000 }
        ]

        ////////////////////
        ///inserting many object
        //let students = [
        //    { _id: 1, name: "simon", age: 23, major: "Business Intelligence" },
        //    { _id: 2, name: "thabo", age: 23, major: "Software Engineering" },
        //    { _id: 3, name: "zane", age: 23, major: "Business Intelligence" },
        //    { _id: 4, name: "lethabo", age: 23, major: "Business Intelligence" },
        //    { _id: 5, name: "meegan", age: 23, major: "Software Engineering" },
        //]
        //dbconnect.collection("students").insertMany(students, function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result.insertedCount, "document inserted");
        //    }
        //})

        /// select/query data from the database
        //query all
        //select * from students sql
        //dbconnect.collection("students").find({}).toArray(function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result);
                
        //    }
        //})
        ////////filter/ query specifics
        /// select * from students
        // where major="Business Intelligence"
        //dbconnect.collection("students").find({ major: 'Business Intelligence'}).toArray(function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log("search for students doing Business Intelligence");
        //        console.log(result);

        //    }
        //})
        ///select > <=
        //dbconnect.collection("students").find({ age: {$gte:30} }).toArray(function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log("learners aged 30 and above");
        //        console.log(result);

        //    }
        //})

        //////////////////////////////
        ///manipulation of data
        //dbconnect.collection("students").find({ major: 'Business Intelligence' }).toArray(function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log("search for students doing Business Intelligence");
        //        /// print only names of learners doing Business Intelligence
        //        for (var i = 0; i < result.length; i++) {
        //            console.log(result[i].name);
        //        }

        //        ////get the average age of learners doing Business Intelligence
        //        console.log(result.map(item => item.age).reduce((sum, cur) => sum + cur) / result.length);
        //    }
        //})
        ///sorting data
        // sort according to {name:1}ascending  use-1 to sort in descending order {name:-1}
        ///name is property that you need to use for sorting
        //dbconnect.collection("students").find({ major: 'Business Intelligence' }).sort({ name: 1 }).toArray(function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log("sorted result");
        //        console.log(result);
        //    }
        //})


        /// delete one document
        //dbconnect.collection("students").deleteOne({ "name": "thabo" }, function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result.deletedCount, "students deleted");
        //    }
        //})
        /// delete many  documents
        //dbconnect.collection("students").deleteMany({ major: "Software Engineering" }, function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result.deletedCount, "students deleted");
        //    }
        //})

        //////////////updating
        //update many
        //let filtermany = { major: 'Business Intelligence' }
        //let updatemanyqry = { $set: { major: 'BI' } }
        //dbconnect.collection("students").updateMany(filtermany, updatemanyqry, function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result.modifiedCount, "students updated");
        //    }
        //})

        ////update one document
        //let filterone = { name:"zane" }
        //let updateoneqry = { $set: { "surname": "jones", modules: ["WPR252", "MATHS252"] } }
        //dbconnect.collection("students").updateOne(filterone, updateoneqry, function (err, result) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log(result.modifiedCount, "students updated");
        //    }
        //})

        //dbconnect.dropCollection("students", function (err, delOK) {
        //    if (err) {
        //        console.log(err.message);
        //    } else {
        //        console.log("collection deleted");
        //    }
        //})


    }

})
