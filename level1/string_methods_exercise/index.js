// 1.
// function altered(str) {
//     console.log(str)
//     let capped = str.toUpperCase()
//     console.log(capped)
//     let combined = capped + str
//     console.log(combined)
// }

// altered("ham")


// 2.
// function findMidIndex(str2) {
//     const str3 = Math.floor(str2.length / 2)
//     console.log(str3)
// }

// findMidIndex("hello world")


// 3.
// function retFirstHalf(str4) {
//     // const str5 = Math.floor(str4.length / 2)
//     const str5 = str4.slice(0, Math.floor(str4.length / 2))
//     console.log(str5)
// }

// retFirstHalf("Hello World")


// 4.
function halfCapped(str) {
    const str2 = str.slice(0, Math.floor(str.length / 2))
    // console.log(str2)
    const str3 = str2.toUpperCase(str2)
    // console.log(str3)
    const str4 = str3 + str.slice(Math.floor(str.length / 2))
    console.log(str4)
}

halfCapped("hello world")