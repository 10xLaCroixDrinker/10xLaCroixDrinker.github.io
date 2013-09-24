---
title: Jimmy King's Blog
keywords: blog
---

h1 'Latest Posts'

ul '.posts', ->
  for post in @getCollection("posts").toJSON()
    if post.pub_date
      li ->
        a href:post.url, ->
          text post.title + ' '
        em '(' + post.pub_date + ')'
