var mongoose = require('mongoose');

//Genra Cchema

var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre =  module.exports = mongoose.model('genres', genreSchema,'genres');
// 3rd argumment for forcing the collection name as it is

//Get Genres

/*module.exports.getGenres = function(callback, limit){
	console.log("from genre.js")
	Genre.find(callback).limit(limit);
}*/

module.exports.getGenres = function(callback){
	console.log("from genre.js")
	Genre.find(callback);

}

//add Genre

module.exports.addGenre = function(genre){
	console.log("trying here from genre.js!");
	console.log(genre);
	Genre.create(genre);
}

//Update Genre

module.exports.updateGenre = function(id, genre, options, callback){
	 var query = { _id : id};
	 var update = {
	 	name : genre.name
	 };
	 
	Genre.findOneAndUpdate(query, update, options, callback);
}