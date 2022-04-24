// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * This function converts Fahrenheit to Celsius. 
 */
function calculateCelsiusClicked() {
  // This line of code extracts the inputted Fahrenheit data and assigns it a variable understood by Javascript so it can be used in calculation. 
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  // This line of code will convert the unit of temperature measurement Fahrenheit into the unit of temperature measurement Celsius.
  let celsius = (5/9) * (fahrenheit - 32);

  // this line of code will display the calculated information back to the corresponding "div" element in the HTML file.
  document.getElementById('converted-temperature').innerHTML = 'the temperature unit Fahrenheit that was provided converted into the temperature unit Celsius, rounded to two decimal places, is ' + celsius.toFixed(2) + '<sup>°</sup>';
}