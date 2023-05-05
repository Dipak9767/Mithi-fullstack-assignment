const { compareWithExludeArray, compareWithIndexArray } = require("./Compare");


const addIntoIndexArray = ({ indexArray, words, excludeArray, pageNum }) => {

    // looping on current page array
    words.forEach(word => {

        // cheacking for exclude values
        if (!(compareWithExludeArray({ excludeArray, word }))) {

            // cheacking that current word is already exits or not in index 
            let isPresentInIndex = compareWithIndexArray({ indexArray, word });

            if (isPresentInIndex > -1) {

                // if exits then cheack for repeating words in same page by cheacking the last char which is page number
                if (indexArray[isPresentInIndex].charAt(indexArray[isPresentInIndex].length - 1) != pageNum) {
                    // updating the word with page numer
                    let tempWord = `${indexArray[isPresentInIndex]} , ${pageNum.toString()}`;
                    indexArray[isPresentInIndex] = tempWord;
                }
            } else {
                // if not exits then push with current page number
                let tempWord = `${word} : ${pageNum.toString()}`;
                indexArray.push(tempWord.toLowerCase())

            }
        }
    });
    // return index array
    return indexArray;
}

module.exports = addIntoIndexArray;
