const fs = require('fs');
const bootStrapStylesheet =  "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\" integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">";
const bootStrapMin = "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\"></script>";
const localStyleSheet = "<link rel=\"stylesheet\" href=\"./style.css\"/>";
let baseHtmlTop = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${localStyleSheet}
        ${bootStrapStylesheet}
    </head>
    <body>
    <header>
        <div class="banner">
            <h1> Team Generator </h1>
        </div>
    </header>
    <main class="container">
    `
let baseHtmlBottom = `
    </main>
     ${bootStrapMin}   
    </body>
    </html>
    `
//Class to generate the html from the data that was put in the inquirer prompts
class Genhtml {
    constructor (filename,userObj) {
        this.filename = filename;
        this.userObj = userObj;

    }

    genCard (html, empObj) {
        // Generate html card by role from empObj argument
        if (empObj.role === "Engineer"){
            html = `
            <div class="card"> 
            <div class="card-body">
            <h2>${empObj.role}</h2>
            <ul class="list-group">
            <li class="list-group-item list-group-item-info">Name: ${empObj.name}</li> 
            <li class="list-group-item list-group-item-info">ID: ${empObj.id}</li> 
            <li class="list-group-item list-group-item-info">Email: ${empObj.email}</li> 
            <li class="list-group-item list-group-item-info">Github: ${empObj.github}</li> 
            </ul>
            </div>
            </div>
            `
        }
        else if (empObj.role === "Intern"){
            html = `
            <div class="card"> 
            <div class="card-body">
            <h2>${empObj.role}</h2>
            <ul class="list-group">
            <li class="list-group-item list-group-item-info">Name: ${empObj.name}</li> 
            <li class="list-group-item list-group-item-info">ID: ${empObj.id}</li> 
            <li class="list-group-item list-group-item-info">Email: ${empObj.email}</li> 
            <li class="list-group-item list-group-item-info">School: ${empObj.school}</li> 
            </ul>
            </div>
            </div>
            `
        }
        else if (empObj.role === "Manager"){
            html = `
            <div class="card"> 
            <div class="card-body">
            <h2>${empObj.role}</h2>
            <ul class="list-group">
            <li class="list-group-item list-group-item-info">Name: ${empObj.name}</li> 
            <li class="list-group-item list-group-item-info">ID: ${empObj.id}</li> 
            <li class="list-group-item list-group-item-info">Email: ${empObj.email}</li> 
            <li class="list-group-item list-group-item-info">Office Number: ${empObj.officenum}</li> 
            </ul>
            </div>
            </div>
            `
        }
        return html
    }
    writeHtml () {
    //Method to loop through the object passed to the class, combine the html and write to file
    for (const x in this.userObj) {
        //generate card section and append to top html
        let createCards = this.genCard(this.baseHtmlTop,this.userObj[x]);
        baseHtmlTop = baseHtmlTop + createCards
    }
    let baseHtml = baseHtmlTop + baseHtmlBottom;
    fs.writeFile('./dist/index.html', baseHtml, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File written successfully");
        }
    });
    }

    
}


module.exports = Genhtml;