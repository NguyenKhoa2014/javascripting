function range(start, end, step){
    var myArray = [];
    if (start > end ){
        console.log('start is bigger than end');
        return myArray;
    }
    if (step < 0){
        console.log('step is negavtive');
        return myArray;
    }
    for (var index = start; index <= end; index +=step) {
        myArray.push(index);
         
    }
    return myArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));