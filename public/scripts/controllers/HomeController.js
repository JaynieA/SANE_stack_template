MY_APP.controller( 'HomeController', [ '$http', 'mainFactory',
 function( $http, mainFactory ) {
  console.log('in HomeController');
  let _this = this;
  //NOTE: the following demonstrates storing the number in a service
  console.log('Number from mainFactory-->', mainFactory.number);
  //Add 1 to the number
  mainFactory.number++;
  console.log('Added to number in home. Current #:', mainFactory.number);
  _this.number = mainFactory.number;
  //Define greeting object
  _this.greeting = {
    text: '',
    visible: false,
  }; // end message

  _this.sayHi = function() {
    //GET text string from server
    $http({
      method: 'GET',
      url: '/main'
    }).then(function(response) {
      console.log('SUCCESS-->', response.data.results);
      //Display greeting
      _this.greeting.visible = true;
      _this.greeting.text = response.data.results[0].text;
    }).catch(function(err) {
      console.log('ERROR-->', err);
    }); // end $http
  }; // end getNumber

}]); // end HomeController
