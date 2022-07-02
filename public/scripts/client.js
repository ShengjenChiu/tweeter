//helper function to create and prepend tweeter messsage to the DOM UI
//one by one in real time.  
const renderTweets = function(tweets) {
  $('.tweets-container').empty();

  tweets.forEach(tweet => {
    const tweetElement = createTweetElement(tweet);
    $('.tweets-container').prepend(tweetElement); 
  });
}

//helper function to create the DOM element of the tweeter message
const createTweetElement = function(tweet) {
  let tweetElement = `<article class="artTweet box">
        <header class="tweetHead">
          <div class="headAvatar">
            <img src="${tweet.user.avatars}" />
            <p>${tweet.user.name}</p>
          </div>
          <div class="headUser">
            <p>
            ${tweet.user.handle}
            </p>
          </div>
        </header>
        <div class="twTx">
          <p>
            ${tweet.content.text}
          </p>
        </div>
        <footer class="tweetFoot">
          <p id="daysAgo">
          ${timeago.format(tweet.created_at)}.
          </p>
          <div class="smallIcon">
            <span class="fa-solid fa-flag icon"></span>
            <span class="fa-solid fa-retweet icon"></span>
            <span class="fa-solid fa-heart icon"></span>
          </div>
        </footer>
      </article>`;

  return tweetElement;
}

//error messages for cases of submissionb of empty text and oversized text
const createErrMsg = function (charCount) {
  let errMsg = '';

  if (charCount === 0) {
    errMsg = `<div class="validation">Error: do not sumbit empty tweet.</div>`;
  } else if (charCount > 140) {
    errMsg = `<div class="validation">Error: you have exceed the maximum allowable length of the message.</div>`;
  }

  return errMsg;
}

//main function for the tweet message submission
$(document).ready(function() {
  $('form').on('submit', inComing);
});

//helper function for the main function for the tweet message submission
const inComing = function(event) {
  event.preventDefault();

  const charCount = $(this).find('#tweet-text').val().length;

  if (charCount === 0) {
    const errorMsg = createErrMsg(charCount);
    $('.new-tweet').slideDown(10000, () => {
      $('.new-tweet').prepend(errorMsg);
    });
    return false;
  } else if (charCount > 140) {
    const errorMsg = createErrMsg(charCount);
    $('.new-tweet').slideDown( 10000, () => {
      $('.new-tweet').prepend(errorMsg);
    });      
    return false;
  }

  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const serializedStr = $(this).serialize();
  const safeHTML = escape(serializedStr);

  $.ajax({
    type: "POST",
    url: "/tweets",
    data: safeHTML,
    datatype: "JSON",
    success: loadTweets
  });
  
};

//helper function to load tweets and empty the input text area after submission
//and set the character counter back to 140 after submission
const loadTweets = function() {
  $('#tweet-text').val('');
  $('.counter').text(140);

  $.ajax('/tweets', { method: 'GET' }).then((data) => {
    renderTweets(data);
  });

};

loadTweets();