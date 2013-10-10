// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({

  initialize: function(params){
    var that = this;
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('removeMe', function(song){
      that.get('songQueue').remove(song);
    });
  }

});
