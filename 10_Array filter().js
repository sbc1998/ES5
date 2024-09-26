
const age= [20,25,16,28,23];

function display(item) {
    return item>18;
}

const filteredAge= age.filter(display)
console.log(filteredAge);

//with arrow function
const num= [20,13,6,9,15];

const evenNumber= num.filter( num=> num%2==0 );
console.log(evenNumber);
