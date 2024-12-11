/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!
// Place your plan and solution below!
// Grab the button element /
// Grab the canvas
// create a function - change color of canvas
// create an event- linking the color button and the canvas
// need an event type that changes the color on the color picker / when you click away

const colorButton = document.getElementById('colorPicker'); //grabbed the button color element
const imgCanvas = document.getElementById('canvas'); //grabbed the canvas

function fillCanvasWithColor () {
  imgCanvas.style.backgroundColor = colorButton.value; //changes the background color to be the same color as what the user has picked
}

colorButton.addEventListener("input", fillCanvasWithColor); //the input event updates in real time as we interact with the color picker

  