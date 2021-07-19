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

//  ex 1 
  function fetchStudentData():Partial<Student>{
      return {
        avgGrade: 20,
        id: 12345,
        firstName: "Tasos",
        lastName: "Matatakis"   
      }
    }


// ex 2
function sendStudentData(): Required<Student> {
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


// ex 3

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


//  ex 4 
interface StudentNames {
    firstName: string,
    lastName: string
};

type StudentClass = string | number;

const students: Record<StudentClass, StudentNames> = {
    12  :{firstName: 'geo', lastName:'geo'},
    'A12' :{firstName: 'geo', lastName:'geo'}
};

// ex 5
type studentPick = Pick<Student, 'firstName' | 'lastName' | 'id'>;

// ex 6

type studentOmit = Omit<Student, 'avgGrade'>;


// ex 7
type Teams = "Olympiakos" | "Panathinaikos" | "AEK" | "Aris" | "PAOK";

type teamsChoose = Extract<Teams, 'AEK' | 'PAOK'>

// ex 8
type teamsBetween = Exclude<Teams, 'Aris' | 'Olympiakos' | 'Panathinaikos'>