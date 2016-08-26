angular.module("myOffersServices")
	.factory('offerService', function ($http) {

		function getRankings ( valueToKey ) {
			var url  = '/offers';
			return 	$http.get(url)
		}

	   return {
			getRankings : getRankings
		}
	})