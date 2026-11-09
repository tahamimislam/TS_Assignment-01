
const multiplyValue = (value:number, multiplier?:number):number=>{

  if (multiplier !==undefined){
     return value*multiplier
  } else {
    return value*2
  }
}



const processInput =(value:string|number|boolean):string|number=>{
  
  if(typeof value === "string"){

    return value.trim().toLowerCase()

  }else if(typeof value === "number") {

    return value*10;

  }else{

    if (value) {
      return "Active"
    }else {
      return "Inactive"
    }
  }
}



const formatCoordinate =(coordinate: readonly [number, number, string]):string=>{

  const [latitude, longitude, locationName]=coordinate

  return `Location: ${locationName} (${latitude}, ${longitude})`
}



const concatenateArrays = <T>(...arrays: T[][]): T[]=>{

  const combined: T[] = []

  for (const arr of arrays) {

    for (const val of arr) {
      combined.push(val)
    }

  }
  return combined
}



interface Course {
  title: string
  students: number
  isPublished: boolean
}

const getPopularCourses = (courses:Course[], minStudents:number):Course[] =>{
  const popularCourses:Course[] = []

  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents){
      popularCourses.push(course)
    }
  }

  return popularCourses
}



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const values: T[K][] = []

  for (const item of items){
    values.push(item[key])
  }

  return values
}



class Employee {
  protected name:string
  private baseSalary: number

  constructor(name:string, baseSalary:number) {
    this.name = name
    this.baseSalary = baseSalary
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}


class Manager extends Employee{
  private department:string

  constructor(name:string, baseSalary: number, department:string) {
    super(name, baseSalary)
    this.department = department
  }

  public getRoleInfo():string {
    return `Manager of ${this.department}: ${this.name}`
  }
}



const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject): void => {

    if (age >= 18) {

      setTimeout(()=>{
        resolve("Access Granted")
      }, 1000)

    } else {
      reject(new Error("Access Denied: Must be 18 or older"))
    }

  })
}