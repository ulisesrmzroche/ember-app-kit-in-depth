Ember App Kit in Depth
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
Github. This tutorial
will be kept up-to-date with Ember App Kit, and expanded to cover other
concepts in the future. A full-length screencast for [embercasts](http://embercasts.com) is up next. Im also giving a talk about this project on Thursday 23rd at the Ember ATX meetup. To quickly learn more about me, I'm at [ulisesrmzroche.info](http://ulisesrmzroche.info).

## Quick Start

You'll need to have [Git](http://git-scm.com/),
[Node](http://nodejs.org/), [Grunt](http://gruntjs.com/),
[grunt-cli](https://github.com/gruntjs/grunt-cli) and
[Bower](http://bower.io/) installed.

Now, [download the
project](https://github.com/stefanpenner/ember-app-kit/archive/master.zip)
and run `npm install` to setup all of its required dependencies. Those
managed by Bower are setup by a post-install hook into the
`/vendor` directory. Finally, run `grunt server` and point your browser to [http://localhost:8000](http://localhost:8000).

![Hello World](/public/assets/images/thumb-1.png "Hello World")

Open `app/templates/application.hbs` and change the title to whatever you want. Then, save the file
and switch back to your browser, letting Live Reload automatically
refresh the page for you.

![Hello World](/public/assets/images/thumb-2.png "Hello World")

Live Reload is one of the many features that Ember App Kit provides for
you out of the box. Another is 1st class support for TDD.

# Our First Tests

Navigate to [http://localhost:8000/tests](http://localhost:8000/tests)
and you'll see that changing the title caused one of the acceptance
tests to fail.

![Broken Test Suite](/public/assets/images/first-tests-thumb-1.png "Broken Tests")

EAK's Test Suite is powered by [Testem](https://github.com/airportyh/testem), [QUnit](qunitjs.com), and [Ember Testing](http://emberjs.com/guides/testing/integration/)
There is also an API stub that you can use as a functioning spec for your
real REST backend. This lets you have all the benefits of fixtures while
using the REST adapter.

Until recently, the test suite was backed by [the Karma test
runner](http://karma-runner.github.io/0.10/index.html) but was recently
[switched to
Testem](https://github.com/stefanpenner/ember-app-kit/pull/292) courtesy of [@cavnev (Eric Berry)](https://github.com/cavneb).

Testem offers a better UX, and a lighter footprint over Karma. It
doesn't support code coverage (that's being taken care of right now,
though), but you won't believe how much better you'll feel testing your
application. Let me show you.

First, make sure you have testem installed. run `npm install -g testem`,
and start a new process, `grunt test:server` in your terminal.

![Test Server powered by Testemc](/public/assets/images/testem-thumb-1.png "Test Server
powered by Testem")

Let's take care of the error by modifying
`tests/acceptance/index_test.js` and fixing the failing test. In line 19
of `tests/acceptance/index_test.js` change the expectation to our new
title.

### BEFORE
![Fixing the Test Suite](/public/assets/images/fixing-the-test-suite.png "Test Server
powered by Testem")
### AFTER
![Fixing the Test Suite pt2](/public/assets/images/fixing-the-test-suite-2.png "Test Server
powered by Testem")

Save the file and switch back to Testem UI. Press enter to rerun our
tests, and you'll see that our test suite is now passing.

![Fixing the Test Suite pt2](/public/assets/images/first-green-tests.png "Test Server
powered by Testem")

The tests are also run in the browser, if you prefer to use that
interface.

# Contributors

* ulisesrmzroche
* andersonbarutti
