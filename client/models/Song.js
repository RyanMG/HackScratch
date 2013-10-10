// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    var played = this.get('played');
    played++;
    this.set('played', played);
    this.trigger('dequeue', this);
  },

  ended: function() {
    var played = this.get('played');
    played++;
    this.set('played', played);
    this.trigger('ended', this);
  },

  removeMe: function() {
    this.trigger('removeMe', this);
  }

});
