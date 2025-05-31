// // Save something to web storage:
// localStorage.setItem("keyName", "value");

// // Get something from web storage that  was previously saved:
// var myValue = localStorage.getItem("keyName");

// // Remove an key/value pair from localStorage:
// localStorage.removeItem("keyName");




// // Save something to web storage:
// localStorage.keyName = "value";

// // Get something from web storage that  was previously saved:
// var myValue = localStorage.keyName;

// // Remove an key/value pair from localStorage:
// delete localStorage.keyName;




// var obj = {
//     name: "Billy",
//     age: 45,
//     cars: [
//         {
//             year: 2002,
//             make: "Toyota",
//             model: "Camry"
//         },
//         {
//             year: 2018,
//             make: "Tesla",
//             model: "Roadster"
//         }
//     ]
// }

// // To save this object to web storage:
// localStorage.user = JSON.stringify(obj);

// // To retrieve this object from web storage:
// var user = JSON.parse(localStorage.user);







 
// function sayHello(){
//     console.log('hello!');
//  }
 
 
//  function stopSayingHello(){
//     clearInterval(intervalID)
//  }
 
 
//  var intervalID = setInterval(sayHello, 1000);
 
//  setTimeout(stopSayingHello,  6000)



 
//  var display = document.getElementById('time-display');

//  function getTime(){
//      var now = new Date();
//      var hour = now.getHours();
//      var min = now.getMinutes();
//      var sec = now.getSeconds();
//      if(hour < 10){
//          hour = `0${hour}`;
//      }
//      if(min < 10){
//          min = `0${min}`;
//      }
//      if(sec < 10){
//          sec = `0${sec}`;
//      }

//      display.textContent = `${hour}:${min}:${sec}`;
//  }

//  setInterval(getTime, 1000);



const btn1 = document.getElementById('clicker');
const anchor = document.getElementById('anchor');

let clicks = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
anchor.textContent = clicks;

btn1.addEventListener('click',function(){
    clicks++;
    anchor.textContent = clicks;
    localStorage.setItem('clickCount', clicks);
});


