/* filename: complexCode.js
   content: A complex code example demonstrating an online shopping system 
*/

// Class for creating Product objects
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.id} - ${this.name} - $${this.price} x ${this.quantity}`;
  }
}

// Class for managing the shopping cart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  calculateTotalPrice() {
    return this.products.reduce((total, product) => total + product.calculateTotalPrice(), 0);
  }

  checkout() {
    console.log("Checking out...");
    // Perform complex checkout logic here
    console.log("Checkout complete!");
  }

  toString() {
    return this.products.map((product) => product.toString()).join('\n');
  }
}

// Example usage
const cart = new ShoppingCart();
const product1 = new Product(1, "Product 1", 10, 2);
const product2 = new Product(2, "Product 2", 20, 1);

cart.addProduct(product1);
cart.addProduct(product2);

console.log(cart.toString());  // Print the contents of the shopping cart
console.log("Total Price: $" + cart.calculateTotalPrice());

cart.removeProduct(2);
console.log("\nAfter removing Product 2:");
console.log(cart.toString());  // Print the updated contents of the shopping cart
console.log("Total Price: $" + cart.calculateTotalPrice());

cart.checkout();  // Simulate the checkout process

// Other classes and functions could be added to further enhance the complexity and functionality of this code