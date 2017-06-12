'use strick';
angular.module('webappApp')
   .controller('MainCtrl', ['$scope','$http','$window','$location',
	   function($scope, $http, $window, $location){
	   
	   
	   $scope.cambiarPag = function(){
		   $location.path("/paginaDos");
	   }
   }])
   