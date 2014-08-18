/**
 * Created by Phu Le on 8/8/14.
 */
var bdsApp = angular.module ('bdsApp', ['ngRoute', 'ngAnimate']);
bdsApp.config (function ($routeProvider, $locationProvider) {
    $routeProvider.when ('/', {
        templateUrl: 'pages/home.html',
        controller : 'mainController'
    }).when ('/sell', {
        templateUrl: 'pages/sell.html',
        controller : 'sellController'
    }).when ('/buy', {
        templateUrl: 'pages/buy.html',
        controller : 'buyController'
    }).when ('/rent', {
        templateUrl: 'pages/rent.html',
        controller : 'rentController'
    });
    $locationProvider.html5Mode (true);
    $locationProvider.hashPrefix = '!';
});
bdsApp.controller ('mainController', function ($scope) {
    $scope.showDiv = false;
    $scope.countries = {
        'An Giang'    : {
            'Maharashtra'   : ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
            'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
            'Rajasthan'     : ['Jaipur', 'Ajmer', 'Jodhpur']
        },
        'Bà Rịa - Vũng Tàu'      : {
            'Alabama'   : ['Montgomery', 'Birmingham'],
            'California': ['Sacramento', 'Fremont'],
            'Illinois'  : ['Springfield', 'Chicago']
        },
        'Bạc Liêu': {
            'New South Wales': ['Sydney'],
            'Victoria'       : ['Melbourne']
        },
        'Bắc Kạn': {

        }
    };
});

bdsApp.controller ('buyController', function ($scope) {
    $scope.message = 'Buy';
});

bdsApp.controller ('sellController', function ($scope) {
    $scope.message = 'Sell';
});

bdsApp.controller ('rentController', function ($scope) {
    $scope.message = 'Rent';
});
