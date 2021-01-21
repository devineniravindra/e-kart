var selectedItem = [];

class cartDetails {
    constructor (props) {
        this.selectedItems = props;
    };

    render() {

        var item = '';
        var totalprice = 0;
        var totalDiscount = 0;

        for(let i=0;i<this.selectedItems.length;i++) {
            let itemName = this.selectedItems[i].name;
            let itemImg = this.selectedItems[i].image;
            let itemQty = this.selectedItems[i].qty;
            let itemPrice =  this.selectedItems[i].price.display*itemQty;
            let itemDiscount = (this.selectedItems[i].price.display - this.selectedItems[i].price.actual)*itemQty;

            totalprice = totalprice + itemPrice*1;
            totalDiscount = totalDiscount + itemDiscount*1;
            
            item+=`
            <tr>
                <td valign="middle">
                <img class="itemImg" src="${itemImg}" alt="Image not available" />
                ${this.selectedItems[i].name}
                </td>
                <td class="input">
                    <button type="" onclick="decrease(event,${i})" class="decrease"> - </button>
                    <input class="qty" type="number" value="${this.selectedItems[i].qty}"  size="2" />                    
                    <button type="" onclick="increase(event,${i})" class="increase"> + </button>
                </td>
                <td>$${itemPrice}</td>
            </tr>`;
        }

        return `
            <table class="itemListTable">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>`+item+`
                </tbody>
            </table>
            <table class="amountDetails">
                <thead>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Items ( ${selectedItem.length} )</td>
                        <td>:</td>
                        <td>$`+totalprice+`</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>:</td>
                        <td>$`+totalDiscount+`</td>
                    </tr>
                    <tr>
                        <td>Type discount</td>
                        <td>:</td>
                        <td>$0</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Order Total</th>
                        <th>:</th>
                        <th>$`+(totalprice - totalDiscount)+`</th>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}


var updateCartDetails = () => {
    let cartDetailsComponent = new cartDetails(selectedItem);
    document.querySelector('#cartDetails').innerHTML = cartDetailsComponent.render();
}
var decrease = (event,index) => {
    let qty = selectedItem[index].qty;
    if(qty > 1){
        selectedItem[index].qty = qty - 1*1;
    } else if(qty == 1) {
        selectedItem.splice(index, 1);        
        var totalItems = document.querySelectorAll('.totalItems');
        for(let i=0;i<totalItems.length;i++) {
            console.log(totalItems[i]);
            totalItems[i].innerHTML = selectedItem.length;
        }
    }
    
    updateCartDetails();
}
var increase = (event,index) => {
    selectedItem[index].qty = selectedItem[index].qty + 1*1;
    updateCartDetails();
}

updateCartDetails();