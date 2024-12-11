/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

// grab the star image /
// grab the slider / 
// create a function - where position on slider represents number of stars
// we want the function to take the text of ★ and repeat it as per the condition/value of the slider
// create eventlistener - using correct type - 


// grab the slider 
const slider = document.getElementById("starSlider");

// grab the star image
const StarImage = document.querySelector(".star-icon"); //selected the class selector of the span element instead of the div and it worked
 


function sliderPosition(){
//get the current slider value
const sliderNumber = slider.value;
//repeating the number of stars based on the slider value
StarImage.textContent = "★".repeat(sliderNumber);
console.log(star);

}

slider.addEventListener("input", sliderPosition);

