import express from 'express';
import { engine } from 'express-handlebars';
import session from 'express-session';
import data from './data.json' with { type: "json" };
import commentData from './comment.json' with { type: "json" };
import homeRouter from './routers/home.router.js';
import productRouter from './routers/products.router.js';
import contactRouter from './routers/contact.router.js';
import cartRouter from './routers/cart.router.js';
import authRouter from './routers/auth.router.js';
import db from './DB.js';

const app = express();
const {NODE_ENV, PORT, SESSION_SECRET} = process.env;
const CART = [];

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

//- Session
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
}));
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use(homeRouter);
app.use(productRouter);
app.use(contactRouter);
app.use(cartRouter);
app.use(authRouter);

// app.get('/', (req, res) => {
//     const dayProducts = getRandomProduct(3, data);
//     res.render('index', { dayProducts });
// });

// app.get('/product', (req, res) => {
//     const products = data.products;
//     res.render('product', { products });
// });

// app.get('/product-detail/:id', (req, res) => {
//     const productId = Number(req.params.id);
//     const product = data.products.filter((elem) => elem.id == productId)[0];
//     const productComment = commentData.reviews.filter((comment) => comment.productId == productId);
//     res.render('product-detail', { product, productComment });
// });

// app.get('/contact', (req, res) => {
//     res.render('contact');
// });

// app.get('/confirmation', (req, res) => {
//     res.render('confirmation');
// });

// app.post('/contact', (req, res) => {
//     console.log(req.body);
//     if(req.body.email && req.body.message) res.redirect('/confirmation');
//     else {
//         res.status(200).render('contact', { error: 'Veuillez completer le formulaire !'});
//         return;
//     }
// });

// app.get('/panier', (req, res) => {
//     const cartToRender = getCart(CART,data);
//     const totalPrice = getTotaPrice(cartToRender);
//     console.log(cartToRender, totalPrice);
//     res.render('panier', { cartToRender, totalPrice });
// });

// app.post('/product-detail/:id', (req, res) => {
//     const product = req.body.id;
//     CART.push(product);
//     console.log('Produit reçu:', product, CART);
//     res.redirect('/panier');
// });


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});