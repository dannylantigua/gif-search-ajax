fetch("https://api.giphy.com/v1/gifs/search?q=breaking+bad&api_key=dc6zaTOxFJmzC&limit=7").then(function(response){
  return response.json();}).then(function(response){
  showGifs(response.data);});

function showGifs(data){
  for(var x = 0; x < data.length; x++){
    var elem = document.createElement('img');
    elem.src = data[x].images.original.url;
    document.body.appendChild(elem);
  }
}
