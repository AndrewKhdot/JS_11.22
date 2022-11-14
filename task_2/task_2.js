class Calculator {
    constructor(x, y) {
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
        return this.x / this.y;
      }
}

let cal = new Calculator(1, 2);
console.log(cal.gS());
cal.setX(5);
let fun = cal.gS;
console.log(fun());
