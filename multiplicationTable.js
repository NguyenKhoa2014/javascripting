 function multiplicationTable(input){
   if (input > 0){
    var aRow ="";
     for (var row = 1; row <= input; row++){
        
       for ( var column = 1; column <= input; column++){
            aRow = aRow + (column * row) + ",";
             
       }
       aRow = aRow + '\n';
        
     }
   }
   return aRow;
 }

 //console.log(multiplicationTable(1));
console.log(multiplicationTable(5));