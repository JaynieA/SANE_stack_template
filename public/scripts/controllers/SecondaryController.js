MY_APP.controller( 'SecondaryController', [ '$scope', '$http', 'mainFactory',
 function( $scope, $http, mainFactory ) {
  console.log('in SecondaryController');
  console.log('mainFactory # from secondary-->', mainFactory.number);
}]); // end HomeController
