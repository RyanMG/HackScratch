// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "ul",
  initialize: function() {
    this.collection.bind('add', this.render.bind(this));
    this.collection.bind('remove', this.render.bind(this));
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.append(
      this.collection.map(function(song){
        return new SongQueueEntryView({ model:song}).render();
      })
     );
    }

});