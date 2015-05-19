(function(){
  'use strict';


  var calculation = 0;
  var displayedCalculation = "0";
  var pendingOperation;
  var $display = document.querySelector('.display-number');


  function numberButtonPressed(event) {
    var number = Number(event.target.textContent);
    if(pendingOperation !== undefined) {
      switch (pendingOperation) {
        case "+":
          calculation += number;
          break;
      }
      pendingOperation = undefined;
      $display.textContent = number;
    } else {
      displayOrConcatenateNumber(number);
    }
  }

  function decimalButtonPressed(event) {

  }

  function operatorButtonPressed(event) {
    pendingOperation = event.target.textContent;
  }

  function equalButtonPressed(event) {
    $display.textContent = calculation;
  }

  /*
    Utility functions
  */
  function displayOrConcatenateNumber(inputNumber) {
    if(calculation === 0) {
      calculation = Number(inputNumber);
      displayedCalculation = String(inputNumber);
    } else {
      calculation = Number(displayedCalculation + inputNumber);
      displayedCalculation = String(displayedCalculation + inputNumber);
    }
    $display.textContent = displayedCalculation;
  }

  function displayclear() {
    // body...
    display-number("0")
  }

  /*
    Setup event handlers
  */

  [].forEach.call(document.querySelectorAll('.keypad-button.number'), function(element){
    element.addEventListener('click', numberButtonPressed);
  }, false);

  [].forEach.call(document.querySelectorAll('.keypad-button.clear'), function(element){
    element.addEventListener('click', numberButtonPressed);
  }, false);

  [].forEach.call(document.querySelectorAll('.keypad-button.operator'), function(element){
    element.addEventListener('click', operatorButtonPressed);
  }, false);

  document.querySelector('.decimal').addEventListener('click', decimalButtonPressed);
  document.querySelector('.equal').addEventListener('click', equalButtonPressed);

})();
