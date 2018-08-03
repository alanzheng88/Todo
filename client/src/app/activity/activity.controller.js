
app.controller('ActivityCtrl', function($scope) {
  $scope.findActivity = function() {
    var location = $scope.newActivity.location;
    var age = $scope.newActivity.age;
    $scope.randomActivity = `Snowboarding at ${location || '<unknown>'} with
                            Alan who is age ${age || '<unknown>'}`;
  };
});
