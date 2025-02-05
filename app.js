import express from 'express';
import { engine } from 'express-handlebars';
import data from './data.json' with { type: "json" };

const app = express();
const PORT = 8080;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Web Server is running on port ${PORT}`);
});