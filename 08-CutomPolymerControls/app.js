

angular.module('custompolymer', ['ngRoute'  , 'custompolymer.controller' ])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeController'
	})
	.when('/products', {
	    templateUrl: 'views/products.html',
	     controller: 'ProductsController'
	})
	.when('/simpleelement', {
	    templateUrl: 'views/simpleelement.html'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]);