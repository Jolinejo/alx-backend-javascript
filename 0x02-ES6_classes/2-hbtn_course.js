export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (length.isNaN) {
      throw new TypeError('Length must be a number');
    }
    if (!(students.isArray)) {
      throw new TypeError('Students must be an array of strings');
    }
    for (const arg in students) {
      if (typeof arg !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (length.isNaN) {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!(students.isArray)) {
      throw new TypeError('Students must be an array of strings');
    }
    for (const arg in students) {
      if (typeof arg !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
