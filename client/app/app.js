'use strict';

angular.module('app', [
  'app.index',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .otherwise({
    redirectTo: '/'
  })
});