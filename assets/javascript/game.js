$("button").on("click", function() {
  
  var movie = $(this).attr("data-horror");

  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  
    movie + "&api_key=eLxGXhONJQrhCzNyIkNKADsNnRWPulEc";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    
    .then(function(response) {
      console.log(queryURL);

      console.log(response);
      
      var results = response.data;

      
      for (var i = 0; i < results.length; i++) {

        
        var horrorDiv = $("<div>");

        
        var p = $("<p>").text("Rating: " + results[i].rating);

        
        var horrorImage = $("<img>");
        
        horrorImage.attr("src", results[i].images.fixed_height.url);

        
        horrorDiv.append(p);
        horrorDiv.append(horrorImage);

        
        $("#gifs-appear-here").prepend(horrorDiv);
      }
    });
});