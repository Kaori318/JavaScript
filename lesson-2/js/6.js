function mathOperation(arg1, arg2, operation){
   switch (operation) {
      case 'сумма': 
      case 'сложение': 
      case '+':
         return sum(a, b);
      case 'вычитание': 
      case '-': 
      case'разность':
         return subtraction(a, b);
      case 'умножение':
      case '*':
         return multiplication(a, b);
      case 'деление': 
      case '/':
      case ':':
         return division(a, b);
      default: 
      alert('Ошибка');
   }
}

let a = parseInt(prompt('Задание 6. \n\nПервое число'));
let b = parseInt(prompt('Второе число'));
let operation =prompt('Выберете операцию (Сложение, Вычитание, Умножение, Деление)');
operation = operation.toLowerCase();
console.log (mathOperation (a, b, operation));

