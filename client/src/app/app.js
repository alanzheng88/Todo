
var app = angular.module('todoApp', ["ngRoute"])

// FACTORIES
/*
app.factory('taskTypeFactory', function() {
  var factory = {};
  factory.getTypes = function() {
    var types = ['Home','Work','Outdoor','School'];
    return types;
  }
  return factory;
});
*/

// ROUTES

app.config(function($routeProvider) {
  $routeProvider
    .when('/weather',
        {
          controller: 'WeatherCtrl',
          templateUrl: 'weather/weather.html'
        })
    .when('/activity',
        {
          controller: 'ActivityCtrl',
          templateUrl: 'activity/activity.html'
        })
    .otherwise({ redirectTo: '/' });
});

// CONTROLLERS
/*
app.controller('BodyCtrl', function($scope, taskTypeFactory) {
  init();

  // can group initialization using a function
  function init() {
    $scope.types = taskTypeFactory.getTypes();
  }
});
*/

/*
app.controller('WeatherCtrl', function($scope) {
  $scope.statusInfo = "Rainy";
});
*/

/*
app.controller('ActivityCtrl', function($scope) {
  $scope.findActivity = function() {
    var location = $scope.newActivity.location;
    var age = $scope.newActivity.age;
    $scope.randomActivity = `Snowboarding at ${location || '<unknown>'} with
                            Alan who is age ${age || '<unknown>'}`;
  };
});
*/

