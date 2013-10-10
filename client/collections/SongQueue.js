// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    if (window.localStorage.getItem('playQueue') !== undefined) {
      window.localStorage.setItem('playQueue', {});
    }
    playQueue = window.localStorage.getItem('playQueue');

    this.on('add', function() {
      if (this.length === 1) {
        $('#seven-inch > img').addClass('isPlaying');
        this.playFirst();

      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });

    this.on('ended', function(song){
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      } else {
        $('#seven-inch > img').removeClass('isPlaying');
      }
    });
  },

  playFirst: function(){
    this.first().play();
  }

});