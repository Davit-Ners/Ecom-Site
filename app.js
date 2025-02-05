import express from 'express';
import { engine } from 'express-handlebars';
import data from './data.json' with { type: "json" };
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
    const id = Number(req.params.id);
    console.log(id);
    res.render('product-detail', { layout: 'main' });
});


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});