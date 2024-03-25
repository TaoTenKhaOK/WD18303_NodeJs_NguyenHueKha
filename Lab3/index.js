const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5300;
const mysql = require("mysql");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
const multer = require('multer');

// connect
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs'
})

app.listen(port, () => {
    console.log(`ung dung dang chay port: http://127.0.0.1:${port}`);
});

//client

app.get("/", (req, res) => {
    let sqlProducts = `SELECT * FROM products`;
    let sqlCategories = `SELECT * FROM categories`;

    db.query(sqlProducts, function (errProducts, products) {
        if (errProducts) {
            throw errProducts;
        }

        db.query(sqlCategories, function (errCategories, categories) {
            if (errCategories) {
                throw errCategories;
            }

            res.render('home', { categories: categories, products: products });
        });
    });
});

app.get("/shop/:cateId", (req, res) => {
    let cateId = req.params.cateId;
    let sqlProducts = `SELECT * FROM products WHERE categories_id=${cateId}`;
    let sqlCategories = `SELECT * FROM categories`;

    db.query(sqlProducts, function (errProducts, products) {
        if (errProducts) {
            throw errProducts;
        }

        db.query(sqlCategories, function (errCategories, categories) {
            if (errCategories) {
                throw errCategories;
            }

            res.render('shop', { categories: categories, products: products });
        });
    });
});



// admin 
app.get("/admin", (req, res) => {
    res.render("admin/home");
});

function fetchCategoriesFromDatabase(callback) {
    const sql = 'SELECT * FROM categories';

    db.query(sql, (err, categories) => {
        if (err) {
            callback(err);
        } else {
            callback(null, categories);
        }
    });
}

app.get("/addnew", (req, res) => {
    fetchCategoriesFromDatabase((err, categories) => {
        if (err) {
            console.error("Error fetching categories:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        res.render("admin/add-product", { categories: categories });
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/addnew', upload.single('productImage'), (req, res) => {
    const file = req.file;
    let title = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let nameImage = file.filename;
    const categoryId = req.body.category;

    let product = {
        name: title,
        short_description: description,
        image: nameImage,
        content: '', 
        price: price,
        sale_price: 0,
        create_at: new Date(), 
        update_at: new Date(), 
        categories_id: categoryId
    };


    db.query('INSERT INTO products SET ?', product, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.redirect('/list');
        }
    });
});


app.get("/list", (req, res) => {
    db.query("SELECT * FROM products", (err, products) => {
        if (err) {
            console.error("Error fetching products:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        res.render("admin/list", { products: products });
    });
});

app.post("/delete/:productId", (req, res) => {
    const productId = req.params.productId;

    db.query("DELETE FROM products WHERE id = ?", [productId], (err, result) => {
        if (err) {
            console.error("Error deleting product:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        res.redirect("/list?successMessage=Sản phẩm đã được xoá thành công."); 
    });
});

app.get("/edit/:productId", (req, res) => {
    const productId = req.params.productId;

    db.query("SELECT * FROM products WHERE id = ?", [productId], (err, product) => {
        if (err) {
            console.error("Error fetching product:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        fetchCategoriesFromDatabase((err, categories) => {
            if (err) {
                console.error("Error fetching categories:", err);
                res.status(500).send("Internal Server Error");
                return;
            }

            res.render("admin/edit", { product: product[0], categories: categories });
        });
    });
});


app.post("/edit/:productId", upload.single('productImage'), (req, res) => {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    if (req.file) {
        updatedProduct.image = req.file.filename;
    }

    delete updatedProduct.productImage; 

    db.query("UPDATE products SET ? WHERE id = ?", [updatedProduct, productId], (err, result) => {
        if (err) {
            console.error("Error updating product:", err);
            res.status(500).send("Internal Server Error");
            return;
        }

        res.redirect("/list");
    });
});