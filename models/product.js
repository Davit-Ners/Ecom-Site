import data from '../data.json' with { type: 'json' };
const context = {
    products: data.products,
    nextId: 21
};

const productModel = {
    
    getAll: () => {
        return structuredClone(context.products);
    },

    getById: () => {

    },

    add: () => {

    },

    update: () => {

    },

    delete: () => {

    },

    getRandomProduct: (nb) => {
        const newData = [];
        for (let i = 0; i < nb; i++) {
            const random = Math.floor(Math.random() * data.products.length);
            if (newData.includes(data.products[random])) i--;
            else {newData.push(data.products[random]);}
        }
        return newData;
    }

}

export default productModel;