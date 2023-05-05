const fs = require('fs').promises;

const writeFile = async ({result}) => {
    try {
        await fs.writeFile('./docs/index.txt', result.join('\n'))
    } catch (error) {
        console.log(error)
    }
}

module.exports = writeFile;