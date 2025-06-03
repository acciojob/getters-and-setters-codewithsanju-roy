//complete this code
class Person {
	constructor(name, age){
		this.name = name;
			this.age = age;
	}
	get name(){
		return this.name;
	}
	set age(){
		return this.age;
		
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is student studying`)
	}
}

class Teacher extends Person {
	tech(){
		console.log(`${this.name} is teacher is teching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
