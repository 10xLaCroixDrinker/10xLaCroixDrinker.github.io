---
title: 'GetTweet v1.0'
description: 'A script for loading a users latest tweet(s) without the Twitter API'
layout: default
project: GetTweet
js:
  - http://code.jquery.com/jquery-2.0.1.min.js
  - lib/get-tweet.js
  - demo/get-tweet.js
---

# GetTweet v1.0

#### A script for loading a user's latest tweet(s) without the Twitter API

In March 2013, Twitter retired API v1. Since then the only REST API available is v1.1, which requires OAuth for every request. It's a bit impractical to create an application just for displaying a recent tweet on a webpage (a common use for API v1), so I wrote this little script that will return a user's latest tweet(s) as a publicly available object(s) without the API.

### Usage:
To get the tweet run the followng:

```javascript
var myTweets = new GetTweet({
  widget: '1234567890', // Twitter widget ID number
  howMany: 5, // Number of tweets to load (1-20) - default is 1.
  callbackFn: myFunction // Function to execute after tweets have been fetched
});
```

Once that's been run, the tweet(s) will be available as an object at `myTweets.tweets`. It is an array of objects that look like this:

```javascript
myTweets.tweets[0] = {
  html: "string", // HTML from the tweet 
  isRT: false, // Boolean indicates whether this is a retweet
  link: "https://twitter.com/user/statuses/[...]", // Permalink to tweet
  name: "Full Name", // Full name of user
  pic:  "https://si0.twimg.com/profile_images/[...]_normal.jpeg", // URL for user's profile picture
  text: "string", // Text from tweet (no links)
  time: 1371501240000, // Number of milliseconds since January 1, 1970, 00:00:00 UTC
  user: "@user" // User's screen name
}
```

The first tweet (most recent) in the array is also available at `myTweets.tweet`.


### Help:
You can get any twitter user's ID number by creating a [Twitter widget](https://twitter.com/settings/widgets). Type in the desired username in the configuration settings and click the blue "Create Widget" button. The widget's ID number will be in the `data-widget-id` attribute of the `<a>` in the generated code.

Please submit any bugs or feature requests as [issues on the guthub repo](https://github.com/jking90/get-tweet/issues).
