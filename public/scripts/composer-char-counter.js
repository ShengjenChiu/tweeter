$(document).ready(function () {
  $("#tweet-text").on("input", function () {
  let charLength = $(this).val().length;
  let charCounter = 140 - charLength;
  
  let $counter = $(this).parent().children('#tweText').children('.counter');

  $counter.text(charCounter);

  });
});