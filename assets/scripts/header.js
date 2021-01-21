class Header {
	constructor() {}

	render() {
  	return `
    	<div class="header">
      	<div class="">
      		<h2>All items</h2>
         </div>
         <div class="itemCount">
         	<span class="itemDetails"><span class="totalItems">0</span> items added to cart</span>
		 </div>
		 <div class="mobileCart" onclick="toggleCartDetails()">
		 	<img src="assets/cartIcon.png" alt="Cart Icon" /> <span class="totalItems">0</span>
		 </div>
      </div>
    `;
  }
}

var headerComponent = new Header();

document.querySelector('#header').innerHTML = headerComponent.render();

var toggleCartDetails = () => {
	let element = document.getElementById('cartDetails');
	let opened = element.classList.contains("opened");
	if(opened) {
		element.style.right = "-100%";
		element.classList.remove('opened');
	} else {
		element.style.right = 0;
		element.classList.add('opened');
	}
}