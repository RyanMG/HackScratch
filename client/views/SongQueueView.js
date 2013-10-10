// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    this.collection.bind('add', this.render );
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