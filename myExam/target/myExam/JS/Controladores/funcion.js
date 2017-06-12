'use strick';
angular.module('webappApp')
   .controller('MainCtrl', ['$scope','$http','$window','$location',
	   function($scope, $http, $window, $location){
	   
	   $scope.username="beto";
	   $scope.password="123";
	   $http({
		   method:'POST',
		   data:{
			   usuario: $scope.username,
			   password: $scope.password			  
		   },
		   url: "http://localhost:8080/restFull2/services/hola/datos"
	   }).then(function(dataCP){
		   console.log(dataCP.data)
		   if(dataCP.data.respuesta.success){
			  
			   $scope.alumnos = dataCP.data.persona;
			   console.log(dataCP.data.persona)
		   }
	   });
	   
	   
	   $scope.cambiarPag = function(){
		   $location.path("/paginaDos");
	   }
   }])
   