const catalog = {
   catalogBlock: null,
   cart: null,
   list: [ {
      id_product: 76,
      img:'sofa.png',
      product_name: 'Диван',
      price: 10000,
   },
   {
      id_product: 83,
      img:'closet.jpg',
      product_name: 'Шкаф',
      price: 8000,
   },
   {
      id_product: 423,
      img:'armchair.jpg',
      product_name: 'Кресло',
      price: 4000,
   }, 
],
init(catalogBlockClass, cart) {
   this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
   this.cart = cart;
   this.render();
   this.addEventHandlers();
},
render() {
   if(this.list.length){
      this.renderCatalogList();
   } else {
      this.renderCatalogEmpty();
   }
},
renderCatalogList(){
   this.catalogBlock.innerHTML = '';
   this.list.forEach(item => {
      this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
   });
},
renderCatalogItem(item){
   return `<article class="card">
      <div class="card__img">
      <img src="img/${item.img}">
      </div>
      <div class="card__text">
         <h3>${item.product_name}</h3>
         <p>${item.price} рублей</p>
         <button class="аdd_to_cart" data-id-product="${item.id_product}">Купить</button>
      </div>
   </article>`
},
renderCatalogEmpty(){
   this.catalogBlock.innerHTML = '';
   this.catalogBlock.textContent = 'Каталог товаров пуст';
},
addEventHandlers(){
   this.catalogBlock.addEventListener('click', event => this.addToCart(event));
},
addToCart(event){
   if(event.target.classList.contains('аdd_to_cart')){
      const id_product = event.target.dataset.idProduct;
      console.log(id_product)
      const productToAdd = this.list.find((product) => product.id_product == id_product);
      this.cart.addToCart(productToAdd);
      console.log(productToAdd);
   }
},
}

const cart = {
   cartBlock: null,
   goods: [
      {
      id_product: 423,
      product_name: 'Кресло',
      price: 4000,
      quantity: 2,
   },
   ],
init(cartBlockClass) {
   this.cartBlock = document.querySelector(`.${cartBlockClass}`);
   this.render();
},
render() {
   if(this.goods.length){
     this.renderCartList();
   } 
   else {
      this.cartBlock.insertAdjacentHTML('beforeend', `Корзина пуста`);
   }
},
renderCartList(){
   this.cartBlock.innerHTML = '';
   this.goods.forEach(item => {
      this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
   });

   this.cartBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} вида товара на сумму ${this.countBasketPrice()}  рублей`);
},
renderCartItem(item){
return   `<div class="cart__item">
       <h3>${item.product_name}</h3>
         <p>${item.price} рублей</p>
       <p>Количество: ${item.quantity}</p>
        </div>`
},
countBasketPrice() {
  return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0)
},
addToCart(product){
  if(product){
     console.log('1');
     const findInCart = this.goods.find((item) => product.id_product == item.id_product);
     if (findInCart) {;
findInCart.quantity++;
      } else{this.goods.push({...product, quantity:1});}
      this.render();
    }
    
},
}

catalog.init('catalog', cart);
cart.init('cart');