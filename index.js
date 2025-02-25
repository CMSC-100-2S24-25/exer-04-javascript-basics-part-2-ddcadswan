//NAME: Dalton Ken D. Cadsawan


// Imports
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");

// FUNCTIONS
function generateUniqueID(firstName, lastName){
    if (typeof firstName !== 'string' || typeof lastName !== 'string'){
        console.log("ERROR: Inputs for name must be a string.");
    }

    const alphaNum = uuidv4().slice(0,8); //take an alphanumeric string of length 8 
    return "${firstName[0].toLowerCase()}${lastName.toLowerCase()}${alphaNum}";
} // end of generateUniqueID

module.exports = { generateUniqueID };
