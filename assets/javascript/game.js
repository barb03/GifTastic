$(document).ready(function(){ 

  var movies = ["It", "Frankenstein", "Dracula"];
  GIFArea = " ";  
  
  function renderButtons() {  
    $("#movies-view").empty(); 
    for (var i = 0; i < movies.length; i++) {  
    var a = $("<button>");  
    a.addClass("movie");  
    a.attr("data-name", movies[i]);  
    a.text(movies[i]);  
    $("#movies-view").append(a);
    }  //end for 
    $("#movie-input").focus();  
  }  //end function render buttons
  
  renderButtons();  
    
    $("#add-movie").on("click", function(event) {  
      
    event.preventDefault();    
    var movie = $("#movie-input").val().trim();  
    movies.push(movie);  
    renderButtons();  
  });  //end add movie
  
  
  $(document).on("click", "button",  function() {     
    $("#GIFArea").empty(); 
    var b = $(this).attr("data-name");		
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  
    b + "&api_key=eLxGXhONJQrhCzNyIkNKADsNnRWPulEc"; 

    console.log(queryURL);            
    $.ajax ({
    url: queryURL,
    method: "GET"
    })  //end ajax
            
    .done(function(response) {
      console.log(response);         
      var results = response.data;            
      for (var i = 0; i < results.length; i++) {           
        var gifDiv = $("<div class='item'>");           
        var rating = results[i].rating;             
        var r = $("<p>").text("Rating: " + rating);         
        var gifImage = $("<img>");          
        gifImage.attr("src", results[i].images.fixed_height_still.url)
        .attr("data-still", results[i].images.fixed_height_still.url)
        .attr("data-animate", results[i].images.fixed_height.url)
        .attr("data-state", "still")
        .addClass("showImage");          
        gifDiv.append(r)
        .append(gifImage);       	  
        $("#GIFArea").prepend(gifDiv);
      }  //end for
    });  //end function response
  });  //end on click buttons
  
  $(document).on("click", ".showImage",  function() {  
    var state = $(this).data("state");      
    if (state == "still") {
      console.log("still image works");         
      $(this).attr("src", $(this).data("animate"))
      .data("state", "animate");
    } //end if
    else {        
      console.log("animated image works");
      $(this).attr("src", $(this).data("still"))
      .data("state", "still");               
    }  //end else
  });  //end shwo image function
});  //end ready function

