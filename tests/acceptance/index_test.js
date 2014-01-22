var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
    fakehr.start();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    fakehr.reset();
  }
});

test('it should not display any blog posts if no blog posts are found', function(){
  expect(1);
  visit('/').then(function(){
    httpRespond("get", "/api/v1/posts", []).then(function(){
      var posts = find('#posts .post');
      equal(posts.length, 0);
    
    })
  }).then(function(){
  });
});

test('it should display a notice if no blog posts are found', function(){
  expect(1);
  visit('/').then(function(){
    var alert = find('#posts .alert');
    equal(alert.text().trim(), 'No Posts Were Found');
  });
});
