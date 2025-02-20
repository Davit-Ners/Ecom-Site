import fs from 'fs/promises';

function getRandomProduct(nb, data) {
    const newData = [];
    for (let i = 0; i < nb; i++) {
        const random = Math.floor(Math.random() * data.products.length);
        if (newData.includes(data.products[random])) i--;
        else {newData.push(data.products[random]);}
    }
    return newData;
}

function getCommentForProduct(productId, commentData) {
    const productComment = commentData.filter((comment) => comment.productId == productId);
    for (let comment of productComment) {
        let commentStars = '';
        for (let i = 0; i < comment.stars; i++) {
            commentStars += '★';
        }
        comment.stars = commentStars;
        console.log(comment);
    }
    return productComment;
}

function addCardJson(product, data) {
    const test = fs.readFile(data.product);
    console.log(test);
}

function getCart(productIds, data) {
    const panier = [];
    for (let id of productIds) {
        const product = data.products.find((elem) => elem.id == id);
        panier.push(product);
    }
    return panier;
}

function getTotaPrice(panier) {
    let totalPrice = 0;

    for (let product of panier) {
        totalPrice += Number(product.price);
    }

    return Math.round(totalPrice * 100) / 100;
}


export {getRandomProduct, getCommentForProduct, addCardJson, getCart, getTotaPrice};