const fs = require('fs');
const bootStrapStylesheet =  "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\" integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">";
const bootStrapMin = "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\"></script>;"
let baseHtmlTop = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${bootStrapStylesheet}
    </head>
    <body>
    <header></header>
    <main class="container">
    </main>
`
let baseHtmlBottom = `
     ${bootStrapMin}   
    </body>
    </html>
`

class Genhtml {
    constructor (filename,userObj) {
        this.filename = filename;
        this.userObj = userObj;

    }

    genCard (html, empObj) {
        // Generate html card by role from empObj argument
        if (empObj.role === "Engineer"){
            html = `
            <div> 
            ${empObj.role} 
            ${empObj.name} 
            ${empObj.id} 
            ${empObj.email} 
            ${empObj.github} 
            </div>
            `
        }
        else if (empObj.role === "Intern"){
            html = `
            <div> 
            ${empObj.role} 
            ${empObj.name} 
            ${empObj.id} 
            ${empObj.email} 
            ${empObj.school} 
            </div>
            `
        }
        else if (empObj.role === "Manager"){
            html = `
            <div> 
            ${empObj.role} 
            ${empObj.name} 
            ${empObj.id} 
            ${empObj.email} 
            </div>
            `
        }
        return html
    }
    writeHtml () {
    // todo if userObj is empty return
    // todo write out html here 
    // todo 1. create basic html structure
    // todo 2. add values from objects to structure
    for (const x in this.userObj) {
        //generate card section and append to top html
        let createCards = this.genCard(this.baseHtmlTop,this.userObj[x]);
        baseHtmlTop = baseHtmlTop + createCards
    }
    console.log(baseHtmlTop)
    }

    
}


module.exports = Genhtml;