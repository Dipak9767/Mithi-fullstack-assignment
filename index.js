
const readFile = require('./ReadFile');
const addIntoIndexArray = require('./addIntoindexArray');
const writeFile = require('./WriteFile');

// made an array of all paths of given files 
let filesPath = ['./docs/Page1.txt', './docs/Page2.txt', './docs/Page3.txt'];
let indexArray = []; // for the index.txt file content
let excludeArray=[]; // for exclude words 

// reading exclude file
readFile('./docs/exclude-words.txt').then((res) => excludeArray = res);

// loping on all files
filesPath.forEach((file, idx) => {
    // reading each file 
    readFile(file, 'utf8').then((words) => {

        // addding words into final result
        let result = addIntoIndexArray({ words, pageNum: idx + 1, excludeArray, indexArray }).sort();
        // writing result in index file
        writeFile({ result })
    })
})

