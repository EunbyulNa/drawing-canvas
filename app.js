const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const sizeSlide = document.querySelector("#size-slider");
const options = document.querySelectorAll(".option");
const colors = document.querySelectorAll(".color");
const clearCanvas = document.querySelector(".clear-canvas");

//Default option
let isDrawing = false;
let selectTool = "brush";
let brushWidth = 5;
let selectedColor = "#000";

window.addEventListener("load", function () {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
})

sizeSlide.addEventListener("change", function() {
  brushWidth = sizeSlide.value;
})

options.forEach( (option) => {
  option.addEventListener("click", function () {
    selectTool = option.id;

    if(selectTool === "brush"){
      brush.classList.add("active");
      eraser.classList.remove("active");
    }else if(selectTool === "eraser"){
      brush.classList.remove("active");
      eraser.classList.add("active");
    }
  })
})

colors.forEach( (color) => {
  color.addEventListener("click", function () {
   selectedColor = window.getComputedStyle(color).getPropertyValue("background-color")
  })
})

clearCanvas.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener("mousedown", function(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = selectedColor;
});

canvas.addEventListener("mousemove", function (e) {
  if(!isDrawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

   if(selectTool === "brush"){
     ctx.strokeStyle = selectedColor;
   }else if(selectTool === "eraser"){
    ctx.strokeStyle = "white";
  }
})

canvas.addEventListener("mouseup", function () {
  isDrawing = false;

})
