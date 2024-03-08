const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());

// router
// 2
app.get('/', (req, res) => {
    res.send('<p>Đây là trang home</p>')
});

app.get('/product', (req, res) => {
    res.send('<p>Đây là trang product</p>')
});

app.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="post"><input type="text" name="productName" placeholder="input product"><input type="submit" value="add"></form>')
});

app.post('/add-product', (req, res) => {
    res.send(`<p>Thêm Thành Công!</p>`);
});

app.listen(port, () => {
    console.log(`ung dung dang chay port: http://127.0.0.1:${port}`);
});

// 3
//data
const inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];

app.get('/inventors', (req, res) => {
    let list = '<h2>Danh sách nhà khoa học<ul>';
    inventors.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list += '</ul></h2>';
    res.send(list);
});

app.get('/inventor/:id', (req, res) => {
    let id = req.params.id;
    inventor = inventors.find(e => e.id == id);
    info = `<h2>Thông tin chi tiết nhà khoa học:Full name: ${inventor.first} ${inventor.last}, Year: ${inventor.year}, 
    Passed: ${inventor.passed}</h2>`;
    res.send(info);
});

// 4
app.get('/add-inventor', (req, res) => {
    res.send('<h1>Thêm Nhà Khoa Học</h1><form action="/inventor" method="POST"><input type="text" name="first" placeholder="input first name"><input type="text" name="last" placeholder="input last name"><br><input type="number" name="year" placeholder="Year"><input type="number" name="passed" placeholder="passed"><br><button type="submit">Add Product</button></form>');
});

app.post('/inventor', (req, res) => {
    let newInventor = req.body;
    newInventor.id = inventors.length + 1;
    inventors.push(newInventor);
    res.redirect('/inventors');
});

// 5 - cho thêm
//data
app.use(express.static('img'));

const products = [
    { id: 1, name: 'Ly - chay', price: 7000, shortDescription: 'Ly chất lượng cao phục vụ mọi nhu cầu của bạn', detailedDescription: 'Chiếc ly này được trang bị công nghệ mới nhất và có tất cả các tính năng bạn cần cho công việc hoặc giải trí.', images: ['ly-1.png', 'ly-1.png'] },
    { id: 2, name: 'ly - bi - do', price: 6000, shortDescription: 'Ly chất lượng cao phục vụ mọi nhu cầu của bạn', detailedDescription: 'Chiếc ly này được trang bị công nghệ mới nhất và có tất cả các tính năng bạn cần cho công việc hoặc giải trí', images: ['ly-2.png', 'ly-2.png'] },
    { id: 3, name: 'ly - TCC', price: 9000, shortDescription: 'Ly chất lượng cao phục vụ mọi nhu cầu của bạn', detailedDescription: 'Chiếc ly này được trang bị công nghệ mới nhất và có tất cả các tính năng bạn cần cho công việc hoặc giải trí', images: ['ly-3.png', 'ly-3.png'] }
];

const comments = {};

app.get('/products', (req, res) => {
    let list = '<h2>Danh sách sản phẩm<ul>';
    products.forEach(product => {
        list += `<li><a href="/product/${product.id}">${product.name}</a></li>`;
    });
    list += '</ul></h2>';
    res.send(list);
});

app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    let info = `<h2>Thông tin chi tiết sản phẩm</h2>
                <p>Tên: ${product.name}</p>
                <p>Giá: ${product.price} VNĐ</p>
                <p>Mô tả ngắn: ${product.shortDescription}</p>
                <p>Mô tả chi tiết: ${product.detailedDescription}</p>
                <h3>Hình ảnh:</h3>
                <ul>`;
    product.images.forEach(image => {
        info += `<li><img src="/${image}" alt="Hình ảnh sản phẩm" style="width: 150px; height: auto;"></li>`; 
    });
    info += `</ul>
            <h3>Bình luận và Đánh giá:</h3>
            <form action="/product/${productId}/comment" method="POST">
                <label for="comment">Ý kiến của bạn:</label><br>
                <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br>
                <label for="rating">Đánh giá của bạn (1-5):</label>
                <input type="number" id="rating" name="rating" min="1" max="5"><br>
                <button type="submit">Gửi</button>
            </form>`;
    if (comments[productId]) {
        info += `<h4>Bình luận trước đó:</h4><ul>`;
        comments[productId].forEach(comment => {
            info += `<li>${comment.comment} - Đánh giá: ${comment.rating}</li>`;
        });
        info += `</ul>`;
    }
    res.send(info);
});

app.post('/product/:id/comment', (req, res) => {
    const productId = parseInt(req.params.id);
    const comment = req.body.comment;
    const rating = parseInt(req.body.rating);
    if (!comments[productId]) {
        comments[productId] = [];
    }
    comments[productId].push({ comment, rating });
    res.redirect(`/product/${productId}`);
});

