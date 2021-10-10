const Employee = require('./Employee');

class Manager extends Employee {
    constructor (officeNumber, role) {
        this.officNumber = officeNumber;
        this.role = role;
    }
    getRole (){
        return this.role
    }
}