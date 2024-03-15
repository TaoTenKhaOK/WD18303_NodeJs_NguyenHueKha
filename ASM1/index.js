const express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = 3300;
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");
app.set("views", "./client/views");
app.use(express.static("./client/public"));
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: true }));

// router
// trang chủ
app.get('/', (req, res) => {
  res.render('home');
});

// product
app.get('/shop', (req, res) => {
  res.render('shop', { products: listProduct });
});

// product_detail
app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = listProduct.find(item => item.id === productId);
  if (!product) {
    res.status(404).send("Product not found");
    return;
  }
  res.render('product-detail', { product: product });
});

// data product
const listProduct = [
  {
    id: 1,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 2,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 3,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 4,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 5,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 6,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 7,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 8,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  },
  {
    id: 9,
    title: "Mì Gói ABC",
    description: "Mì gói ABC với hương vị đậm đà, thơm ngon.",
    price: "20.000 ",
    imageURL: "HH_TCC.png"
  }
];




app.listen(port, () => {
  console.log(`Client: http://127.0.0.1:${port}`);
});