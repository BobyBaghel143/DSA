class Product {   // class is kind of like a template
    discount;
    #rating = 1;
    #name;    // declare the private member first before you use it
    description = "custom";

    constructor(n, p) {
        console.log("calling the constructor");
        this.#name = n;    // this keyword actually refers to the same empty object we created
        this.price = p;    // data member
        this.#rating = 1;
    }

    static customMethod() {
        console.log("calling the custom static method");
    }

    getName() {
        console.log(this.#name);
    }

    setName(newName) {
        this.#name = newName;
    }

    get_rate() {
        console.log(this.#rating);
    }

    set_rate(r) {
        if (r < 0) return;
        this.#rating = r;
    }

    display() {    // class methods are nothing but functions, they represent behavior -> member functions
        console.log("Displaying a product", this.#name, this.price, this.#rating)
    }
}

const p = new Product("iphone 14", 100000);   // new -> creates an empty plain object
console.log(p);

p.name = "sumsung s30"
// console.log(p.name);
// console.log(p);


p.getName();
p.setName("sumsung s30");

p.get_rate()
p.set_rate(2);

p.display();

// p.rate;
// p.rate = 3;
// p.display();
// const p1 = new Product();

// Product.customMethod();