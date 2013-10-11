var Router = Backbone.Router.extend({

  initialize: function(options) {
    this.options = options;
  },

  routes: {
    '' : 'index',
    'playlist/*ids': 'playlist',
    'defaults' : 'default'
  },

  index: function() {
    console.log('index');
  },

  playlist: function(ids){
    var that = this;
    var idArray = ids.split('/');
    _(idArray).each(function(id) {
      var song = that.options.library.get(id);
      song.enqueue();
    });
  },

  defaults: function(){
    console.log('');
  }

});