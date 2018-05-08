function myIntervalFunction() {
    var inputElement = document.getElementById('textarea');

    if (inputElement != oudeText) {
      oudeText = inputElement;
      console.log(inputElement.value);
    }

}
var oudeText = document.getElementById('textarea').value
var intervalID = setInterval(myIntervalFunction, 1000);
