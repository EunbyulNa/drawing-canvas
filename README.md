# Drawing Canvas

# 0. Reference
I watched the first tutorial and wanted to enhance the user experience by adding more options. <br>
I referred to the second tutorial and added brush/eraser options, a size slider, color options, and a clear canvas button.<br>

👀 Tutorial 1: https://www.youtube.com/watch?v=3GqUM4mEYKA&t=984s<br>
👀 Tutorial 2: https://www.youtube.com/watch?v=y84tBZo8GFo<br>

# 1. How it works
Users can start drawing with the default 5-pixel black brush. <br>
They can change the brush or eraser size with the size slider and choose from 4 colors (red, green, blue, pink). <br>
To erase their work, they can select the eraser option or click the clear canvas button.<br>

# 2. What I learned
 * HTML canvas element <br>
  👉🏻 The HTML <canvas> element is used to draw graphics on a web page. <br>
  I added a canvas in the HTML, selected it in Javascript, and set its size using offsetWidth and offsetHeight.<br>

 * getContext(2d)<br>
  👉🏻 Part of the Canvas API that provides a 2D rendering context for the canvas element. Used for drawing shapes, text, images, etc.<br>

 * addEventListener("change")<br>
  👉🏻 A change event is fired for input, select and textarea elements when the user modifies their value. <br>
  In this project, I used the size range input attribute and the change event is fired when the user moves the slider. <br>
  The brush width is updated to match the slider's value.<br>

 * window.getComputedStyle(color)<br>
  👉🏻 Gets the CSS properties and values of an HTML element after all styling sources have been applied. <br>
    I selected all color options and looped through each color, getting the background value when its clicked.<br>

 * clearRect<br>
   👉🏻 Clears specified pixels within a rectangle. <br>
  When the clear canvas button is clicked, the clearRect function is executed and the entire canvas is cleared.<br>

 * beginPath()<br>
  👉🏻 Begins a new path or resets the current one. When the user starts drawing, this function is called.

 * lineTo<br>
  👉🏻 Creates a line to a specified point in the canvas from the last specified point. <br>
   I set offsetX and offsetY values to track the user's drawing.<br>








