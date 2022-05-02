//Write a “person” class to hold all the details.
class person{
    constructor(name,age,gender,dateOfBirth,maritalStatus){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.dateOfBirth=dateOfBirth;
        this.maritalStatus=maritalStatus;
    }
}
let detial = new person("ajith","25","male","22-09-1997", "married");
console.log(detial);

//write a class to calculate uber price.
class uberfare {
    constructor() {
      this.prop = 12;
    }
    get fare() {
      return this.prop * 7;
    }
  }
  const f = new uberfare();
  console.log(f.fare); 
  
  
