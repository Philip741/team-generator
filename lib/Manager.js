const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor (name,id,email,officeNumber) {
    super(name,id,email)
        this.officNumber = officeNumber;
        this.role = "Manager";
        this.managerPrompts = 
         [
            {
                type: 'input',
                name: 'name',
                message: 'Manager name: '
            },
            {
                type: 'input',
                name: 'id',
                message: 'Manager id: '
            },
            {
                type: 'input',
                name: 'email',
                message: 'Manager email: '
            },
            {
                type: 'input',
                name: 'officenum',
                message: 'Manager office number: '
            }
         ]
    
    }

    async managerData () {
    let prompt = inquirer.createPromptModule();
    let addEmpMenu = await prompt(this.managerPrompts);
    return addEmpMenu
    } 

    getRole (){
        return this.role
    }
}

module.exports = Manager;