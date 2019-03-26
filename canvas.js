var canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.8;
var cpicker = document.querySelector('#cpicker');
// console.log(cpicker);

var c = canvas.getContext('2d');
var color = 'rgba(230,39,57,0.4)';
var r = 5;

var pointer =
{
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', function(e)
{
  pointer.x = e.x;
  pointer.y = e.y;
  // console.log(pointer);
  draw();
})

window.addEventListener('keydown', function(e) {
  // g for green color
  if (e.keyCode === 71)
  {
    color = 'rgba(114,159,152,0.4)';
  }

  // b for blue color
  if (e.keyCode === 66)
  {
    color = 'rgba(98,188,250,0.4)';
  }

  // y for yellow
  if (e.keyCode === 89)
  {
    color = 'rgba(230,175,75,0.4)';
  }

  // up arrow for increasing the size
  if (e.keyCode === 38)
  {
    r += 1;
  }

  // down arrow for decreasing the size
  if (e.keyCode === 40 && r>1)
  {
      r -= 1;
      console.log(r);
  }

  // space bar for clearing the canvas
  if (e.keyCode === 32)
  {
    c.clearRect(0,0,canvas.width,canvas.height)
  }
})

document.querySelector('#cpicker').addEventListener('input', function(e)
{
  console.log(this.value);
})


function draw()
{
  c.beginPath();
  c.arc(pointer.x, pointer.y, r, 0, Math.PI*2, false);
  c.fillStyle = color;
  c.fill();
}


// function animate(){
//   requestAnimationFrame(animate);
//   console.log('hlw');
// }




// //rectangle
// c.fillStyle = 'rgba(255,0,0,0.3)';
// c.fillRect(0,0,100,100);
//
//
// //line
// c.beginPath();
// c.moveTo(400,300);
// c.lineTo(300,100);
// c.lineTo(400,500);
// c.strokeStyle = '#fa34a3';
// c.stroke();
//
// //arc
// for(var i=0; i<100; i++)
// {
//   var x = Math.random()*innerWidth*0.8;
//   var y = Math.random()*innerHeight*0.8;
//   c.beginPath();
//   c.arc(x, y, 10, 0, Math.PI*2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }
