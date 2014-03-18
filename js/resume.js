$(function () {

  // GetTweet
  var updateTweet = function () {
    var tweet = getTweet.tweet;
    $('.tweet-content').append(tweet.html);

    if (tweet.isRT) {
      var user = tweet.user;
      $('.tweet-content').prepend('RT <a href="http://twitter.com/' +
                                  user.substring(1) +
                                  '">' +
                                  user +
                                  '</a>: ');
    }
  };

  var
    opts = {
      widget: '347876295008460801',
      callbackFn: updateTweet
    },
    getTweet = new GetTweet(opts);

  // Animations
  $.fn.visible = function (partial) {
    var
      $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

  var removeHiddenClass = function () {
    $('.hidden').each(function (i, el) {
      var $el = $(el);
      if ($el.visible(true)) {
        $el.removeClass('hidden');
      }
    });
  };

  $(window).on('scroll', function () {
    removeHiddenClass();
  });

  removeHiddenClass();
});
