const Employee = require('./Employee');
const inquirer = require('inquirer');


class Engineer extends Employee {
    constructor (name,id,email,github) {
    super(name,id,email);    
    this.role = "Engineer";
    this.name = name;
    this.id = id;
    this.github = github;
    this.engineerPrompts = 
     [
        {
            type: 'input',
            name: 'name',
            message: 'Employee name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee id: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employee github username: '
        }
     ]
    }

    async engData () {
    let prompt = inquirer.createPromptModule();
    let addEmpMenu = await prompt(this.engineerPrompts);
    return addEmpMenu
    } 

    getGithub() {
        return this.github
    }
    getRole() {
        return this.role
    }
}

module.exports = Engineer;