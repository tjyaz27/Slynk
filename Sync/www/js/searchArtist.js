function searchFunc() {

        var xhr = new XMLHttpRequest();

        searchStr = document.getElementById("trackValue").value;
        xhr.open("GET", "https://api.spotify.com/v1/search?q=" + searchStr + "&type=track&market=US", false);
        xhr.send();

        var r = JSON.parse(xhr.responseText);
    
          // Grab the template script
          var theTemplateScript = $("#address-template").html();

          // Compile the template
          var theTemplate = Handlebars.compile(theTemplateScript);

          // Define our data object
        var i = 0;
         var context={
            information: [
              {
                picture: r.tracks.items[i].album.images[0].url,
                artist: r.tracks.items[i].artists[0].name,
                track: r.tracks.items[i].name,
                album: r.tracks.items[i].album.name,
              },
              {
                picture: r.tracks.items[i+1].album.images[0].url,
                artist: r.tracks.items[i+1].artists[0].name,
                track: r.tracks.items[i+1].name,
                album: r.tracks.items[i+1].album.name,
              },
              {
                picture: r.tracks.items[i+2].album.images[0].url,
                artist: r.tracks.items[i+2].artists[0].name,
                track: r.tracks.items[i+2].name,
                album: r.tracks.items[i+2].album.name,
              },
              {
                picture: r.tracks.items[i+3].album.images[0].url,
                artist: r.tracks.items[i+3].artists[0].name,
                track: r.tracks.items[i+3].name,
                album: r.tracks.items[i+3].album.name,
              },
            ]
          };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
}
   