window.addEventListener("load", function() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //only draw when draw is true;
  let draw = false;

  //when mouse down, draw starts
  canvas.addEventListener('mousedown', function() {
    draw = true;
  });

  //when mouse is moving, then drawing
  canvas.addEventListener('mousemove', function(e) {
    //if draw is not true we won't draw
    if(!draw) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

  })

  //when mouse up, draw stop
  canvas.addEventListener('mouseup', function() {
    draw = false;
  });


})
