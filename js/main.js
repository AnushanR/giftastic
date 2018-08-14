$(document).ready(function(){

    $('button').on('click', function() {
        var topics = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {
                console.log(response)
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var artistDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var artistImage = $('<img/>');
                    artistImage.addClass('anImg')
                    artistImage.attr('src', results[i].images.fixed_height.url);
                    artistImage.attr('data-still', results[i].images.fixed_height_still.url)
                    artistImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    artistDiv.append(p);
                    artistDiv.append(artistImage);
                    artistDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    

    
     
        $("#searchButton").on('click', function(){
            var artistButton = $("#gif-input").val();
            var newSearch = $("<button/>").addClass( "btn btn-info animal").attr('data-name',artistButton).html(artistButton);
            $("#favouriteArtists").append(newSearch);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artistButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(artistButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            
        
        })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var artistDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var artistImage = $('<img/>');
                    artistImage.addClass('anImg')
                    artistImage.attr('src', results[i].images.fixed_height_still.url);
                    artistImage.attr('data-still', results[i].images.fixed_height_still.url)
                    artistImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    artistDiv.append(p);
                    artistDiv.append(artistImage);
                    artistDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});