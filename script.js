const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
   
   /* Now Using  regex instead
   Regex in JavaScript is indicated by a pattern wrapped in forward slashes – for example:
const regex = /hello/; See step 23

    const strArray = str.split('');
    const cleanStrArray = [];
   for (let i = 0; i < strArray.length; i++) {
        if (!['+', '-', ' '].includes(strArray[i])) {
            cleanStrArray.push(strArray[i]);}
    }*/
    // New code|
    const regex = /[+-\s]/g;        // '\' backslash is an escape character
    return str.replace(regex, "");
}
function isInvalidInput(str) {
   let regex  = /\d+e\d+/i; 
   return str.match(regex);
   function addEntry() {
    const targetId = '#' + entryDropdown.value;
   }
}