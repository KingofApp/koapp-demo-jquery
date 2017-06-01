(function() {
  'use strict';

  angular
    .module('jquerydemo', [])
    .controller('jqueryDemoController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    // Register upper level modules
    structureService.registerModule($location, $scope, 'jquerydemo');

  }
}());
