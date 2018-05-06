var data = [[0,3],[1,5]]
var repeatNumbers = function(data){
    data.forEach(element => {
        for(index=0; index < element[1] ; index++){
            console.log(element[0]);
        }
    });
}
repeatNumbers(data);