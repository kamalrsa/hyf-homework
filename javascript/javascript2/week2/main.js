console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}


renderProducts(products);
let input = document.getElementById('productName')
input.addEventListener('keyup', (x)=>{
    let filterProduct = x.target.value.toLowerCase();
    const filteredValue = products.filter((element)=>{
        return element.name.toLowerCase().match(filterProduct);
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredValue);
});
let priceInput= document.querySelector('.maxPrice');
 priceInput.addEventListener("keyup", (e)=>{
        let price = priceInput.value;
        const  priceFilter = products.filter((x) =>{
        return x.price <= price;
    } );
    productsUl.innerHTML = " ";
    renderProducts(priceFilter);
})
let cheapFirst = document.getElementById("cheap").value;
cheapFirst.addEventListener("onclick", (e)=>{
    const sortedPrice = products.sort((a,b)=>{
        return a.price - b.price;
    });
    
       });
    productsUl.innerHTML = " ";
    renderProducts(sortedPrice);