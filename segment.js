/**
 * Created by apple on 16/11/22.
 */
function Segment(width, height, color){
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = (color === undefined) ? "#ffffff" : color;
  this.lineWidth = 1;
}

Segment.prototype.draw(context){
  var h = this.height,
    d = this.width + h,
    r = h/2;    //leg radius
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;

  context.beginPath();
  context.moveTo(0, -r);
  context.lineTo(d-2*r, -r);
  context.quadraticCurveTo(d-r, -r, d-r, 0);  //Bézier curve
  context.lineTo(d-r,h-2*r);
  context.quadraticCurveTo(d-r, h-r, d-2*r, h-r);
  context.lineTo(0, h-r);
  context.quadraticCurveTo(-r, h-r, -r, h-2*r);
  context.lineTo(-r, 0);
  context.quadraticCurveTo(-r, -r, 0, -r);
  context.closePath();

  context.fill();
  if(this.lineWidth > 0){
    context.stroke();
  }

  context.beginPath();
  context.arc(0,0,2,0,(MATH.PI * 2),true);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.arc(this.width,0,2,0,(MATH.PI * 2),true);
  context.closePath();
  context.stroke();

  context.restore();
}

Segment.prototype.getPin = function(){
  return{
    x: this.x + Math.cos(this.rotation) * this.width,
    y: this.y + Math.sin(this.rotation) * this.width
  };
};

