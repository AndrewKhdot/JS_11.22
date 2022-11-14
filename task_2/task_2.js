class Calculator {
    constructor(x, y) {
        if((typeof x !== 'number') || isNaN(x) || !isFinite(x) || (typeof y !== 'number') || isNaN(y) || !isFinite(y)) {
            throw new Error;
        }
        this.setX(x);
        this.setY(y);
        this.getSum = this.Sum.bind(this);
        this.getMul = this.Mul.bind(this);
        this.getSub = this.Sub.bind(this);
        this.getDiv = this.Div.bind(this);
      }
    
      getX() {
        return this.x;
      }
    
      setX(value) {
            this.x = value;
      }
      getY() {
        return this.y;
      }
    
      setY(value) {
            this.y = value;
      }
      Sum() {
        return this.x + this.y;
      }
      Mul() {
        return this.x * this.y;
      }
      Sub() {
        return this.x - this.y;
      }
      Div() {
        if(this.y === 0) {
            throw new Error; 
        }
        return this.x / this.y;
      }
}