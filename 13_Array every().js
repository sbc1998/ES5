
const salary= [35000,40000,38000,60000,50000];

const checkSalary= salary.every( item=> item>30000 );

console.log(checkSalary);

if(checkSalary==true){
    console.log("Well paid!");
}
else{
    console.log("Fairly paid!");
}
