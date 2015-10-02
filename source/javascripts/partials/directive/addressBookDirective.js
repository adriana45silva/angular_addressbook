app.directive('addressDirective', function (){
  return {
    restrict: 'E',
    controller: 'addressBookController',
    controllerAs: 'addressBookCtrl',
    templateUrl: 'javascripts/partials/directive/addressBookDirective.html',
  }
});