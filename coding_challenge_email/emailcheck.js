

//JS-CC-005 : Email Validation

// Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

// Valid email addresses must follow these rules:

//  1. It must have the username@websitename.extension format type.

//  2. The maximum length of the extension is 3.

// Problem Statement

// Write a function that takes email variable and return true or false and write console invalid or valid .

// Please note that, extension length can be 2 or 3 letters( For example: .co , com . ) 

function emailCheck(email) {

    let extentionLen = email.split(".")
    console.log(extentionLen);
    
    if (email.includes("@") && extentionLen[extentionLen.length - 1].length <= 3 && extentionLen[extentionLen.length - 1].length >= 2) { return "Valid email type" }
    else { return "Invalid email type" }

}

console.log(emailCheck("meltem.karaagac19@gmail.com"));    //OUTPUT: Valid email type
console.log(emailCheck("meltem.karaagac19@gmail.co"));     //OUTPUT: Valid email type
console.log(emailCheck("meltem.karaagac19@gmail.c"));      //OUTPUT: Invalid email type
console.log(emailCheck("meltem.karaagac19@gmail.coma"));   //OUTPUT: Invalid email type



