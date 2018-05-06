var talkingCalendar = function(date) {
    // Your code here
    var datePart = date.split('/');
    var dayPart = datePart[2];
    var monthPart = datePart[1]; 
    var yearPart = datePart[0];
    //console.log( 'day:'+ dayPart + '| month:'+ monthPart + '|year:'+ yearPart);
    return getMonth(monthPart) + ' ' + formatDay(dayPart) + yearPart;
     
   
  };
  
  function getMonth(monthPart){
    var monthStr = '';  
    if (monthPart == 1){
        monthStr = 'January';
    } else if (monthPart == 2){
        monthStr = 'February';
    } else if (monthPart == 3){
        monthStr = 'March';
    } else if (monthPart == 4){
        monthStr = 'April';
    } else if (monthPart == 5){
        monthStr = 'May';
    }  else if (monthPart == 6){
        monthStr = 'June';
    } else if (monthPart == 7){
        monthStr = 'July';
    } else if (monthPart == 8){
        monthStr = 'August';
    } else if (monthPart == 9){
        monthStr = 'September';
    } else if (monthPart == 10){
        monthStr = 'October';
    } else if (monthPart == 11){
        monthStr = 'November';
    } else if (monthPart == 12){
        monthStr = 'December';
    } else {
        monthStr = 'Invalid';
    }
    return monthStr;
  }
  function formatDay(dayPart){
      var ordinalIndicatior = '';
      if (dayPart == 01 || dayPart == 21 || dayPart == 31){
        ordinalIndicatior =  'st';
      } else if (dayPart == 02 || dayPart == 22) {
        ordinalIndicatior =  'nd';
      } else if (dayPart == 03 || dayPart == 23) {
        ordinalIndicatior =  'rd';
      } else {
          ordinalIndicatior = 'th';
      }
      dayPart = dayPart + ordinalIndicatior + ',';
      return dayPart;
  }
 console.log(talkingCalendar("2017/12/02"));
 console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/23"));