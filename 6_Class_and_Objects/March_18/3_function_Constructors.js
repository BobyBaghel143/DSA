function Product(n, p) {
  this.name = n;
  this.price = p;
//   return { x: 10, y: 20 }
}

const p = new Product("iphone 14", 100000);
console.log(p);

// p.name("sumsung s30");
// console.log(p.name);
// console.log(p.price);
// console.log(p);

/**
 * 1 ->  this -> this is js diff than other languages
 * 2 ->  this -> this kerword refers to the context from where we call the function -> is not applicable to arrow functions
 */

/**
 * if you dont return anyting, js return s the newly created obj
 * if you return premitive, then also we get newly created object
 * if you return custom obj, then js will return this custom obj not the newly  create obj
 */
