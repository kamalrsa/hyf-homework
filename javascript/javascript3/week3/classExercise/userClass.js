class Name {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getfullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
  getfirstName() {
    return this.firstName;
  }
}
const name = new Name("Kamal", "Sharma");
console.log(name.firstName);
// 14 and 16 works are same
console.log(name.getfirstName());
console.log(name.getfullName());
