function removeDataOld(db,callback){
	var collection = db.collection('offert');
	collection.remove( { } );
}


module.exports = removeDataOld;