 
interface Student {
    address?: string;
    age?: number;
    avgGrade?: number;
    city?: string;
    email: string;
    id?: number;
    firstName: string;
    lastName: string;
}

let classes1 = ["HTML", "CSS", "JavaScript"];

let student1: Student = {
  address: "Neverland 2",
  age: 50,
  avgGrade: 20,
  city: "Atlantis",
  email: "nobody@gmail.com",
  id: 12345,
  firstName: "Tasos",
  lastName: "Matatakis"
};

//question 1
    enum Lamp1 {
        On , 
        Off,
    }

//question 2
    const Gender1 = {
      Male : "MALE",
      Female : "FEMALE",
      NonBinary : "NON BINARY",
    }
    
//question 3    
    for(let i=0; i< classes1.length; i++){
        console.log(classes1[i]);
    }
    
    for (let class1 of classes1){
        console.log(class1);
    } 
    
    for( let i in classes1){
        console.log(classes1[i]);
    }
    
    classes1.forEach(class1 => console.log(class1) );
    
    
//question 4
    const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];
    for( let data in student1) {
        let getValue = getKeyValue<keyof Student, Student>(data as keyof Student)(student1);
        console.log("The student's " + data + " is " + getValue);
    }
    
    for (const [key,value] of Object.entries(student1) ){
        console.log( "The student's " + key + " is " + value); 
    }
    
    Object.entries(student1).forEach( ([key, value]) => console.log( "The student's " + key + " is " + value));

    for (let i=0; i< Object.entries(student1).length; i++) {
        console.log("The students's " + (Object.entries(student1)[i])[0] + " is " + (Object.entries(student1)[i])[1]);
    }