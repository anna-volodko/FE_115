const allProducts = [
  {
    name: "Millenium",
    quantity: 12,
    uniqId: 100,
    available: true,
    price: 31,
  },
  {
    name: "Ritter Sport",
    quantity: 0,
    uniqId: 200,
    available: false,
    price: 67,
  },
  {
    name: "Milka",
    quantity: 50,
    uniqId: 300,
    available: true,
    price: 45,
  },
  {
    name: "Toblerone",
    quantity: 0,
    uniqId: 400,
    available: false,
    price: 58,
  },
  {
    name: "Roshen",
    quantity: 1500,
    uniqId: 500,
    available: true,
    price: 38,
  },
  {
    name: "Ferrero Rosher",
    quantity: 300,
    uniqId: 600,
    available: true,
    price: 137,
  },
  {
    name: "Spell",
    quantity: 50,
    uniqId: 700,
    available: true,
    price: 129,
  },
  {
    name: "Merci",
    quantity: 100,
    uniqId: 800,
    available: true,
    price: 129,
  },
];
const userCart = [];

function addToCart(id, quantity) {
    const newProduct = allProducts.find((el) => el.uniqId === id);
    const alreadyIn = userCart.findIndex((el) => el.uniqId === id);
    
    if (!newProduct) {
      console.log(`В нас такого продукту немає, ідіть в інший магазин!`);
      return false;
    } else if (newProduct.quantity < quantity) {
      console.log(`Цю шоколадку вже розкупили :(`);
      return false;
    } else if (alreadyIn !== -1) {
      userCart[alreadyIn].quantity += quantity;
      console.log(`Кількість цієї шоколадки у кошику збільшено!`);
    } else {
      newProduct.quantity = quantity;
      userCart.push(newProduct);
      // setQuantity(newProduct.quantity - quantity,id);
      console.log(`Цю шоколадку додано до кошика!`);
    }
  }
// addToCart(100, 2);
// addToCart(300, 2);
// addToCart(500, 4);

function setQuantity(quantity, id) {
  const newProduct = allProducts.findIndex((el) => el.uniqId === id);
  allProducts[newProduct].quantity = quantity;
}

function deleteProduct(id) {
    const deletedProduct = userCart.findIndex((el) => el.uniqId === id);
    if (deletedProduct === -1) {
      console.log(
        `Ви цю шоколадку не додавали, тому і видалити з кошика її не можете!`
      );
    } else {
      userCart.map(deletedProduct.quantity - 1);
      console.log(`Цю шоколадку видалено з кошика!`);
    }
  }
// deleteProduct(100);

function showCartProducts() {
  const result = userCart.map((el) => {
    return { name: el.name, price: el.price };
  });
  console.log(result);
}

function getProductAmount() {
  const amount = userCart.reduce((acc, el) => {
    acc = el.quantity * el.price + acc;
    return acc;
  }, 0);
  // return amount;
  console.log(`З Вас ${amount} мільйонів гривень. Дякуюємо за покупку!`);
}

function toHigherPrice() {
  const sorted = allProducts.slice();
  sorted.sort((a, b) => {
    return a.price - b.price;
  });
  console.log(sorted);
}
function toLowerPrice() {
  const sorted = allProducts.slice();
  sorted.sort((a, b) => {
    return b.price - a.price;
  });
  console.log(sorted);
}

function showAvailableFirst() {
  const sorted = allProducts.slice();
  sorted.sort((a, b) => {
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
