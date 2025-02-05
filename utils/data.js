function getRandomProduct(nb, data) {
    const newData = [];
    for (let i = 0; i < nb; i++) {
        const random = Math.floor(Math.random() * data.products.length);
        newData.push(data.products[random]);
    }
    return newData;
}


export {getRandomProduct};