
const string= ["Javascript", "love", "I"];

const result= string.reduceRight( (accumulator,item)=> accumulator+ " " + item );
console.log(result);
