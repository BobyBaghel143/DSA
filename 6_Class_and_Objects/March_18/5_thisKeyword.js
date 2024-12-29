let obj = {
  x: 10,
  y: 20,
  display() {
    console.log(this.x);
    console.log(this.y);
  },
};

obj.display();
