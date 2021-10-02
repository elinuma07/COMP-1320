// Create a for-loop(not for-of!) that will print the following:

var numberList = ["First", "Second", "Third", "Fourth"];
for (var i = 0; i < numberList.length; i++) {
    console.log((i+1 + ") ") + numberList[i]);
}

/* Terminal prints:
1) First
2) Second
3) Third
4) Fourth
*/
