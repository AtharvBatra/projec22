class NPC{
    constructor(image, x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = image;
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h);
        pop();
    }
}
