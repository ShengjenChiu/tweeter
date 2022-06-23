/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// document.addEventListener("click", printMousePos);
// when textArea is clicked, run the function

// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  tweets.forEach(tweet => {
    const tweetElement = createTweetElement(tweet);
    $('.tweets-container').append(tweetElement); 
  });
}

const createTweetElement = function(tweet) {
  let tweetElement = `<article class="artTweet box">
        <header class="tweetHead">
          <div id="headAvatar">
            <img src="${tweet.user.avatars}" />
            <p>${tweet.user.name}</p>
          </div>
          <div id="headUser">
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
          ${tweet.created_at} ago.
          </p>
          <div class="smallIcon">
            <span class="fa-solid fa-flag box"></span>
            <span class="fa-solid fa-retweet box"></span>
            <span class="fa-solid fa-heart box"></span>
          </div>
        </footer>
      </article>`;

  return tweetElement;
}

$(document).ready(function() {
  renderTweets(data);

  $('form').on('submit', (event) => {
    //console.log(event.target.text.value());
    event.preventDefault();

    console.log("this is a try!");

    const serializedStr = $('form').serialize();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serializedStr,
      success: function() {
        console.log("this is success!");
      }
    });
  });
});

const loadTweets = function() {
  
};

//const $tweet = $(`<article class="tweet">Hello world</article>`);
//const $tweet = createTweetElement(tweetData);
// renderTweets(Data);
// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

