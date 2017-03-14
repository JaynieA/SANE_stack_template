MY_APP.controller( 'HomeController', [ '$scope', '$http', 'mainFactory',
 function( $scope, $http, mainFactory ) {
  console.log('in HomeController');
  console.log('Number from mainFactory-->',mainFactory.number);
  mainFactory.number++;
  console.log('Added to number in home. Current #:', mainFactory.number);
}]); // end HomeController
