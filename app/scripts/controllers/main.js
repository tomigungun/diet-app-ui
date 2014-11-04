'use strict';

/**
 * @ngdoc function
 * @name dietApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dietApp
 */
angular.module('dietApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
