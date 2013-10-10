// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // How do we add a single model to a collection multiple times?
  initialize: function(){
    if (window.localStorage.getItem('playQueue') !== undefined) {
      window.localStorage.setItem('playQueue', {});
    }
    playQueue = window.localStorage.getItem('playQueue');

    this.on('add', function() {
      //window.localStorage.setItem(['playQueue'].queueList.push(this.first());
      console.log(window.localStorage);
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });

    this.on('ended', function(song){
      window.localStorage['playQueue'].queueList.shift();
      console.log(window.localStorage);
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.first().play();
  }

});