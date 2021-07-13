function power (wal, row){
 if(row != 1) {
    return wal *= power (wal, row - 1);
   } 
    else
      return wal;
}
let a = 5;
let b = 2;
alert(a + ' в степени ' + b + ' равно ' + power (a, b));