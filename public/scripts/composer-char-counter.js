//The function handles the counter digits appearence on the DOM UI in real time
$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    let charLength = $(this).val().length;
    let charCounter = 140 - charLength;
    let $counter = $(this).parent().children('#tweText').children('.counter');
  
    //counter turn to red when it goes down to negative numbers
    if (charCounter <= 0) {
      $counter.text(charCounter).css("color", "red");
    } 

    //counter turn to black when the number of characters become postive
    if (charCounter > 0) {
      $counter.text(charCounter).css("color", "black");
    } 

    //counter turn to black when the text area is clear out
    if (!$(this).val()) {
      $counter.text(charCounter).css("color", "black");
    }

    $counter.text(charCounter);
  });
});
