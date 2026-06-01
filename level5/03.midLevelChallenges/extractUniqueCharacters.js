function extractUniqueCharacters(strings) {
    //take all words in array and combine all of them into one string
    //for loop through all chararcters
    //conditional; if not already in array, push to uniqueChars
    //return
    const uniqueChars = [];
    const combinedWord = strings.join('');

    for(let i = 0; i < combinedWord.length; i++){
        const char = combinedWord[i];
        if(!uniqueChars.includes(char)){
            uniqueChars.push(char)
        };
    };

    return uniqueChars;
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']