var angularApp = angular.module('population', ['ngResource','ngRoute']);
angularApp.config(function ($routeProvider,$httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'templates/landing.html',
		controller: 'HomeController',
		controllerAs: 'hc'
	})

})


//controller

angularApp.controller('HomeController',['$resource',function($resource){
	var vm=this;
	var govtResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP');
	vm.govtResponse= govtResource.query({FIPS:'IN',time:'2012',SEX:'0'});
	console.log(vm.govtResponse);
}]);

