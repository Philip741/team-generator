const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const crypto = require('crypto');
const Manager = require('./lib/Manager');
//Todo enter team managers name
//Todo enter employee id , email address, and office number
    //todo loop menu if adding additional users to add
const mainPrompts = [
    {
        type: 'list',
        name: 'menuChoice',
        choices: ['Add new employee', 'Write to html', 'Exit']
    }
]
const empTypes = [
    {
        type: 'list',
        name: 'menuChoice',
        choices: ['Add Engineer', 'Add Intern', 'Finished adding employees']
    }
]
const empInfo = [
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
    }
]
async function genEmployee (prompts) {
    //todo generate engineer or intern prompt and repeat if necessary
    let prompt = inquirer.createPromptModule();
    let addEmpMenu = await prompt(prompts);
    return addEmpMenu
}

async function userInput (promptData) {
    console.log("-----------------------");
    console.log("Welcome to team creator ");
    console.log("-----------------------");
    let prompt = inquirer.createPromptModule();
    //Todo if statements for menu choices 
    let mainMenu = await prompt(promptData);
    if (mainMenu.menuChoice[0]) {
        //todo generate manager first
        console.log("Enter managers Information---")
        let manager = new Manager();
        let managerData = await genEmployee(empInfo);
        console.log("Add employees that report to manager---")
        let empMenu = await genEmployee(empTypes);

        //todo generate new employee (engineer or intern)
    }
    //Todo return objects to pass to Genhtml 
}

let myEmployee = new Employee('bob',222,'bob@nomail.com');
randId = crypto.randomUUID();
let genUser = {
   [randId]: myEmployee 
}
for (const x in genUser) {
    console.log(genUser[x].name);
}

// Todo write out html to file
userInput(mainPrompts);

