'use strict'
const card = {
   cardBlock: document.querySelector('.card'),
   goods: [ {
      id_product: 76,
      product_name: 'Диван',
      price: 10000,
      quantity: 1,
   },
   {
      id_product: 83,
      product_name: 'Шкаф',
      price: 8000,
      quantity: 1,
   },
   {
      id_product: 423,
      product_name: 'Кресло',
      price: 4000,
      quantity: 2,
   }, 
],
init() {
   this.render();
},
render() {
   if(this.goods.length){
this.cardBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товара на сумму ${this.countBasketPrice()} рублей`);
   }
   else{
      this.cardBlock.insertAdjacentHTML('beforeend', `Корзина пуста`);
   }
},
countBasketPrice() {
   return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0)
},
}
window.addEventListener('load',card.init()) 