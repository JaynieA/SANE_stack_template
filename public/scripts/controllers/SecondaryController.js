MY_APP.controller( 'SecondaryController', [ '$http', 'mainFactory',
 function( $http, mainFactory ) {
  console.log('in SecondaryController');
  let _this = this;
  //Declare Number from Service
  _this.number = mainFactory.number;

  _this.addGreeting = function() {
    console.log('in addGreeting');
    //Construct object to send
    let objectToSend = {
      text: _this.greetingIn,
    }; // end objectToSend
    //POST greeting to the server
    $http({
      method: 'POST',
      url: '/main',
      data: objectToSend,
    }).then(function(response) {
      console.log(response);
      //Clear the form
      _this.greetingIn = '';
    }).catch(function(err) {
      console.log(err);
    }); // end $http
  }; // end addGreeting

  _this.subtractOne = function() {
    console.log('in subtractOne');
    //Subtract one from the number in the service
    mainFactory.number--;
    //Subtract one from the number displayed
    _this.number--;
  }; // end subtractOne

}]); // end HomeController
