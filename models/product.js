import data from '../data.json' with { type: 'json' };
import comments from '../comment.json' with { type: 'json' };

const context = {
    products: data.products,
    nextId: 21,
    comments: comments.reviews
};

const productModel = {
    
    getAll: () => {
        return structuredClone(context.products);
    },

    getById: (id) => {
        const product = context.products.find(p => p.id == id);
        return structuredClone(product);
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
            const random = Math.floor(Math.random() * context.products.length);
            if (newData.includes(data.products[random])) i--;
            else {newData.push(data.products[random]);}
        }
        return newData;
    },

    getComments: (id) => {
        const productComments = context.comments.filter(c => c.productId == id);
        return structuredClone(productComments);
    },

    addComment: (username, stars, comment, productId) => {
        const newComment = {
            username: username,
            stars: stars,
            comment: comment,
            productId: productId
        };

        context.comments.push(newComment);

        return productId;
    }

}

export default productModel;