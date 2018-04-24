function makeGrid() {
  // Select size input
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();

    for (var i = 1; i <= height; i++) {
        var str = " ";
        for (var j = 1; j <= width; j++) {
          str += '<td></td>';
        }
      $('#pixelCanvas').append('<tr>' + str + '</tr>');
    }
}

// call makeGrid() after getting size input
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    $("#pixelCanvas").empty();
    makeGrid();

});

// Getting color input
$("#pixelCanvas").on("click", "td", function () {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
});

// Reset Color
$("#pixelCanvas").on("dblclick", "td", function () {
    $(this).css('background-color', "");
});


// Reset Grid
$("input[type=reset]").click(function () {
    $("#pixelCanvas").empty();
    var height = $("#inputHeight").val(1);
    var width = $("#inputWeight").val(1);
});
