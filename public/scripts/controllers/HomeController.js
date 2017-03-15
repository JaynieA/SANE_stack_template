MY_APP.controller( 'HomeController', [ '$scope', '$http', 'mainFactory',
 function( $scope, $http, mainFactory ) {
  console.log('in HomeController');
  console.log('Number from mainFactory-->',mainFactory.number);
  mainFactory.number++;
  console.log('Added to number in home. Current #:', mainFactory.number);
  $scope.number = mainFactory.number;

  //Get something from the server
  $http({
    method: 'GET',
    url: '/main'
  }).then(function(response) {
    console.log(response);
  }).catch(function(err) {
    console.log(err);
  }); // end $http

}]); // end HomeController
