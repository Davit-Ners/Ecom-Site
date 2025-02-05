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

app.get('/', (req, res) => {
    const dayProducts = getRandomProduct(3, data);
    res.render('index', { dayProducts });
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/product-detail/:id', (req, res) => {
    const productId = Number(req.params.id);
    const product = data.products.filter((elem) => elem.id == productId)[0];
    const productComment = commentData.reviews.filter((comment) => comment.productId == productId);
    res.render('product-detail', { product, productComment });
});


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});