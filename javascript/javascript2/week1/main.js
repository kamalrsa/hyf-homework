console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  const ul = document.querySelector("ul");
  if(!ul){
      ul = document.createElement("ul");
      const main = document.querySelector("main");
      main.appendChild(ul);
  }
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);