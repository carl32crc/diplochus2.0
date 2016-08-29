var express = require('express');

var showOffers = require('./handlers/showOffers');


var router = express.Router();

function getRouter(db) {

	router.get('/offers', showOffers.bind(null,db) );

	//router.get('/', getAll.bind(null, db) )

	return router;

}


module.exports = getRouter;

