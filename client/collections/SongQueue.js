// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });

    this.on('ended', function(song){
      // why will destory work and not remove?
      this.first().destroy();
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.first().play();
  }

});