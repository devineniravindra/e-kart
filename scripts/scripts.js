"use strict";

var cartData = {
  items: [{
    name: "Samsung Series 4",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 13999,
      display: 22500
    },
    discount: 37
  }, {
    name: "Samsung Super 6",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 35999,
      display: 66900
    },
    discount: 46
  }, {
    name: "Samsung The Frame",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 84999,
      display: 133900
    },
    discount: 36
  }, {
    name: "Thomson B9 Pro",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 9999,
      display: 16999
    },
    discount: 41
  }, {
    name: "LG Ultra HD",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 39990,
      display: 79990
    },
    discount: 50
  }, {
    name: "Vu Ready LED TV",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 7999,
      display: 17e3
    },
    discount: 52
  }, {
    name: "Koryo Android TV",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 55999,
      display: 199990
    },
    discount: 71
  }, {
    name: "Micromax LED Smart",
    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    price: {
      actual: 9999,
      display: 27990
    },
    discount: 64
  }]
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var selectedItem = [];

var cartDetails = /*#__PURE__*/function () {
  function cartDetails(props) {
    _classCallCheck(this, cartDetails);

    this.selectedItems = props;
  }

  _createClass(cartDetails, [{
    key: "render",
    value: function render() {
      var item = '';
      var totalprice = 0;
      var totalDiscount = 0;

      for (var i = 0; i < this.selectedItems.length; i++) {
        var itemName = this.selectedItems[i].name;
        var itemImg = this.selectedItems[i].image;
        var itemQty = this.selectedItems[i].qty;
        var itemPrice = this.selectedItems[i].price.display * itemQty;
        var itemDiscount = (this.selectedItems[i].price.display - this.selectedItems[i].price.actual) * itemQty;
        totalprice = totalprice + itemPrice * 1;
        totalDiscount = totalDiscount + itemDiscount * 1;
        item += "\n            <tr>\n                <td valign=\"middle\">\n                <img class=\"itemImg\" src=\"".concat(itemImg, "\" alt=\"Image not available\" />\n                ").concat(this.selectedItems[i].name, "\n                </td>\n                <td class=\"input\">\n                    <button type=\"\" onclick=\"decrease(event,").concat(i, ")\" class=\"decrease\"> - </button>\n                    <input class=\"qty\" type=\"number\" value=\"").concat(this.selectedItems[i].qty, "\"  size=\"2\" />                    \n                    <button type=\"\" onclick=\"increase(event,").concat(i, ")\" class=\"increase\"> + </button>\n                </td>\n                <td>$").concat(itemPrice, "</td>\n            </tr>");
      }

      return "\n            <table class=\"itemListTable\">\n                <thead>\n                    <tr>\n                        <th>Item</th>\n                        <th>Qty</th>\n                        <th>Price</th>\n                    </tr>\n                </thead>\n                <tbody>" + item + "\n                </tbody>\n            </table>\n            <table class=\"amountDetails\">\n                <thead>\n                    <tr>\n                        <th>Total</th>\n                        <th></th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>Items ( ".concat(selectedItem.length, " )</td>\n                        <td>:</td>\n                        <td>$") + totalprice + "</td>\n                    </tr>\n                    <tr>\n                        <td>Discount</td>\n                        <td>:</td>\n                        <td>$" + totalDiscount + "</td>\n                    </tr>\n                    <tr>\n                        <td>Type discount</td>\n                        <td>:</td>\n                        <td>$0</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <th>Order Total</th>\n                        <th>:</th>\n                        <th>$" + (totalprice - totalDiscount) + "</th>\n                    </tr>\n                </tfoot>\n            </table>\n        ";
    }
  }]);

  return cartDetails;
}();

var updateCartDetails = function updateCartDetails() {
  var cartDetailsComponent = new cartDetails(selectedItem);
  document.querySelector('#cartDetails').innerHTML = cartDetailsComponent.render();
};

var decrease = function decrease(event, index) {
  var qty = selectedItem[index].qty;

  if (qty > 1) {
    selectedItem[index].qty = qty - 1 * 1;
  } else if (qty == 1) {
    selectedItem.splice(index, 1);
    var totalItems = document.querySelectorAll('.totalItems');

    for (var i = 0; i < totalItems.length; i++) {
      console.log(totalItems[i]);
      totalItems[i].innerHTML = selectedItem.length;
    }
  }

  updateCartDetails();
};

var increase = function increase(event, index) {
  selectedItem[index].qty = selectedItem[index].qty + 1 * 1;
  updateCartDetails();
};

updateCartDetails();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return "\n    \t<div class=\"header\">\n      \t<div class=\"\">\n      \t\t<h2>All items</h2>\n         </div>\n         <div class=\"itemCount\">\n         \t<span class=\"itemDetails\"><span class=\"totalItems\">0</span> items added to cart</span>\n\t\t </div>\n\t\t <div class=\"mobileCart\" onclick=\"toggleCartDetails()\">\n\t\t \t<img src=\"assets/cartIcon.png\" alt=\"Cart Icon\" /> <span class=\"totalItems\">0</span>\n\t\t </div>\n      </div>\n    ";
    }
  }]);

  return Header;
}();

var headerComponent = new Header();
document.querySelector('#header').innerHTML = headerComponent.render();

var toggleCartDetails = function toggleCartDetails() {
  var element = document.getElementById('cartDetails');
  var opened = element.classList.contains("opened");

  if (opened) {
    element.style.right = "-100%";
    element.classList.remove('opened');
  } else {
    element.style.right = 0;
    element.classList.add('opened');
  }
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var itemList = [];

var Product = /*#__PURE__*/function () {
  function Product(props) {
    _classCallCheck(this, Product);

    this.data = props;
    itemList = props;
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      var productHtml = '';
      console.log(this.data);

      for (var i = 0; i < this.data.length; i++) {
        productHtml += "\n            <div class=\"product\">\n                <div class=\"discountSection\">\n                ".concat(this.data[i].discount, "% <b>off</b>\n                </div>\n                <div class=\"imageSection\">\n                    <div class=\"imageContainer\">\n                        <img src=\"").concat(this.data[i].image, "\" alt=\"BOOK COVER NOT AVAILABLE\" />\n                    </div>\n                </div>\n                <div class=\"infoSection\">\n                    <p>").concat(this.data[i].name, "</p>\n                    <div class=\"info\">\n                        <div class=\"price\">\n                            <span class=\"actual\">$").concat(this.data[i].price.display, "</span>\n                            <span class=\"display\">$").concat(this.data[i].price.actual, "</span>\n                        </div>\n                        <div class=\"button\">\n                            <button type=\"button\" onclick = \"addToCart(").concat(i, ")\">Add to cart</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
      }

      return productHtml;
    }
  }]);

  return Product;
}();

var productsComponent = new Product(cartData.items);
document.querySelector('#products').innerHTML = productsComponent.render();

function addToCart(index) {
  var item = itemList[index];
  var obj = selectedItem.find(function (o) {
    return o.index === index;
  });

  if (obj) {
    obj.qty = obj.qty + 1 * 1;
  } else {
    item.index = index;
    item.qty = 1;
    selectedItem.push(item);
  }

  var totalItems = document.querySelectorAll('.totalItems');
  console.log(totalItems);

  for (var i = 0; i < totalItems.length; i++) {
    console.log(totalItems[i]);
    totalItems[i].innerHTML = selectedItem.length;
  }

  var cartDetailsComponent = new cartDetails(selectedItem);
  document.querySelector('#cartDetails').innerHTML = cartDetailsComponent.render();
}