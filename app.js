import express from 'express';
import { engine } from 'express-handlebars';
import data from './data.json' with { type: "json" };
import commentData from './comment.json' with { type: "json" };
import { getRandomProduct } from './utils/data.js';

const app = express();
const PORT = 8080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const dayProducts = getRandomProduct(3, data);
    res.render('index', { dayProducts });
});

app.get('/product', (req, res) => {
    const products = data.products;
    res.render('product', { products });
});

app.get('/product-detail/:id', (req, res) => {
    const productId = Number(req.params.id);
    const product = data.products.filter((elem) => elem.id == productId)[0];
    const productComment = commentData.reviews.filter((comment) => comment.productId == productId);
    res.render('product-detail', { product, productComment });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/confirmation', (req, res) => {
    res.render('confirmation');
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    if(req.body.email && req.body.message) res.redirect('/confirmation');
    else {
        res.status(200).render('contact', { error: 'Veuillez completer le formulaire !'});
        return;
    }
});


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});