const fs = require('fs').promises;

// reading files 
const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf8',);
        const words = data.split(/\s+/);
        const filteredWords = words.filter(word => /^[a-zA-Z]+$/.test(word));

        // returning the array of words
        return filteredWords;
    } catch (error) {
        console.log(error)
    }
}


module.exports = readFile;