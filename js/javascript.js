(function() {

  $(document).ready(function() {
    var addImage, layer, stage;
    stage = new Kinetic.Stage("canvas", 800, 800);
    layer = new Kinetic.Layer();
    addImage = function(src) {
      var image;
      image = new Image();
      image.onload = function() {
        var img;
        img = new Kinetic.Image({
          x: 10,
          y: 10,
          image: image,
          draggable: true
        });
        layer.add(img);
        stage.add(layer);
      };
      image.src = src;
    };
    $("#wall").click(function() {
      addImage($("#wall").data("src"));
    });
    $("#tv").click(function() {
      addImage($("#tv").data("src"));
    });
    $("#bed").click(function() {
      addImage($("#bed").data("src"));
    });
    $("#dresser").click(function() {
      addImage($("#dresser").data("src"));
    });
  });

}).call(this);
