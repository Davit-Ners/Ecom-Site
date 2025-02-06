import data from './data-public.json' with { type: 'json' };
const addToCartBtn = document.getElementById('addToCart');

let panier = [];

function addToCart(productId) {
    const product = data.products.find(elem => elem.id == productId);
    panier.push(product);
    console.log(panier);
};

addToCartBtn.addEventListener('click', () => {
    addToCart(Number(addToCartBtn.parentElement.id[addToCartBtn.parentElement.id.length - 1]));
});