
app.factory('taskTypeFactory', function() {
  var factory = {};
  factory.getTypes = function() {
    var types = ['Home','Work','Outdoor','School'];
    return types;
  }
  return factory;
});
