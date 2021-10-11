const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const crypto = require('crypto');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

async function userInput (promptData,engArray=[],internArray=[]) {
    //todo create prompts specific to each class as a class method if possible
    console.log("-----------------------");
    console.log("Welcome to team creator ");
    console.log("-----------------------");
    //let engineerAdded = [];
    //let internAdded = [];

    let prompt = inquirer.createPromptModule();
    let mainMenu = await prompt(promptData);
    if (mainMenu.menuChoice === "Add new employee") {
        //todo generate manager first
        // Instantiate classes
        let manager = new Manager();
        let engineer = new Engineer();
        let intern = new Intern();
        console.log("Enter managers Information---")
        let managerData = await genEmployee(empInfo);
        console.log("Add employees that report to manager---")
        let addEmp = true;
        while (addEmp) {
            let empMenu = await genEmployee(empTypes);
            // Rather than pushing to arrays pushing to an external source would be better
            if (empMenu.menuChoice === "Add Engineer"){
                console.log("Enter Engineers Information---");
                let engData = await engineer.engData();
                engData = {role: engineer.getRole(), data: engData};
                // push to engineerAdded array to write to html later
                engArray.push(engData);
            }
            else if (empMenu.menuChoice === "Add Intern"){
                console.log("Enter Interns Information---");
                let internData = await intern.internData();
                internData = {role: intern.getRole(), data: internData};
                internArray.push(internData);
            }
            else if (empMenu.menuChoice){
                return userInput(mainPrompts,engArray,internArray);
            }
        }

    }
    else if (mainMenu.menuChoice === "Exit") {
        console.log(engArray);
        console.log(internArray);
        console.log("exiting...")
        return
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

