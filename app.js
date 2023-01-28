const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const sizeSlide = document.querySelector("#size-slider");
const options = document.querySelectorAll(".option");

let isDrawing = false;
let brushWidth = 5;
let selectTool = "brush";

window.addEventListener("load", function () {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
})

function drawStart() {
 isDrawing = true;
 ctx.beginPath();
 ctx.lineWidth = brushWidth;

}

function drawing(e) {
  if(!isDrawing) return;


  if(selectTool === "brush"){
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.strokeStyle ="black"
  }else{
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
   ctx.strokeStyle ="white"
  }
}

function drawEnd() {
  isDrawing = false;
}

sizeSlide.addEventListener("change", function() {
  brushWidth = sizeSlide.value;
})

options.forEach( (option) => {
  option.addEventListener("click", function () {
      selectTool = option.id;
    if(  selectTool === "brush"){
      brush.classList.add("active");
      eraser.classList.remove("active");

    }else{
      brush.classList.remove("active");
      eraser.classList.add("active");
    }

  })
})


canvas.addEventListener("mousedown", drawStart);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", drawEnd);
