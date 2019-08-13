function appelsin(){
    this.x = x; 
    this.y = y;
    this.rad = rad;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.newspeed = newspeed;
    this.grav = grav;
    this.col = col;


    this.tegn = function(){
        fill(this.col);
        ellipse(this.x, this.y, this.rad*2, this.rad*2);
    }

}