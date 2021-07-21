const classes = ["HTML", "CSS", "JavaScript"];

const student = {
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
    const Lamp = {
        On : 0, 
        Off : 1,
    }

//question 2
    const Gender = {
      Male : "MALE",
      Female : "FEMALE",
      NonBinary : "NON BINARY",
    }
    
//question 3    
    for(let i=0; i< classes.length; i++){
        console.log(classes[i]);
    }
    
    for (let class1 of classes){
        console.log(class1);
    } 
    
    for( let i in classes){
        console.log(classes[i]);
    }
    
    classes.forEach(class1 => console.log(class1) );
    
    
//question 4
    for( let data in student) {
        console.log("The student's" + data + " is " + student[data]);
    }
    
    for (const [key,value] of Object.entries(student) ){
        console.log( "The student's " + key + " is " + value); 
    }
    
    Object.entries(student).forEach( ([key, value]) => console.log( "The student's " + key + " is " + value));

    for (i=0; i< Object.entries(student).length; i++) {
        console.log("The students's " + (Object.entries(student)[i])[0] + " is " + (Object.entries(student)[i])[1]);
    }