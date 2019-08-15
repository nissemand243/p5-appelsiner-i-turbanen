/*
 * Dette script definerer klassen Kurv
*/

function Kurv(x, y, bredde, dybde, speed) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    
    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [0, 0, 0];
    this.image = loadImage('images/turban.png');
    
    /*
        her tegnes objektet (turbanen)
    */
    this.tegn = function() {
        fill(this.col);
        rect(this.x, this.y, this.bred, this.dyb);
        image(this.image,
            this.x,
            this.y,
            this.bred,
            this.dyb,
        );
        rectMode(CENTER);
        imageMode(CENTER);
    }

    /*
        funktion der bruges til at flytte turbanen ved hjælp af tasterne "w, a, s, d"
    */
    this.move = function() {
        this.x = mouseX;
        this.y = mouseY;
    }
    
/*
    Funktionen "this.grebet" har opsat krav til at, hvis bolden kommer indenfor området defineret,
    skal denne retuneres som "true", hvis ikke bliver denne returneret som "false"
*/
    this.grebet = function(xa, ya, ra) {
        if ((ya < this.y+65 && ya > this.y-65) && xa > this.x+ra && xa < this.x+this.bred-ra) {
            return true;
        }
        else {
            return false;
        }
    }

} 