function appelsin(){
    var x = 0; 
    var y = 550;
    var rad = 20;
    var xspeed = 4;
    var yspeed = -10;
    var newspeed;
    var grav = 0.1;
    var col = [200,100,0];


    this.display = function(){
        if(tid > 0) {
            tid -= 1;
        }
        
        if (tid < 100) {
            fill(col);
            ellipse(x, y, rad * 2, rad * 2);
        }
    }

    this.move = function(){
        if (tid <= 0) {
            x += xspeed;
            y += yspeed;
            yspeed += grav;
        }
        if (x > width || y > height) {
            miss +=1;
            shootNew();
        }
    }

}