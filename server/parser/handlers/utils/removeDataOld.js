function removeDataOld(db,callback){
	var collection = db.collection('offers');
	collection.remove( { } );
}


module.exports = removeDataOld;