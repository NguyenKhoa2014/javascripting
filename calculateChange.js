var calculateChange = function(total, cash) {
// Your code here
var twentyBill = 0;
var tenBill = 0;
var fiveBill = 0;
var twoBill = 0;
var oneBill = 0;
var quarter = 0;
var dime = 0;
var nickel = 0;
var penny = 0;
 
var remain = cash - total;
//dollar part
var leftPart = remain / 100;
leftPart = leftPart.toString().split('.');
//penny part
var rightPart = remain % 100;
// var moneyParts = remain.toString().split('.');
calculateDollar(leftPart[0]);
return ('test')
//console.log('left part is:' + leftPart[0]);
//console.log('right part is:' + rightPart)
};
function calculateDollar(input){
    console.log('input is ' + input);
     
  var leftOver = input;
  var tenBill = 0;
  var strTwenty = "";
  var strTen = "";
  var strFive = "";
  var strTwo = "";
  var strOne = "";
  var fiveBill = 0;
  var twoBill = 0;
  var oneBill = 0;
  var final = "";
  var count = 0;
    while (leftOver >= 1) {

        if (leftOver >= 20) {
            twentyBill = leftOver / 20;
            twentyBill = twentyBill.toString().split('.');
            twentyBill = twentyBill[0]; 
            leftOver = leftOver  - twentyBill * 20; 
            strTwenty +=  twentyBill +' twenty';
            console.log('in twenty string is: ' + strTwenty );
        } else if (leftOver >= 10){
            tenBill = leftOver / 10;
            tenBill = tenBill.toString().split('.');
            tenBill = tenBill[0];
            //console.log('how many ten: ' + tenBill);
            leftOver = leftOver % 10;
            strTen += tenBill + ' ten';
            console.log('in 10, string is ' + strTen);
        } else if (leftOver >= 5) {
            fiveBill = leftOver / 5;
            fiveBill = fiveBill.toString().split('.');
            fiveBill = fiveBill[0];
            //console.log('how many five: ' + fiveBill);
            leftOver = leftOver  - fiveBill * 5;
            strFive += fiveBill + ' five';
            console.log(' in 5, string is: ' + strFive);
        } else if (leftOver >= 2){
            twoBill = leftOver / 2;
            twoBill = twoBill.toString().split('.');
            twoBill = twoBill[0];
            //console.log('how many two: ' + twoBill);
            leftOver = leftOver % 2;
            strTwo += twoBill + ' two ';
            console.log(' in 2, string is: ' + strTwo);
        } else if (leftOver == 1) {
            oneBill = 1;
            //console.log('how many one: ' + oneBill);
            strOne += oneBill + '  one';
            leftOver = 0;
        } else {
            console.log('got here ')
        }
        console.log('left over is ' + leftOver);
        //count++;
        final = strTwenty + ', ' + strTen +  ', ' +  strFive +  ', ' + strTwo  + ', '  + strOne;
    }
    console.log('final string when done ' + final)
    return final;
}
//calculateDollar(50);
//console.log(calculateChange(150, 5000));
//console.log(calculateChange(1787, 2000));
 console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));