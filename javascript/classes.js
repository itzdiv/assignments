class Person {
  constructor(name, age, salary, sex) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sex = sex;
  }

  // Static sort method
  static sort(arr, field, order = "asc") {
    // create a copy so original array is not changed
    const copy = arr.slice();
    this.quickSort(copy, 0, copy.length - 1, field, order);
    return copy;
  }

  static quickSort(arr, low, high, field, order) {
    if (low < high) {
      const pivotIndex = this.partition(arr, low, high, field, order);
      this.quickSort(arr, low, pivotIndex - 1, field, order);
      this.quickSort(arr, pivotIndex + 1, high, field, order);
    }
  }

  static partition(arr, low, high, field, order) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (this.compare(arr[j], pivot, field, order) <= 0) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  static compare(p1, p2, field, order) {
    let result;

    switch (field) {
      case "name":
        result = p1.name.localeCompare(p2.name);
        break;
      case "age":
        result = p1.age - p2.age;
        break;
      case "salary":
        result = p1.salary - p2.salary;
        break;
      case "sex":
        result = p1.sex.localeCompare(p2.sex);
        break;
      default:
        throw new Error("Invalid field name");
    }

    return order === "desc" ? -result : result;
  }
}


//sample use case 
const people = [
  new Person("Rahul", 25, 50000, "M"),
  new Person("Anita", 22, 60000, "F"),
  new Person("Vikram", 30, 45000, "M")
];

const sortedByNameAsc = Person.sort(people, "name", "asc");
console.log(sortedByNameAsc);

const sortedBySalaryDesc = Person.sort(people, "salary", "desc");
console.log(sortedBySalaryDesc);

// original array remains unchanged
console.log(people);
