class Header {
	constructor() {}

	render() {
  	return `
    	<div class="header">
      	<div>
      		<h2>All items</h2>
         </div>
         <div>
         	<span class="itemDetails"><span class="totalItems">0</span> items added to cart</span>
         </div>
      </div>
    `;
  }
}

var headerComponent = new Header();

document.querySelector('#header').innerHTML = headerComponent.render();