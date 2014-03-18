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

// Putting code inside a function like that endure it won't run until the document is ready.

// If you do need to wait for resources to be done (e.g. you need to measure an image), you can wait for that like this:

$(window).load(function() {
  // Code goes here
});
