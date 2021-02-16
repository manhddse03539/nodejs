require('dotenv').config();
const express = require('express');
const app = express();

const userRouter = require('./router/user.router');
const loginRouter = require('./router/auth.router');
const productRouter = require('./router/product.router');
const cartRouter = require('./router/cart.router');

const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewares/auth.middleware');
const sessionMiddleware = require('./middlewares/session.middleware');
const productAPI = require('./api/router/product.router');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser('mahsdjaskdask'))
app.use(express.static('public'));
app.use(sessionMiddleware);
app.use('/api/products', productAPI);

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
db = lowdb(adapter);
db.defaults({ users: [] })
    .write()

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        name: "Manh"
    });
});

app.use('/users', authMiddleware.requireLogin, userRouter);
app.use('/auth', loginRouter);
app.use('/products', authMiddleware.requireLogin, productRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});