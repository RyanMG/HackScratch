// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'li',
  template: _.template('<span class="song-title"><%= title %></span>'),

  initialize: function() {
  },

  events: {
    'click' : 'removeSong'
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  removeSong: function(){
    this.model.removeMe();
  }
});