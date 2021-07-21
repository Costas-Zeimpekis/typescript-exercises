
// ex 1 
enum WifiLamp {
  on,
  off
}

// ex2
enum Students {
  male = 'male',
  female = 'female',
  nonBinary = 'non-binary'
}

// ex3 
const classes = ["HTML", "CSS", "JavaScript"];


for(let i= 0; i< classes.length; i++){
  console.log(classes[i]);
}

for(let item in classes){
  console.log(classes[item]);
}

for(let class1 of classes) {
  console.log(class1);
}

classes.forEach((item)=> console.log(item));

// ex4
interface Student {
  address: string;
  age: number;
  avgGrade: number;
  city: string;
  email: string;
  id: number;
  firstName: string;
  lastName: string;
}


const student: Student= {
  address: "Neverland 2",
  age: 50,
  avgGrade: 20,
  city: "Atlantis",
  email: "nobody@gmail.com",
  id: 12345,
  firstName: "Tasos",
  lastName: "Matatakis"
};

for(let details in student) {
  console.log(`the student ${details} is ${student[details]}`);
}

for(const [key, value] of Object.entries(student)){
  console.log(`The student ${key} is ${value}`);
}

Object.entries(student).forEach(([key, value])=> console.log(`The student ${key} i ${value}`));

for (const value of Object.values(student)) {
  console.log(`The student ${Object.values(student[value])} is ${value}`);
 }
