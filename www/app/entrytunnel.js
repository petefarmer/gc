define(function () {
  return {
    loadImage: function () {
      $(document).click(function() {
        $("#entrytunnel").toggle("explode", {pieces: 81});
      });
    }
  };
});
