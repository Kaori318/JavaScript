function mathOperation(arg1, arg2, operation){
   switch (operation) {
      case 'сумма': 
      case 'сложение': 
      case '+':
         alert('При сложении ' + a + ' и ' + b + ' сумма равна ' + sum(a, b));
      break;
      case 'вычитание': 
      case '-': 
      case'разность':
         alert('При вычитании из ' + a + ' ' + b + ' разность  равна ' + subtraction(a, b));
      break;
      case 'умножение':
      case '*':
         alert('При умножении ' + a + ' на ' + b + ' произведение равно ' + multiplication(a, b));
      break;
      case 'деление': 
      case '/':
      case ':':
         alert('При делении ' + a + ' на ' + b + ' частное равно ' + division(a, b));
      break;
      default: 
      alert('Не возможно посчитать. Возможно где-то ошибка');
   }
}

let a = parseInt(prompt('Задание 6. \n\nПервое число'));
let b = parseInt(prompt('Второе число'));
let operation =prompt('Выберете операцию (Сложение, Вычитание, Умножение, Деление)');
operation = operation.toLowerCase();
mathOperation (a, b, operation);

