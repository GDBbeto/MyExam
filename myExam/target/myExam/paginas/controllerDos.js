'use strick';

angular.module('webappApp')
   .controller('PaginasDosCtrl', ['$scope','$http',
	   function($scope, $http){
	   console.log("Sucess paginas tres..");
	     
	   
	   $scope.username="beto";
	   $scope.password="123";
	   $http({
		   method:'POST',
		   data:{
			   usuario: $scope.username,
			   password: $scope.password			  
		   },
		   url: "http://localhost:8080/myExam/services/datos/persona"
	   }).then(function(dataCP){
		   console.log(dataCP.data.nombre)
		   console.log(dataCP.data)
		   if(dataCP.data.status){
			  
			   $scope.nombre= dataCP.data.nombre;
			   $scope.apePat=dataCP.data.apePat;
			   $scope.apeMat=dataCP.data.apeMat;
			   $scope.edad=dataCP.data.edad;
			   $scope.sexo=dataCP.data.sexo;
			   
		   }
	   });
	   
	   
   }])