const readline = require('readline-sync');

const securityQuestions = {
    question: "Do you prefer Armaan or Jeremy's teaching style? (Choose wisely!) ",
    question2: "Iron Man or The Hulk? ",
    question3: "If your mom and sister were kidnapped, and you can only save one of them, who would it be? ",
    expectedAnswer: "Armaan",
    expectedAnswer2: "Iron Man",
    expectedAnswer3: "mom",
};


function manyQuestions() {
    let rightanswer;
    let rightanswer2;
    let rightanswer3;

    if (readline.question(securityQuestions.question) == securityQuestions.expectedAnswer) {
        console.log("Only because you're grading my lab!");
        rightanswer = "uno";
    } else {
        console.log("Wrong answer buddy!");
        return;
    }
    if (readline.question(securityQuestions.question2) == securityQuestions.expectedAnswer2) {
        console.log("I'm surprised you didn't write Wolverine.");
        rightanswer2 = "dos";
    } else {
        console.log("You just keep surprising me.")
        return;
    }
    if (readline.question(securityQuestions.question3) == securityQuestions.expectedAnswer3) {
        console.log("That's cold hearted!");
        rightanswer3 = "tres";
    } else {
        console.log("That's the right choice!");
        return;
    }
    if (rightanswer == "uno" && rightanswer2 == "dos" && rightanswer3 == "tres") {
        console.log("Congrats! Please pass me!");
    }
    
}

manyQuestions();