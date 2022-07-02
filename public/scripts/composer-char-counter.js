//The function handles the counter digits appearence on the DOM UI in real time
$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    let charLength = $(this).val().length;
    let charCounter = 140 - charLength;
    let $counter = $(this).parent().children('#tweText').children('.counter');
  
    if (charCounter <= 0) {
      $counter.text(charCounter).css("color", "red");
    } 

    if (charCounter > 0) {
      $counter.text(charCounter).css("color", "black");
    } 

    if (!$(this).val()) {
      $counter.text(charCounter).css("color", "black");
    }

    $counter.text(charCounter);
  });
});
