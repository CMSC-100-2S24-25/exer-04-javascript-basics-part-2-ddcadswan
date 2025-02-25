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
    return `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${alphaNum}`;
} // end of generateUniqueID

function addAccount(accountInfo){
    if (!Array.isArray(accountInfo) || accountInfo.length != 4){
        console.log("ERROR: Account information invalid"); // in the case account infos are not in the right format or input
        return false;
    }

    const [firstName, lastName, email, age] = accountInfo;

    // Validate the inputs in the account information array
    if (
        typeof firstName !== 'string' || firstName.trim() === "" ||
        typeof lastName !== 'string' || lastName.trim() === "" ||
        typeof email !== 'string' || email.trim() === "" ||
        !validator.isEmail(email) ||
        typeof age !== 'number' || age < 18
    ) {
        console.log("ERROR: A requirement for account fields is not met.");
        return false;
    }

    // Generate the unique ID
    const uniqueID = generateUniqueID(firstName, lastName);

    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

    // Save the account userData into a text file users.txt

    try {
        fs.appendFileSync('users.txt', userData, 'utf8');
        return true;
    } catch (error) {
        console.error("ERROR:", error)
        return false;
    }
}

module.exports = { generateUniqueID, addAccount };
