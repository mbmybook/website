(function() {
  'use strict';
  var app = angular.module('websiteApp');

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/coming-soon', {
        templateUrl: 'public/html/index.html',
        controller: 'MainCtrl',
      })
      .otherwise({redirectTo : '/coming-soon'});
  }]);
})();