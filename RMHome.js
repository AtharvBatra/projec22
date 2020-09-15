class Home
{
    constructor(image, x, y, width, height)
    {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = image;
    }
    display()
    {
        push();
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}