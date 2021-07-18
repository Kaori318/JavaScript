const basket = [
   ['Яблоко', 10, 5],
   ['Банан', 20, 2],
   ['Апельсин', 30, 1],
];

function countBasketPrise(basket) {
   let totalPrise = 0;
   for (let i = 0; i < basket.length; i++) {
      totalPrise += basket[i][1] * basket[i][2];
   }
    return totalPrise;
}

console.log(countBasketPrise(basket));
