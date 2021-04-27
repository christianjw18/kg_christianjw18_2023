// This script will output the phonetic equivalencies of input numbers
// Runs in O(n*m) time where n is the amount of input numbers and m is the 
// digit length of the largest number
 
// Set arguments to commandline arguments
const arguments = process.argv;
// Shift twice to remove first two arguments and be left with just nubers
arguments.shift();
arguments.shift();

// Initialize our numbers dictionary with phonetic equivalencies
const numbers = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
};
// Set out output string to ''. We will sequentially add numbers to it 
var outputString = '';
// Iterate through our input numbers 
for(var i = 0; i < arguments.length; ++i){
    var number = arguments[i];
    // Iterate through each digit of each number and
    // add corresponding value from numbers dictionary
    for(var j = 0; j < number.length; ++j){
        var digit = number[j];
        outputString += numbers[digit]
    }
    // Space the output numbers out by comma
    outputString += ',';
}
// Strip the last hanging comma from the end
outputString = outputString.substr(0, outputString.length - 1);
// Output the numbers
console.log(outputString);
