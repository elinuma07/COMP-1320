// Armaan's Version
/*
const lionLimit = 10;

for (let numOfLions = 1; numOfLions <= lionLimit; numOfLions++) {
    console.log("There is " + numOfLions + " lion(s)");
}
*/

// King Kong's Version - Wow, King Kong was a killer. He didn't want to break; at all and I had
// to create Surrey and solve her before making it work with King Kong. I'm happy he kept trying
// in our very short 1.5 hour relationship.

for (kk = 1; kk <= 10; kk++) {
    if (kk == 1) {
        console.log("There is " + kk + " lion");
    } else if (kk >= 6) {
        break;
    } else {
        console.log("There is " + kk + " lions");
    }
}

