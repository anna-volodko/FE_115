"use strict";

var allProducts = [{
  name: "Millenium",
  quantity: 12,
  uniqId: 100,
  available: true,
  price: 31
}, {
  name: "Ritter Sport",
  quantity: 0,
  uniqId: 200,
  available: false,
  price: 67
}, {
  name: "Milka",
  quantity: 50,
  uniqId: 300,
  available: true,
  price: 45
}, {
  name: "Toblerone",
  quantity: 0,
  uniqId: 400,
  available: false,
  price: 58
}, {
  name: "Roshen",
  quantity: 1500,
  uniqId: 500,
  available: true,
  price: 38
}, {
  name: "Ferrero Rosher",
  quantity: 300,
  uniqId: 600,
  available: true,
  price: 137
}, {
  name: "Spell",
  quantity: 50,
  uniqId: 700,
  available: true,
  price: 129
}, {
  name: "Merci",
  quantity: 100,
  uniqId: 800,
  available: true,
  price: 129
}];
var userCart = [];

function addToCart(id, quantity) {
  var newProduct = allProducts.find(function (el) {
    return el.uniqId === id;
  });

  if (!newProduct) {
    console.log("\u0412 \u043D\u0430\u0441 \u0442\u0430\u043A\u043E\u0433\u043E \u043D\u0435\u043C\u0430\u0454, \u0456\u0434\u0456\u0442\u044C \u0432 \u0456\u043D\u0448\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D!");
    return false;
  }

  if (newProduct.quantity < quantity) {
    console.log("\u0426\u044E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443 \u0432\u0436\u0435 \u0440\u043E\u0437\u043A\u0443\u043F\u0438\u043B\u0438 :(");
    return false;
  }

  newProduct.quantity = quantity;
  userCart.push(newProduct); // setQuantity(newProduct.quantity - quantity,id);

  console.log("\u0426\u044E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u043A\u043E\u0448\u0438\u043A\u0430!");
} // addToCart(100, 2);
// addToCart(300, 2);
// addToCart(500, 4);


function setQuantity(quantity, id) {
  var newProduct = allProducts.findIndex(function (el) {
    return el.uniqId === id;
  });
  allProducts[newProduct].quantity = quantity;
}

function deleteProduct(id) {
  var deletedProduct = userCart.findIndex(function (el) {
    return el.uniqId === id;
  });

  if (deletedProduct === -1) {
    console.log("\u0412\u0438 \u0446\u044E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443 \u043D\u0435 \u0434\u043E\u0434\u0430\u0432\u0430\u043B\u0438, \u0442\u043E\u043C\u0443 \u0456 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437 \u043A\u043E\u0448\u0438\u043A\u0430 \u0457\u0457 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435!");
  } else {
    userCart.splice(deletedProduct, 1);
    console.log("\u0426\u044E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437 \u043A\u043E\u0448\u0438\u043A\u0430!");
  }
} // deleteProduct(100);


function showCartProducts() {
  var result = userCart.map(function (el) {
    return {
      name: el.name,
      price: el.price
    };
  });
  console.log(result);
}

function getProductAmount() {
  var amount = userCart.reduce(function (acc, el) {
    acc = el.quantity * el.price + acc;
    return acc;
  }, 0); // return amount;

  console.log("\u0417 \u0412\u0430\u0441 ".concat(amount, " \u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0456\u0432 \u0433\u0440\u0438\u0432\u0435\u043D\u044C. \u0414\u044F\u043A\u0443\u044E\u0454\u043C\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!"));
}

function toHigherPrice() {
  var sorted = allProducts.slice();
  sorted.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(sorted);
}

function toLowerPrice() {
  var sorted = allProducts.slice();
  sorted.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log(sorted);
}

function showAvailableFirst() {
  var sorted = allProducts.slice();
  sorted.sort(function (a, b) {
    if (a.available === true && b.available === true) {
      return 1;
    } else if (a.available === true && b.available === false) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(sorted);
}