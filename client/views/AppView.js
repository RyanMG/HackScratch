// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    var that = this;
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.$el.on('ended', function() {
      this.currentTime = 0;
      that.model.get('currentSong').ended();
    });

  },

  render: function(){
    return this.$el.html(this.playerView.$el);
  }
});