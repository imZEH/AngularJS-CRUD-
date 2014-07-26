'use strict';

var DisCtrl = function($scope,$routeParams,$location,ProductFactory, Developer){
  $scope.phones = ProductFactory.getPhones() || [];
  $scope.newphone = {};
  var pid=2;
  var i=0;
  $scope.layout = 'grid';
  $scope.clear = function(){
    $scope.newphone = {};
  }
  // console.log(Developer.name);
  $scope.addphone = function() {
    if($scope.newphone.id == null){
       $scope.newphone.id = pid++;
       ProductFactory.addphones($scope.newphone);
       $location.path('/home');
       // $scope.layout = 'list';
       
    }else{
      for(i in $scope.phones) {
            if($scope.phones[i].id == $scope.newphone.id) {
            $scope.phones[i] = $scope.newphone;
            }
        }
    }
   
  };

  $scope.edit = function(id) {
    $scope.newphone = $scope.phones[id];
  };

  $scope.delete = function(index) {
    $scope.phones.splice(index,1);
  }

};

Application.Controllers.controller('DisCtrl',['$scope','$routeParams','$location','ProductFactory',DisCtrl]);