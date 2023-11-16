const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { product: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProductIndex = cart.product.findIndex(
        (prod) => prod.id === id
      ); // 제품 찾기
      const existingProduct = cart.product[existingProductIndex];
      let updatedProduct; // 새로운 제품 추가
      if (existingProduct) {
        //이미 있다면 1증가
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1; //qty = 수량 개수 quantity임 수량 늘리기
        cart.product = [...cart.product];
        cart.product[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.product = [...cart.product, updatedProduct]; // 제품 추가
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
