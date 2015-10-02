app.factory('service', ['$http', function($http) {
  return $http.get('https://dl.dropboxusercontent.com/u/4747219/addressbook.json')

  .success(function (data) {
      return data;
  })

}]);