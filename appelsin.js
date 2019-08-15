function appelsin(){
    this.x = 0; 
    this.y = 550;
    this.rad = 20;
    this.xspeed = 4;
    this.yspeed = -10;
    this.newspeed;
    this.grav = 0.1;
    this.col = [200,100,0];

    this.tid = 150;
    this.score = 0;
    this.miss = 0;


    this.display = function(){
        if(this.tid > 0) {
            this.tid -= 1;
        }
        
        if (this.tid < 100) {
            fill(this.col);
            ellipse(this,x, this.y, this.rad * 2, this.rad * 2);
        }
    }

    this.move = function(){
        if (this.tid <= 0) {
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.yspeed += this.grav;
        }
        if (this.x > width || this.y > height) {
            this.miss +=1;
            shootNew();
        }
    }
    this.shootNew = function(){
        //Her skal vi sørge for at en ny appelsin skydes afsted 
        this.x = this.rad;
        this.y = Math.random()*750+30;
        this.yspeed = this.newspeed;
        this.xspeed = 6*Math.random();
        this.tid = (int) (Math.random() * 400);
        console.log(this.tid);
    }
}