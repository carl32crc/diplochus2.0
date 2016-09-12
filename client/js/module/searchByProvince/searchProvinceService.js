angular.module('provinceService',[])
	.factory('provinceService', function ($http) {

		var urlProvince =  '/search-province/<PROVINCE>';

		function getProvince ( valueToKey ) {
			var url  = urlProvince.replace('<PROVINCE>', valueToKey);
			return $http.get(url);
		}

	return {
			getProvince : getProvince
		};
	});