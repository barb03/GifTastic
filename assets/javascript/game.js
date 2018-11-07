


$("button").on("click", function() {  
  $('#GIFArea').empty();
  var movie = $(this).attr("data-horror");  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  
    movie + "&api_key=eLxGXhONJQrhCzNyIkNKADsNnRWPulEc";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    
  .then(function(response) {        
    var results = response.data;   
    for (var i = 0; i < results.length; i++) {        
      var horrorDiv = $("<div>");        
      var p = $("<p>").text("Rating: " + results[i].rating);   
      var horrorImage = $("<img>");
        
      horrorImage.attr('src', results[i].images.fixed_height_still.url)
        .attr('data-still', results[i].images.fixed_height_still.url)
	      .attr('data-animate', results[i].images.fixed_height.url)
	      .attr('data-state', "still")
        .addClass("showImage");  
                       
        horrorDiv.append(p);
        horrorDiv.append(horrorImage);        
        $("#gifs-appear-here").prepend(horrorDiv);
    }
  });    
});

$(document).on('click', '.showImage',  function() {
  var state = $(this).data('state');
  if (state == "still") {      
      $(this).attr('src', $(this).data('animate'))
      .data('state', 'animate');
  } 
  else {      
      $(this).attr('src', $(this).data('still'))
      .data('state', 'still');               
  }
});

