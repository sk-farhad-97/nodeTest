var mongoose = require('mongoose');

//Genra Cchema

var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true
	},
	price:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book =  module.exports = mongoose.model('books',bookSchema, 'books');
// 3rd argumment for forcing the collection name as it is
//Get Books

module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
	//the result is kept the 2nd argument of the callback called newBook by mongooes method
}

module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
	//the result is kept the 2nd argument of the callback called book by mongooes method
}

module.exports.addBook = function(book, callback){
	console.log("trying here from book.js!");
	console.log(book);
	Book.create(book, callback);
	//the new book name is kept the 2nd argument of the callback called book by mongooes method
}

module.exports.updateBook = function(id, book, options, callback){
	 var query = { _id : id};
	 var update = {
	 	title : book.title,
	 	gerne : book.gerne,
	 	author: book.author,
	 	price : book.price
	 };
	 
	Book.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteBook = function(id, callback){
	var query = { _id : id};
	Book.remove(query, callback);
}