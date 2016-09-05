angular.module('searchProvinceService',[])
	.factory('searchProvince', function ($http) {

		var urlApi = 'https://api.infojobs.net/api/1/offer?subcategory=programacion&city=<NAME-CITY>';

		function getNameProvince( nameProvince ) {
			var url  = urlApi.replace('<NAME-PROVINCE>', nameProvince);
			return	$http.get(url);
		}

		return {
			getNameProvince : getNameProvince
		};
});