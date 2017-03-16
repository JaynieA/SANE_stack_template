MY_APP.controller( 'SecondaryController', [ '$http', 'mainFactory',
 function( $http, mainFactory ) {
  console.log('in SecondaryController');
  console.log('mainFactory # from secondary-->', mainFactory.number);
  let _this = this;
  _this.number = mainFactory.number;
}]); // end HomeController
