---
title: Creating Color Schemes with LESS
pub_date: May 10, 2013
layout: post
original: meltmedia blog
original_link: http://blog.meltmedia.com/2013/05/creating-color-schemes-with-less
---

I haven’t met a designer yet who didn’t know at least a little about [color theory](http://en.wikipedia.org/wiki/Color_theory). It’s a great tool to have in your belt when you’re working with anything visual. But what tools do you use to generate your color scheme, and what about when those colors are handed off to a developer?

### Enter LESS

[LESS](http://lesscss.org/) is a CSS preprocessor developed by Alexis Sellier (aka [cloudhead](http://cloudhead.io/)). At meltmedia, we use LESS for the majority of the websites we develop. It’s quite a powerful tool, and speeds up development significantly. For this article, we’ll focus on LESS color operations. You can use the color operations to dynamically create just about any color scheme you’d like.

To take full advantage of this, I wrote color operations for the nine most common color schemes. Most of them rely on the spin operation which takes two parameters, the base color and the number of degrees you’d like to “spin” it around the color wheel. For example:

```css
// Complementary
@baseColor: #2865cc;

@complementary1: @baseColor;
@complementary2: spin(@baseColor, 180);
```

This scheme is storing the base color and its complement (the color on the opposite side of the color wheel). In this case, `#cc8f28`.

### Why should I use it?

Using LESS color operations to generate your color schemes has two primary benefits. It’s easy to create schemes based on color theory and some simple math, and far easier to maintain. (i.e. If you decide to change the base color for your scheme, you only have to change one variable instead of digging through all of your colors and updating them individually.) And if you’re like me and always want to know “why”, now the logic behind your color schemes will be preserved as long as your LESS files are.

### Time to try it

You can see the demo of all nine color schemes and the LESS color operations that create them [here](/colors). Go ahead and use the code in your own projects, it’s licensed under the [MIT license](http://opensource.org/licenses/MIT). If you’re not a developer, check out the demo anyway and feel free to use it to generate your color schemes. If you think I’m missing a common/important color scheme (or there’s one you just really want to see and think others will too), submit an issue or open a pull request on the [github repo](https://github.com/jking90/colors.less).
