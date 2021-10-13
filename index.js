const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const crypto = require('crypto');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Genhtml = require('./lib/Genhtml');

//Todo enter team managers name
//Todo enter employee id , email address, and office number
    //todo loop menu if adding additional users to add
const mainPrompts = [
    {
        type: 'list',
        name: 'menuChoice',
        choices: ['Add new team', 'Write to html', 'Exit']
    }
]
const empTypes = [
    {
        type: 'list',
        name: 'menuChoice',
        choices: ['Add Engineer', 'Add Intern', 'Finished adding employees']
    }
]

async function genEmployee (prompts) {
    let prompt = inquirer.createPromptModule();
    let addEmpMenu = await prompt(prompts);
    return addEmpMenu
}

async function userInput (promptData,empArray=[]) {
    console.log("-----------------------");
    console.log("Welcome to team creator ");
    console.log("-----------------------");

    let prompt = inquirer.createPromptModule();
    let mainMenu = await prompt(promptData);
    if (mainMenu.menuChoice === "Add new team") {
        // Instantiate classes
        let manager = new Manager();
        let engineer = new Engineer();
        let intern = new Intern();

        console.log("Enter managers Information---")
        let managerData = await manager.managerData();
        managerData.role = manager.getRole();
        empArray.push(managerData)
        
        console.log("Add employees that report to manager---")
        let addEmp = true;
        while (addEmp) {
            let empMenu = await genEmployee(empTypes);
            // Rather than pushing to arrays pushing to an external source would be better
            if (empMenu.menuChoice === "Add Engineer"){
                console.log("Enter Engineers Information---");
                let engData = await engineer.engData();
                engData.role = engineer.getRole();
                // push to engineerAdded array to write to html later
                empArray.push(engData);
            }
            else if (empMenu.menuChoice === "Add Intern"){
                console.log("Enter Interns Information---");
                let internData = await intern.internData();
                internData.role = intern.getRole();
                empArray.push(internData);
            }
            else if (empMenu.menuChoice){
                return userInput(mainPrompts,empArray);
            }
        }

    }
    else if (mainMenu.menuChoice === "Write to html") {
        
        let genHtml = new Genhtml('./dist/index.html', empArray);
        genHtml.writeHtml();
    }

    else if (mainMenu.menuChoice === "Exit") {
        console.log(empArray);
        console.log("exiting...")
        return
    }

}

let myEmployee = new Employee('bob',222,'bob@nomail.com');
randId = crypto.randomUUID();
let genUser = {
   [randId]: myEmployee 
}
for (const x in genUser) {
    console.log(genUser[x].name);
}

userInput(mainPrompts);

