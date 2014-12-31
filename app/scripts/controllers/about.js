'use strict';

/**
 * @ngdoc function
 * @name bamDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bamDemoApp
 */
angular.module('bamDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
