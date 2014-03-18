// This is a setTimeout function

// setTimeout(function(){
//   $('h1').css('color', 'red');
// }, 2000);

// DOM Ready allows for the page to load before any JS fires. When the document is ready then you can function:

$(document).ready(function() {
  // Code is here
  $('h1').css("background", "red");
});

// It won't wait for a super large image to load. But it will read the DOM and know that an image is gonna go there, and thus be able to assign the JS handler appropriately

