// Creating variables
var userInput = document.querySelector('#user-gif-search');
var searchGifs = document.querySelector('#submit-gif-search');
var gifContainer = document.querySelector('#gif-container');
var spanSR = document.querySelector('#search-result');

// Clear contianer
function clearContainer(){
  while(gifContainer.firstChild)
      gifContainer.removeChild(gifContainer.firstChild);

  spanSR.innerHTML = '';
}

//Fetch search
function doTheShearch(url){
  fetch(url).then(function(response){
  return response.json();console.log(response.json());}).then(function(response){
  showGifs(response.data);});
}

//Show results on the gif-container div
function showGifs(data){
  for(var x = 0; x < data.length; x++){
    var elem = document.createElement('img');
    elem.src = data[x].images.original.url;
    gifContainer.appendChild(elem);
  }
}

//Concat the strings and send search params
function sendParams(){
  clearContainer();
  var inputSearch = userInput.value;
  var inputResult = inputSearch.split(' ').join('+');

  if (inputSearch !== ''){
    var urlDir = "https://api.giphy.com/v1/gifs/search?q="+inputResult
    +"&api_key=dc6zaTOxFJmzC&limit=7";
    spanSR.innerHTML = inputSearch;
    doTheShearch(urlDir);
    clearFields();
  }
}

//Clear fields
function clearFields(){
   userInput.value="";
   userInput.focus();
}

//Validating the elements exist on the page
if(userInput && searchGifs && gifContainer){
  //Enter key event listener for input
  userInput.addEventListener("keypress",function(e){
      var key = e.keyCode;
      if (key === 13){sendParams();}
  });

  //Search button click event listener
  searchGifs.addEventListener("click", function(){sendParams();});
}
