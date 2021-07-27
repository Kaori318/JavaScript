'use strict'
 const chess = {
   block: document.getElementById('chess'),
   init(){
      this.renderMap();
   },
   renderMap() {
      const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
      const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];
      for(let row = 0; row < rows.length; row++) {
         const tr = document.createElement('tr');
         this.block.appendChild(tr);
         for(let col = 0; col < cols.length; col++) {
            const td = document.createElement('td');
            //td.dataset.row = row.toString();
            //td.dataset.col = col.toString();
            tr.appendChild(td);
           
            if(rows[row] === 0 && cols[col] !== 0){
               td.innerHTML = cols[col];
            }
             else if(rows[row] !== 0 && cols[col] === 0){
               td.innerHTML = rows[row];
            };

            if(rows[row] !== 0 && cols[col] !== 0){
          if(row % 2 === 0 && col % 2 !== 0 || row % 2 !== 0 && col % 2 === 0){
                  td.style.background = 'rgb(71, 57, 38)';
               } 
            }
         }
      }
   }
}
window.addEventListener('load',chess.init())      