window.onload = function now() {
    $("#btnSubmit").on('click', function () {
        searchNow();
    })
}
function searchNow() {
    var search = $("#search-term").val();
    console.log(search);
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "191377acaaa14557a7edaa51e7861c61",
      'q': search,
      'begin_date': yearStart,
      'end_date': yearStop,
      'sort': "newest"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      for (var i = 0; i < numArticles; i++) {
        console.log(result.response.docs[i].headline.main);
        $("#results").append(result.response.docs[i].headline.main + "<br>");
        $("#results").append(result.response.docs[i].byline.original + "<br>");
      }

    }).fail(function(err) {
      throw err;
    });
}

