// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // Not sure why _.bindAll is breaking the test?
//    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    this.collection.bind('add', this.render.bind(this) );
    this.collection.bind('remove', this.render.bind(this) );
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({ model:song}).render();
      })
     );
    }

});