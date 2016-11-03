(function() {
  'use strict';
  var app = angular.module('websiteApp', ['ngRoute']);

  app.filter('trustAsHtml', function($sce) { return $sce.trustAsHtml; });
  app.run();
})();