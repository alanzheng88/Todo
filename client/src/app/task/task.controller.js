
app.controller('BodyCtrl', function($scope, taskTypeFactory) {
  init();

  // can group initialization using a function
  function init() {
    $scope.types = taskTypeFactory.getTypes();
  }
});
