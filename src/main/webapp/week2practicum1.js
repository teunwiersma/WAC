

function myIntervalFunction() {
    var inputElement = document.getElementById('textarea').value;

    if (inputElement !== oudeText) {
      oudeText = inputElement;
      console.log(inputElement);
    }
    

}

var oudeText = document.getElementById('textarea').value
var intervalID = setInterval(myIntervalFunction, 5000);
