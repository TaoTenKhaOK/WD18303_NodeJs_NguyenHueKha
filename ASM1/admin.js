const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");
app.set("views", "./admin/views");
app.use(express.static("./admin/public"));
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: true }));
// router
// 2
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/cate', (req, res) => {
    res.render('cate')
});
app.get('/product', (req, res) => {
    res.render('product')
});
app.get('/orders', (req, res) => {
    res.render('orders')
});

app.listen(port, () => {
    console.log(`Admin: http://127.0.0.1:${port}`);
});