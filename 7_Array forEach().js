// Array forEach()

let students= ["Sarah", "Forest", "Rebecca"];

students.forEach(display);

function display(item) {
    console.log(item);
}

// Updating the Array Elements

students.forEach(update);

function update(item, index, arr) {
    arr[index]= "Hello " + item;
}

console.log(students);
