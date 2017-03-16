MY_APP.controller( 'HomeController', [ '$http', 'mainFactory',
 function( $http, mainFactory ) {
  console.log('in HomeController');

  let _this = this;
  //Declare Number from Service
  _this.number = mainFactory.number;

  let displayGreetings = function(array) {
    console.log('in displayGreetings');
    //Define greetings array for storage
    let greetings = [];
    //Iterate through array objects
    for (let i in array) {
      let {
        text: greeting,
      } = array[i];
      //Push greeting text into greetings array
      greetings.push(greeting);
    } // end for
    //Make greetings visible on the dom
    _this.greetings = greetings;
  }; // end displayGreetings

  _this.addOne = function() {
    console.log('in addOne');
    //Add one to the number in the service
    mainFactory.number++;
    //Add one to number displayed
    _this.number++;
  }; // end addOne

  _this.getGreetings = function() {
    //GET text string from server
    $http({
      method: 'GET',
      url: '/main'
    }).then(function(response) {
      console.log('SUCCESS-->', response.data.results);
      //Display greeting
      displayGreetings(response.data.results);
    }).catch(function(err) {
      console.log('ERROR-->', err);
    }); // end $http
  }; // end getNumber

}]); // end HomeController
