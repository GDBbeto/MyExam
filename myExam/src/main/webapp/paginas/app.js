var app=angular
   .module('webappApp',[
	   'ngResource',
	   'ngSanitize',
	   'ngRoute'
   ]).config(function ($routeProvider, $provide, $httpProvider){	   
	   $routeProvider
	      .when('/',{
	    		  templateUrl:'paginas/welcome.html',
	    		  controller: 'MainCtrl'
	    		 
         })
         .when('/paginaDos',{
        	 templateUrl:'paginas/informacion.html',
   		     controller: 'PaginasDosCtrl'
         })
         .otherwise({
                redirectTo:'/'	
         });
         }
 );