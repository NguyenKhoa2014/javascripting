var conditionalSum = function(values, condition) {
    // Your code here
    var totalEven = 0;
    var totalOdd = 0;
    if (values.length > 0) {
        if (condition == 'even'){
          for(var index = 0; index < values.length; index++){
              if (values[index] % 2 === 0){
                  totalEven += values[index];
                   
              }
          }
          return totalEven;

        } else if ( condition == 'odd'){
            for(var index = 0; index < values.length; index++){
                if (values[index] % 2 != 0){
                    totalOdd += values[index];
                }
            }
            return totalOdd;
        }
    } else {
        return 0;
    }
    
 
  };

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));