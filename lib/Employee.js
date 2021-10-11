const crypto = require('crypto');
const inquirer = require('inquirer');

class Employee {
    constructor (name, id , email, role) {
        //this.userId = crypto.randomUUID();
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    //Todo use get methods to populate fields in html output
    getName (){
        console.log(this.name);
        return this.name;
    }

    getId () {
        console.log(this.id);
        return this.id
    }

    getEmail () {
        console.log(this.email);
        return this.email
    }
    getRole () {
        return this.role;
    }
}




module.exports = Employee;