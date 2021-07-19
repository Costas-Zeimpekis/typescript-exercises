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
  
 
  
  type Teams = "Olympaikos" | "Panathinaikow" | "AEK" | "Aris" | "PAOK";

  //question 1

  //question 2 

  //question 3
    function getStudentData(): Readonly<Student> {
        return {
        address: "Neverland 2",
        age: 50,
        avgGrade: 20,
        city: "Atlantis",
        email: "nobody@gmail.com",
        id: 12345,
        firstName: "Tasos",
        lastName: "Matatakis"
        };
    }

  //question 4
    //type of classes
    type StudentsClass = string | number ; 
    // interface for students
    interface Students {  
        name: string;
    }
    type School = Record<StudentsClass,Students>;
  //question 5
    type Student2 = Pick <Student, "firstName" | "lastName" | "id" > ;
  //question 6
    type Student3 = Omit <Student , "avgGrade" >;
  //question 7
    type FilteredTeams1 = Extract<Teams, "PAOK" | "AEK">;
  //question 8
    type FilteredTeams2 = Exclude<Teams, "PAOK" | "AEK">;

  