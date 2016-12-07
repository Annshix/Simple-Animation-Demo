/**
 * Created by apple on 16/11/22.
 */
function segment(width, height, color){
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

segment.prototype.draw(context){
  var h = this.height,
    d = this.width + h,
    r = h/2;    //leg radius
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.fillTRect(this.x, this.y, this.x + d, this.y + h);

}