
var itemList = [];
class Product {
	constructor(props) {
        this.data = props;
        itemList = props;
  }
  
  render() {
      var productHtml = '';
      console.log(this.data);
      for(let i=0;i<this.data.length;i++) {
        productHtml+= `
            <div class="product">
                <div class="discountSection">
                ${this.data[i].discount}% <b>off</b>
                </div>
                <div class="imageSection">
                    <div class="imageContainer">
                        <img src="${this.data[i].image}" alt="BOOK COVER NOT AVAILABLE" />
                    </div>
                </div>
                <div class="infoSection">
                    <p>${this.data[i].name}</p>
                    <div class="info">
                        <div class="price">
                            <span class="actual">$${this.data[i].price.display}</span>
                            <span class="display">$${this.data[i].price.actual}</span>
                        </div>
                        <div class="button">
                            <button type="button" onclick = "addToCart(${i})">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
      }
      return productHtml;
  }
}

var productsComponent = new Product(cartData.items);

document.querySelector('#products').innerHTML = productsComponent.render();

function  addToCart(index) {
    let item = itemList[index];
    let obj = selectedItem.find(o => o.index === index);
    if(obj){
        obj.qty = obj.qty + 1*1;
    }else{
        item.index = index;
        item.qty = 1;
        selectedItem.push(item);
    }    

    var totalItems = document.querySelectorAll('.totalItems');
    console.log(totalItems);
    for(let i=0;i<totalItems.length;i++) {
        console.log(totalItems[i]);
        totalItems[i].innerHTML = selectedItem.length;
    }

    var cartDetailsComponent = new cartDetails(selectedItem);
    document.querySelector('#cartDetails').innerHTML = cartDetailsComponent.render();
}
