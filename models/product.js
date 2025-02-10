import data from '../data.json' with { type: 'json' };

const productModel = {
    
    getAll: () => {

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