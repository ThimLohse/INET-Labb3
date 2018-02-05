"use strict";
$(document).ready(function(){
  console.log("ready");
  //Obtain the battlefield-container and create the grid-blocks
  var gridBlock = "";
  var battlefield = "<div class='battlefield-container'></div>";
  var player1;
  var player2;

  $('.submit-size').on('click', function(){
    var size = $('.field-size').val();
    player1, player2 = [size][size];
    $('body').append(battlefield);
    battlefield = $('.battlefield-container');

    var column_template_string = "";
    for(var columns = 0; columns < size; columns++){
      column_template_string += "auto ";
    }
    //Set the number of columns of the grid
    battlefield.css('grid-template-columns', column_template_string);

    for(var i = 0; i < size; i++){
      for (var j = 0; j < size; j++) {
        gridBlock = "<div class='grid-block' id="+(i*size + j)+"></div>"
        battlefield.append(gridBlock);
      }
    }
    $('.grid-block').width(battlefield.width/size);
    $('.grid-block').height(battlefield.height/size);
  });

});
