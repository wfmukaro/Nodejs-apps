var port = process.env.PORT || 1337;
const express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
let employee = [
    { name: "Bryan", surname: "Fury", age: 24, JobTitle: "Boxer", salary: 1000000 },
    { name: "Simon", surname: "Barry", age: 20, JobTitle: "pianist", salary: 80000 },
    { name: "Nok", surname: "wanda", age: 24, JobTitle: "Player", salary: 5000000 },
    { name: "Mon", surname: "day", age: 12, JobTitle: "Learning", salary: 0 },
    { name: "Sham", surname: "mah", age: 21, JobTitle: "WannaBe", salary: 8000 }
]



app.get("/", function (request, response) {
    response.render("Employees.ejs", { employee });
})
app.post("/addEmployee", function (request, response) {
    const values = request.body;
    employee.push(values);
    response.render("Employees.ejs", { employee });
})
app.use(function (request, response) {
    response.send("404.ejs");
});
app.listen(port);