import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 8080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});