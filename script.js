class Student {
  constructor(firstName, lastName, birtheYears, grads = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birtheYears = birtheYears;
    this.grads = grads;
    this.atten = new Array(25).fill(null);
    this.currentIndex = 0;
  }

  getAge() {
    const current = new Date().getFullYear();
    return current - this.birtheYears;
  }

  getAverageGrade() {
    if (this.grads.length === 0) return 0;
    const suma = this.grads.reduce((acc, grade) => acc + grade, 0);
    return suma / this.grads.length;
  }

  present() {
    if (this.currentIndex < this.atten.length) {
      this.atten[this.currentIndex] = true;
      this.currentIndex++;
    } else {
      console.log(
        "Неможливо відзначити більше відвідуваності, тому що масив заповнений"
      );
    }
  }

  absent() {
    if (this.currentIndex < this.atten.length) {
      this.atten[this.currentIndex] = false;
      this.currentIndex++;
    } else {
      console.log(
        "Неможливо відзначити більше відвідуваності, тому що масив заповнений"
      );
    }
  }

  getAttendanceRate() {
    const attendedClas = this.atten.filter((att) => att === true).length;
    const totalClasses = this.atten.filter((att) => att !== null).length;
    return totalClasses === 0 ? 0 : attendedClas / totalClasses;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Марія", "Смірнова", 2001, [87, 86, 90]);
const student2 = new Student("Олег", "Гонтаренко", 1999, [94, 91, 93]);
const student3 = new Student("Ольга", "Петрівна", 1998, [92, 91, 88]);

console.log(
  `${student1.firstName} ${student1.lastName}, Вік: ${student1.getAge()}`
);

student1.present();
student1.present();
student1.absent();

console.log(`Середня оцінка: ${student1.getAverageGrade()}`);
console.log(`Відвідування: ${student1.getAttendanceRate()}`);
console.log(`Підсумок: ${student1.summary()}`);

console.log(
  `${student2.firstName} ${student2.lastName}, Вік: ${student2.getAge()}`
);

student2.absent();
student2.absent();
student2.present();

console.log(`Середня оцінка: ${student2.getAverageGrade()}`);
console.log(`Відвідування: ${student2.getAttendanceRate()}`);
console.log(`Підсумок: ${student2.summary()}`);

console.log(
  `${student3.firstName} ${student3.lastName}, Вік: ${student3.getAge()}`
);

student3.present();
student3.present();
student3.present();

console.log(`Середня оцінка: ${student3.getAverageGrade()}`);
console.log(`Відвідування: ${student3.getAttendanceRate()}`);
console.log(`Підсумок: ${student3.summary()}`);

// // варіант 2
// function Student(firstName, lastName, birtheYears) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birtheYears = birtheYears;
//   this.grads = [];
//   this.atten = new Array(25).fill(null);

//   this.getAge = function () {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.birtheYears;
//   };

//   this.getAverageGrade = function () {
//     const total = this.grads.reduce((sum, grade) => sum + grade, 0);
//     return this.grads.length ? total / this.grads.length : 0;
//   };

//   this.present = function () {
//     const index = this.atten.indexOf(null);
//     if (index !== -1) {
//       this.atten[index] = true;
//     } else {
//     }
//   };

//   this.absent = function () {
//     const index = this.atten.indexOf(null);
//     if (index !== -1) {
//       this.atten[index] = false;
//     } else {
//     }
//   };

//   this.getAttendance = function () {
//     const attend = this.atten.filter(
//       (day) => day === true
//     ).length;
//     const totalClasses = this.atten.filter((day) => day !== null).length;
//     return totalClasses ? attend / totalClasses : 0;
//   };

//   this.summary = function () {
//     const avgGrade = this.getAverageGrade();
//     const attend = this.getAttendance();
//     if (avgGrade > 90 && attend > 0.9) {
//       return "Молодець!";
//     } else if (avgGrade > 90 || attend > 0.9) {
//       return "Добре, але можна краще";
//     } else {
//       return "Редиска!";
//     }
//   };
// }

// const student1 = new Student("Ivan", "Ivanov", 2000);
// const student2 = new Student("Petro", "Petrov", 1999);
// const student3 = new Student("Anna", "Semenova", 2001);

// student1.grads.push(95, 88, 82);
// student2.grads.push(85, 88, 98);
// student3.grads.push(100, 98, 99);

// for (let i = 0; i < 20; i++) {
//   student1.present();
//   student2.present();
//   student3.present();
// }
// for (let i = 0; i < 5; i++) {
//   student1.absent();
//   student2.absent();
//   student3.present();
// }

// console.log(`Student 1: ${student1.summary()}`);
// console.log(`Student 2: ${student2.summary()}`);
// console.log(`Student 3: ${student3.summary()}`);
