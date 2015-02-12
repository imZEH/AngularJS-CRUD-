 'use strict' 

var Application = Application || {};

Application.Controllers = angular.module('applicaton.controllers',[]);
Application.Services = angular.module('applicaton.services',[]);
Application.Values = angular.module('applicaton.values',[]);
// Application.Constant = angular.module('applicaton.Constant',[]);

angular.module('applicaton',['ngRoute','applicaton.controllers','applicaton.services','applicaton.values'])

  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/home', {
        templateUrl: 'partials/partial1.html',
        controller: 'DisCtrl'
      })
      .when('/Addphone',{
        templateUrl: 'partials/partial1.html',
        controller: 'DisCtrl'
      })
      .when('/Editphone/:phonename',{
        templateUrl: 'partials/partial1.html',
        controller: 'DisCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);