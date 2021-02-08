///operating systems
//const os = require("os");
//console.log(os.platform());//operating name
//console.log(os.hostname());//computer name
//console.log(os.release());//operating system version
//console.log("CPus", os.cpus().length);
/////////////////////////////
//path -provides utilities for working with file and directory paths
//const path = require("path");
//let filepath="//documents///wpr252///text.js";
////console.log(path.normalize(filepath));
//console.log(path.basename(filepath));
//console.log(path.dirname(filepath));
//console.log(path.extname(filepath));
///////
//// file system-module enables interacting with the file system.
const fs = require("fs");
//// create a file and contents
//fs.writeFileSync("newFileSyn.txt", "good morning class");
//let text = "The United States dollar is the official currency of the United States and its territories per the Coinage Act of 1792. One dollar is divided into 100 cents, or into 1000 mills for accounting and taxation purposes. The Coinage Act of 1792 created a decimal currency by creating the dime, nickel, and penny coins, as well as the dollar, half dollar, and quarter dollar coins, all of which are still minted in 2020."
//fs.writeFile("newFile.doc", text, function (err) {
//    if (err) console.log(err.message);
//    console.log("the file is created and saved");
//})

///appending content to file
//let appendText = "\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
//fs.appendFile("newFile.doc", appendText, function (err) {
//    if (err) {
//        console.log(err.message);
//    } else {
//        console.log("text appended");
//    }
//})
//// reading content from the file
//fs.readFile("newFile.doc", function (err, data) {
//    if (err) {
//        console.log(err.message);
//    } else {
//        console.log(data.toString());
//    }
//})

///renaming the file
//fs.rename("WPR381 Assignment 1 v1.1.pdf", "wpr252.pdf", function (err) {
//    if (err) {
//        console.log(err.message);
//    } else {
//        console.log("file renamed");
//    }
//})
//deleting a file
//fs.unlink("wpr252.pdf", function (err) {
//    if (err) {
//        console.log(err.message);
//    } else {
//        console.log("file deleted");
//    }
//})
///checking if the files exists
//fs.exists("wpr252.pdf", function (err) {
//    if (err) {
//    console.log(err.message);
//} else {
//    console.log("file exits");
//}
//})
//////////
///creating folder
//fs.mkdir("newfolder", function (err) {
//    if (err) {
//    console.log(err.message);
//} else {
//    console.log("folder created");
//}
//}
//read contents
fs.readdir("1.1 Presentations", function (err, files) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            console.log(files[i]);
        }
    }
})