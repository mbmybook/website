(function() {
  'use strict';
  var app = angular.module('websiteApp');

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/coming-soon', {
        templateUrl: 'public/html/index.html',
        controller: 'MainCtrl',
      })
			.when('/joomag', {
				templateUrl: 'public/html/joomag.html',
				controller: 'MainCtrl',
			})
			.when('/yudu', {
				templateUrl: 'public/html/yudu.html',
				controller: 'MainCtrl',
			})
			.when('/fliphtml5', {
				templateUrl: 'public/html/fliphtml5.html',
				controller: 'MainCtrl',
			})
      .otherwise({redirectTo : '/coming-soon'});
  }]);
})();