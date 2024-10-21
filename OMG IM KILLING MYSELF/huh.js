var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//Canvas dimentions
var W = window.innerWidth,
  H = window.innerHeight;
canvas.width = W;
canvas.height = H;
var particles = [];
var x = 100;
var y = 100;

for (var i = 0; i < 100; i++) {
  particles.push(new creat_particle());
}

//function for multiple particles
function creat_particle() {
  this.x = Math.random() * W;
  this.y = Math.random() * H;

  //velocity of balls
  this.vx = Math.random() * 4 - 1;
  this.vy = Math.random() * 4 + 1;

  //Random Color
  var a = Math.random() * 1;
  this.color = "rgba(" + 255 + "," + 255 + "," + 255 + "," + a +")";

  //random size
  this.radius = Math.random() * 2 + 2;
}
//Particles Animation
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Particls from array

  for (var t = 0; t < particles.length; t++) {

    var p = particles[t];

    ctx.beginPath();
    //balls color
    var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
    gradient.addColorStop(1, p.color);
    gradient.addColorStop(1, "rgb(66, 66, 66)");

    ctx.fillStyle = gradient;
    ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false)

    ctx.fill();
    //velocity
    p.x += p.vx;
    p.y += p.vy;

    //boundaries
    if (p.x < -50) p.x = W + 50;
    if (p.y < -50) p.y = H + 50;
    if (p.x > W + 50) p.x = -50;
    if (p.y > H + 50) p.y = -50;
  }
}
setInterval(draw, 33);