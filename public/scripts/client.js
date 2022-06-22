/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// document.addEventListener("click", printMousePos);
// when textArea is clicked, run the function

$(document).ready(function() {
  const textArea = document.getElementById("tweet-text");
  textArea.addEventListener("click", function printMessage(event) {
    //document.body.textContent = event
      // "clientX: " + event.clientX +
      // " - clientY: " + event.clientY;
      //alert('Hello once');
      
    console.log( `you click on tweetArea: event click: ${event}`)
  });
});

