//Declare app
const MY_APP = angular.module('myApp', [ 'ngRoute']);
//Config
MY_APP.config([ '$routeProvider', function( $routeProvider ){
  $routeProvider
  .when( '/home', {
    templateUrl: './views/partials/home.html',
    controller: 'HomeController',
    controllerAs: 'home',
  })
  .when( '/secondary', {
    templateUrl: './views/partials/secondary.html',
    controller: 'SecondaryController',
    controllerAs: 'secondary',
  })
  .otherwise({
    redirectTo: 'home'
  }); // $routeProvider
}]); // end config
