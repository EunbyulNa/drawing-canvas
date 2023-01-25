window.addEventListener('load', function () {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');

  //The same size as windowscreen size
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  ctx.fillRect(50, 50, 300, 200)
})
