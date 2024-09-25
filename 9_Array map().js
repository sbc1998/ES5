// Array map()

const arr= [10,20,30,40,50];
const result= arr.map(display);

function display(item) {
    return item*2;
}

console.log(result);

//map() for object elements

const employees=[
    {name:"Adam", salary: 25000, bonus: 5000},
    {name:"David", salary: 35000, bonus: 8000},
    {name:"Alan", salary: 40000, bonus: 10000},
    ];
    
//to update the salary for each employee    
const calculateSalary= (obj)=> {
    newObj= {};
    newObj.name= obj.name;
    newObj.salary= obj.salary + obj.bonus;
    return newObj;
}

const totalSalary= employees.map(calculateSalary);
console.log(totalSalary); //returns updated array of object

//to display the updated object 
console.log("Updated Salary:")
totalSalary.forEach( (item,index) => {
    const{name,salary}= totalSalary[index];
    console.log("Name: "+ name + ", Salary: "+ "Rs " + salary);
})
