class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
    /* this.hello = function () {
      return 'hi my name is ' + this.name + 'and my height is ' + this.height + '.';
    };  */
  }
  // methods ho jun chai properties ko scope ma hudaina hai..tara mathiko hello methods chai properties ko scope ma huncha
  hello() {
    return 'hi  my name is ' + this.name + ' ' + ' and welcome to world';
  }
}
/* let king = new Animal('nikhil', 8);
console.log(king.hello());
console.log(king.intro()); */
class Tiger extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }
  intro() {
    return 'hi i am tiger and my name is ' + this.name + ' my height is ' + this.height + ' and my color is ' + this.color;
  }
}
let sandeep = new Tiger('sandeep', 9, 'scattered red');
console.log(sandeep.hello());
console.log(sandeep.intro());
class Lion extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  intro() {
    return 'hi i am Lion and my name is ' + this.name + ' and my color is ' + this.color;
  }

}
let rai = new Lion('rai', 10, 'brown');
console.log(rai.hello());
console.log(rai.intro());

/* ...... note .....
the properties or methods thats general to all is in the parent class...
the child class inherits those mehtods or properties depending on the requirements.
similarly child classes can override method from parent classes

 */