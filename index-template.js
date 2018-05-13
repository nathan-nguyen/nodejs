/*

const express = require('express');
const app = express();

const PORT = 3001;

app.listen(PORT);
console.log('\n------------------------------------------ Server Up ------------------------------------------\n');

*/

//*******************************************************************************************************************//

/*

// Using your pre-defined module
var moduleTemplate = require("./module-template/module-template");
var moduleTemplateObject = moduleTemplate();
moduleTemplateObject.printHelloWorld();

*/

//*******************************************************************************************************************//

var db = require("./db/db.js");
var dbInstance = db();

dbInstance.updateData(187, "This is data Id 187");
dbInstance.queryData(187);
dbInstance.queryData(718);

