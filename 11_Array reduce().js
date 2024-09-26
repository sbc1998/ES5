
const string= ["I am", "learning", "ES5"];

function display(accumulator,item) {
    return accumulator + " " + item;
}

const result= string.reduce(display);
console.log(result);

//with arrow function
const num= [20,40,112,35];

const sum= num.reduce( (total,item)=> total+item );
console.log(sum);
