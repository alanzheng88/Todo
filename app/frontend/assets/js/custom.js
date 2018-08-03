
var app = angular.module('todoApp', ["ngRoute"])

// ROUTES

app.config(function($routeProvider) {
  $routeProvider
    .when('/weather',
        {
          controller: 'WeatherCtrl',
          templateUrl: 'partials/weather.html'
        })
    .when('/activity',
        {
          controller: 'ActivityCtrl',
          templateUrl: 'partials/activity.html'
        })
    .otherwise({ redirectTo: '/' });
});


// CONTROLLERS

var controllers = {};
controllers.BodyCtrl = function($scope) {
  $scope.types = ['Home','Work','Outdoor'];
};

controllers.WeatherCtrl = function($scope) {
  $scope.statusInfo = "Rainy";
}

controllers.ActivityCtrl = function($scope) {
  $scope.findActivity = function() {
    var location = $scope.newActivity.location;
    var age = $scope.newActivity.age;
    $scope.randomActivity = `Snowboarding at ${location || '<unknown>'} with
                            Alan who is age ${age || '<unknown>'}`;
  };
}

app.controller(controllers);
