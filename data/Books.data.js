const mongoose = require('mongoose');
const password = 'AdminPassword';
const dbname ='bookDB';

mongoose.connect(`mongodb+srv://Admin:${password}@cluster0.ndzzk.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true , useUnifiedTopology: 
true  });

const BookSchema = new mongoose.Schema({
    title: { type: String, required: [true, "No title provided"] },
    author: { type: String, required: [true, "No author provided"] },
    year: { type: String, required: [true, "No year provided"] },
});

const Book = mongoose.model("Book", BookSchema);


function DBinsert(book) {

    const book_obj = new Book({
        title: book.title,
        author: book.author,
        year: book.year,
    });

    return book_obj.save();

}

function DBupdate(title, summary, body, category) {
    const book_obj = new Book({
        title: title,
        summary: summary,
        body: body,
        category: category,
        created: Date.now(),
    });

    book_obj.save(err => {
        if (err) {
            console.log("MONGO DB ERROR:" + err);
        } else {
            console.log("book has been saved");
        }
    });
}

function DBdelete(_id) {

    Book.findByIdAndRemove(_id, (err, Book) => {
    if (err) {
        console.log(err);
    }else{
        console.log("post successfully deleted");
    }
});
}

async function DBselectall() {

    let Books = await Book.find((err, Books) => {
        if (err) {
            console.log(err);
        } else {
            return Books;
        }
    });

    return Promise.resolve(Books);

}


// export 

module.exports = {
    insert: DBinsert,
    update: DBupdate,
    selectAll: DBselectall,
    delete:DBdelete
};