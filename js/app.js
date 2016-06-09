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


angularApp.controller("HomeController",['$resource','$filter',function($resource,$filter){
  var vm=this;
    vm.getInfo = function(){
      console.log(this)
      var govtResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&SEX=0');
      vm.govtResponse = govtResource.query({FIPS:vm.country,time:vm.year,key:'099b6855b62209b10274a5d6cec26395c298f8eb'});
      console.log(vm.govtResponse);
    }
}]);
