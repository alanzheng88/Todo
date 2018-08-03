
var app = angular.module('todoApp', ["ngRoute"])

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

