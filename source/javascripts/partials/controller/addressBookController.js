app.controller('addressBookController', ['$scope', 'service', function ($scope, service) {
  service.success(function(data) {
    $scope.tableData = data;
  });
}]);