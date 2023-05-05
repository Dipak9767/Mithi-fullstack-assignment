
// cheacking  words present in  exclude array of words
const compareWithExludeArray = ({ excludeArray, word }) => {
    if (excludeArray.includes(word.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}


// searching in index array given word exits or not 
const compareWithIndexArray = ({ indexArray, word }) => {
   
    let isPresentInIndex = indexArray.findIndex(str => str.toLowerCase().includes(word.toLowerCase()));
  
    // if exits then return the index
    return isPresentInIndex;
}

module.exports = {compareWithExludeArray , compareWithIndexArray}