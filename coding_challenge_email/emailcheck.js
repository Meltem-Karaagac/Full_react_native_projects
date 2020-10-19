
function emailCheck(email) {
    let extentionLen = email.split(".")
    console.log(extentionLen);
    if (email.includes("@") && extentionLen[extentionLen.length - 1].length <= 3 && extentionLen[extentionLen.length - 1].length >= 2) { return "Valid email type" }
    else { return "Invalid email type" }

}

console.log(emailCheck("meltem.karaagac19@gmail.com")); //OUTPUT: Valid email type
console.log(emailCheck("meltem.karaagac19@gmail.co")); //OUTPUT: Valid email type
console.log(emailCheck("meltem.karaagac19@gmail.c")); //OUTPUT: Invalid email type
console.log(emailCheck("meltem.karaagac19@gmail.coma")); //OUTPUT: Invalid email type



