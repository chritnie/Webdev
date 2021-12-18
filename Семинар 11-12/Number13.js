console.log('\nnumber 12');
class Vector {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
  plus(vec){
    let object = new Object();
    object.x = this.x + vec.x;
    object.y = this.y + vec.y;
    return object;
  }
  minus(vec){
    let object = new Object();
    object.x = this.x - vec.x;
    object.y = this.y - vec.y;
    return object;
  }
  get length(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);