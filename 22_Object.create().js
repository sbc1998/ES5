let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
  display() {
    console.log("Name:", this.name);
  }
};

// create object from Student prototype
let std1 = Object.create(Student);
let std2 = Object.create(Student);

std1.name = "Ashley";
std1.display();

