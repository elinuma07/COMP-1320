const readline = require('readline-sync');
  
const login = {
    username: "yourmom",
    password: "yourmom1234",
};


for (let wronganswer = 0; wronganswer < 3; wronganswer++) {
    if (readline.question("Please enter password for " + login.username + ": ") == login.password) {
        console.log("You may access your account and I also know your password.");
        break;
    } else {
        console.log("Wrong username/password buddy!");
    }
    if (wronganswer == 2) {
        console.log("You'll never gain access to your account!");
    }
}
        
