// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td><%= title %></td>'),

  initialize: function() {
  },
  events: {
    'click' : 'removeSong'
  },
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  removeSong: function(){
    this.model.destroy();
  }
});