class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(student) {
    this.numberOfStudents = student;
  }

  quickFacts() {
    return `${this.name} educates ${this.numberOfStudents} students at the ${
      this.level
    } school level.`;
  }

  pickSubstituteTeacher(substituteTeachers) {
    let randomNum = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randomNum];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor() {
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli"
]);

console.log(lorraineHansbury.quickFacts());
console.log(lorraineHansbury.pickSubstituteTeacher());