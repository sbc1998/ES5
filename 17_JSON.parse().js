
const info= '{"name": "Martin", "age": 25, "country": "Netherlands"}';

const obj= JSON.parse(info);
console.log(obj.name);
console.log(obj.age)
console.log(obj.country);

const car= '["ford", "jeep", "hyundai"]';
const arr= JSON.parse(car);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

