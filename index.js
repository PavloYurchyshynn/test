const { readFileSync } = require('fs')

function fileHandler() {
    let counter = 0
    
    try {
        const data = readFileSync('text.txt', 'utf8').split('\r\n');
        data.forEach((el) => {
            let count = 0
            const arrChar = el.split(' ')[0]
            const arrNum = el.split(' ')[1].split('-').join(' ').split(':').join(' ').split(' ')
            const arrText = el.split(' ')[2]
            arrText.split('').forEach(char => {
                if (char === arrChar) {
                    count++
                }
            })
            if (count >= +arrNum[0] && count <= +arrNum[1]) {
                counter++
            }
        })
    } catch (err) {
        console.error(err);
    }
    return counter
}

console.log(fileHandler());