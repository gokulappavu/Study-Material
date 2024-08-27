const generatePassword = (length) => {
let characters = "ASDFGHJKLQWERTYUIOPZXCVBNMqwertyuioplkjhgfdsazxcvbnm,!@#$%^&*()<>?:"

let password = "";
for (let index = 0; index < length; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
};

return password;
};


module.exports = {
    generatePassword
}