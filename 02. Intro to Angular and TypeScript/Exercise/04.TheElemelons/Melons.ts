abstract class Melon {
  public weight: number;
  public melonSort: string;
  public element: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
    this.element = this.constructor.name.slice(0, this.constructor.name.indexOf('melon'));
  }

  getElementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    let toStringText = 
    'Element: ' + this.element + '\n' +
    'Sort: ' + this.melonSort + '\n' +
    'Element Index: ' + this.getElementIndex();
    return toStringText;
  }
}

class Watermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}

class Firemelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}

class Earthmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}

class Airmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}

class Melolemonmelon extends Earthmelon {
  private elements: Array<string>;

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.element = "Water";
    this.elements = ['Fire', 'Earth', 'Air'];
  }

  morph(): void {
    this.elements.push(this.element);
    this.element = this.elements.shift();
  }
}

let melon = new Watermelon(2, "kingsize");
let xeno = new Melolemonmelon(3, 'alien');


console.log(melon.toString());
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());