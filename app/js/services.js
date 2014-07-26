'use strict';

var ProductFactory = function($http, Phones){
	var ProductFactory = {};
	ProductFactory.phones = [];

	ProductFactory.getPhones = function (){
        ProductFactory.phones = Phones.phones
		return ProductFactory.phones;
	};

	ProductFactory.addphones = function (data){
		ProductFactory.phones.push(data);
	}

	return ProductFactory;
};

Application.Services.factory('ProductFactory',['$http','Phones',ProductFactory]);