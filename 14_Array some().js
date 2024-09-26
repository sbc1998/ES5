
const salary= [28000,25000,38000,40000,26000];

const checkSalary= salary.some( item=> item>30000 );

console.log(checkSalary);

if(checkSalary==true){
    console.log("Fairly paid!");
}
