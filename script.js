class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    study() {
        logMessage(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        logMessage(`${this.name} is teaching`);
    }
}

// Helper function to log to the page
function logMessage(message) {
    const output = document.getElementById('output');
    if (output) {
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
    }
    console.log(message); // also log to the console
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Example usage to show it works
const person = new Person("John", 25);
logMessage(`Name: ${person.name}`);
person.age = 30;
logMessage(`Updated Age: ${person.age}`);

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();