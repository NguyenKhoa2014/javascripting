function merge(arr1, arr2){
    var validArr1 = false;
    var validArr2 = false;
    var arr3 = [];
    if (arr1.length> 0){
        validArr1 = true;
        for (var index =0; index < arr1.length; index++){
            arr3.push(arr1[index]);
        }
    }  

    if (arr2.length > 0){
        return validArr2 = true;
        for (var index =0; index < arr2.length; index++){
            arr3.push(arr2[index]);
        }
    }  
    arr3.sort();

    return arr3;
    
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);