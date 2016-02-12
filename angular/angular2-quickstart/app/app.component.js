(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Yo! My First Angular 2 App! whats up</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
