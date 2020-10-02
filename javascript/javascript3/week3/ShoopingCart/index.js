class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  currencyExchange(currency) {
    const rate = { EUR: 0.27, USD: 0.16 };
    return this.price * rate[currency];
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((p) => p.name !== product.name);
  }

  searchProduct(productName) {
    this.products = this.products.filter(
      (search) => search.name === productName.name
    );
    console.log("searched", this.products);
  }

  getTotal() {
    const totalPrice = this.products.map((product) => product.price);
    //console.log(totalPrice);
    let sum = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      sum += totalPrice[i];
    }
    return sum;
    //console.log(sum);
  }
  // render the products and price
  renderProducts() {
    const shopping = document.getElementById("shooping");

    this.products.forEach((product) => {
      const productItem = document.createElement("ul");
      productItem.innerHTML = `
        <div> Product_Name: ${product.name}</div>
        <div> Price: ${product.price}</div>`;

      shopping.appendChild(productItem);
    });
    const total = document.createElement("li");
    total.innerHTML = `User Name :${this.getUser()} , Total Price ${this.getTotal()}`;
    shopping.appendChild(total);
  }

  getUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => response.json())
      .then((user) => {
        return user.name;
      });
  }
}
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("laptop", 8000);
const mobile = new Product("Mobile", 9000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(mobile);
//shoppingCart.removeProduct(laptop);
shoppingCart.getTotal();
//shoppingCart.searchProduct(laptop);

//shoppingCart.getUser();
shoppingCart.renderProducts();
console.log(shoppingCart);
const plant = new Product("plant", 50);
console.log(plant.currencyExchange("EUR"));
