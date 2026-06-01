function sortByProperty(objects, propertyName) {
    //take "people" array
    //use objects.sort to loop through array
    //set arguements of sort function for a,b
    //return a.age - b.age

    const sortedByAge = objects.sort((a,b) => {
        return a[propertyName] - b[propertyName]
    })
    return sortedByAge
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);