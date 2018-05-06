var camelCase = function(input) {
  // Your code here
   
  var words = input.split(' ');
  var sentence = '';
  for(index = 0; index < words.length ; index++){
     words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1);
     sentence += words[index];
  }
  return sentence;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));