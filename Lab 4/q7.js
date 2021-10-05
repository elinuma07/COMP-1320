
/*
Create a function called **wordPosition** which takes a list of words, and returns the indices where 
each word shows up in the list. Take a look at the comment below to see how the output should look. 
Your output should have the same structure as the sample shown in the comment. Convert all code to 
use MODERN javascript syntax.
*/

function wordPosition(words) {
    const caca = {};
  
    for (let index = 0; index < words.length; index++) {
        if (caca[words[index]]) {
            caca[words[index]].push(index);
        } else {
            caca[words[index]] = [index]; 
        }
      } return caca;
    }
  
  
      var input = [
        "buy",
        "it",
        "use",
        "it",
        "break",
        "it",
        "fix",
        "it",
        "trash",
        "it",
        "change",
        "it",
        "mail",
        "upgrade",
        "it",
      ];
  
      // input.sort();
      
      var output = wordPosition(input);
          console.log(output);
  
      /*
      Output should look roughly similar to below:
      {
        break: [ 4 ],
        buy: [ 0 ],
        change: [10],
        fix: [ 6 ],
        it:  [1, 3, 5, 7, 9, 11, 14],
        mail: [ 12 ],
        trash: [ 8 ],
        upgrade: [ 13 ],
        use: [ 2 ],
      }
      
      */