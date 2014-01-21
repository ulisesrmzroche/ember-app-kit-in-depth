ember-tumblr-blog
=================

First, you'll want to bookmark the [Ember App Kit](https://github.com/stefanpenner/ember-app-kit)
project. EAK is a pipeline for building, testing, and deploying single-page web applications
with the [Ember.js](http://ember.js.com) framework that's been blessed
by the Ember Core Team and will eventually become
[ember-cli](http://github.com/stefanpenner/ember-cli), an executable
very much like the [Rails one](http://rubyonrails.org). 

Its still under heavy development - there is no easy way to upgrade
even though the project moves fast and, like Ember itself, comes with a lot of moving parts
and a steep learning curve - but it gets you from nothing to a highly
ambitious web application, backed by an equally awesome development
experience, in less than 15 minutes.

This guide explains how to build the canonical blog using Ember, EAK,
and Tumblr as a JSON API. The concepts will be presented in
the order in which you would encounter as if you were building this
project yourself and illustrated by examples, pictures and videos.
While shipping the project itself will likely take you less than 15 minutes,
this guide is very in-depth and will take some time to read it.

In addition to this guide, there is also an open-source repo on
Github. A full-length screencast for [embercasts](http://embercasts.com) is up next. This tutorial
will be kept up-to-date with Ember App Kit, and expanded to cover other
concepts in the future. To quickly learn more about me, I'm at [ulisesrmzroche.info](http://ulisesrmzroche.info).

## Quick Start

You'll need to have [Git](http://git-scm.com/),
[Node](http://nodejs.org/), [Grunt](http://gruntjs.com/),
[grunt-cli](https://github.com/gruntjs/grunt-cli) and
[Bower](http://bower.io/) installed.

Now, [download the
project](https://github.com/stefanpenner/ember-app-kit/archive/master.zip)
and run `npm install` to setup all of its required dependencies. Those
managed by Bower are setup by a post-install hook. Finally,
run `grunt server` and point your browser to [http://localhost:8000](http://localhost:8000).

[[image of what the app looks like]]

Open app/templates/index.hbs and change the header to whatever you want. Save
the file and switch back to your browser, letting Live Reload automatically
refresh the page for you.

[image of what the app looks like now]

Live Reload is one of the many features that Ember App Kit provides for
you out of the box. Another is 1st class support for TDD.

# Our First Tests
