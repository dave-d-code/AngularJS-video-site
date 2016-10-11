// main module for the videoApp

var videoApp = angular.module('videoApp', []); // if we had routes, they would go here

// controller section. normally goes into separate file

videoApp.controller('VideoController', ['$scope', function($scope) {
	$scope.message = "Hello, AngularJS";
}]);