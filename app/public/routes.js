(function() {
  'use strict';
  var app = angular.module('websiteApp');

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
			.when('/', {
				templateUrl: 'public/html/index.html',
				controller: 'MainCtrl',
			})
      .when('/about', {
        templateUrl: 'public/html/about.html',
        controller: 'MainCtrl',
      })
      .when('/issues', {
        templateUrl: 'public/html/issues.html',
        controller: 'MainCtrl',
      })
      .when('/events', {
        templateUrl: 'public/html/events.html',
        controller: 'MainCtrl',
      })
      .when('/coming-soon', {
        templateUrl: 'public/html/coming-soon.html',
        controller: 'MainCtrl',
      })
			.when('/fliphtml5', {
				templateUrl: 'public/html/fliphtml5.html',
				controller: 'MainCtrl',
			})
			.when('/googledrive', {
				templateUrl: 'public/html/googledrive.html',
				controller: 'MainCtrl',
			})
			// .when('/joomag', {
			// 	templateUrl: 'public/html/joomag.html',
			// 	controller: 'MainCtrl',
			// })
			// .when('/yudu', {
			// 	templateUrl: 'public/html/yudu.html',
			// 	controller: 'MainCtrl',
			// })
			// .when('/googlepdf', {
			// 	templateUrl: 'public/html/googlepdf.html',
			// 	controller: 'MainCtrl',
			// })
			// .when('/embedpdf', {
			// 	templateUrl: 'public/html/embedpdf.html',
			// 	controller: 'MainCtrl',
			// })
      .otherwise({redirectTo : '/'});
  }]);
})();