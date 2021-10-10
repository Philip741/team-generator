const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name,id,email,officeNumber) {
    super(officeNumber)
        this.officNumber = officeNumber;
        this.role = "Manager";
    }

    getRole (){
        return this.role
    }
}

module.exports = Manager;