
//     //separate all characters in a target
//     //sort all characters in a target
//     //join all characters in a target
    
//     //map through each word    
//     //separate all characters in a word
//     //sort all characters in a word
//     //join all characters in a word

//     //compare word to target
//     //filter out false words
//     //return true words


// function filterAnagrams(arr, target) {
    
//     const sortedTarget = target.split('').sort().join('');

//     return arr.filter(word => {
//         const sortedWord = word.split('').sort().join('');
//         return sortedWord === sortedTarget;
//     });
// }

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
// const target = 'enlist';

// const anagrams = filterAnagrams(words, target);
// console.log(anagrams); // Output: ['listen', 'silent']






function sortByMultipleCriteria(people) {
    return people.sort((a, b) => {
        if (a.age !== b.age) {
            return a.age - b.age;
        }
    });
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]