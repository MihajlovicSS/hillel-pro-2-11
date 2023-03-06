class Student {
    constructor(name, marks) {
      this.name = name
      this.marks = marks
    }   
    getMarksSum() {
        let result = 0
        for(let i = 0; i < this.marks.length; i++){
            result += this.marks[i]
        }
        return result
    }
    getAverageMark() {
      return this.getMarksSum()/this.marks.length
    } 
}  
class Group {
    #students
    constructor(){
        this.#students = [];
    }
    // set students (value){
    //     console.error('Error!');
    // }
    get students(){
        return this.#students;
    }
    #isStudent(student) {
        return student instanceof Student
    } 
    addStudent(student) {
        if(this.#isStudent(student)) this.#students.push(student)
    }
    getAverageMarksSum() {
        return this.#students.reduce((sum, current) => {
            return sum + current.getAverageMark();
        }, 0)
    }
    getAverageMark() {
        return this.getAverageMarksSum()/this.#students.length

    } 
}

const group = new Group();  
group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
console.log(group.students.length === 3);
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3);
  
// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);
console.log(group)
group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);
console.log(group)