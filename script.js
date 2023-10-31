// let num = [3, 4, 9, 1, 2, 5, 7, 12, 14]
// num.sort((a, b) => a - b)
// console.log(num);
// const array = [
//     1,
//     40,
//     51,
//     24,
//     12,
// ]
// let arr =array.reduce((a, b) => a + b);
// console.log(arr);

// let array = [{
//         id: 1,
//         name: "Java ",
//         isMarried: true,
//         salary: 2000,
//     },
//     {
//         id: 1,
//         name: "Java script",
//         isMarried: false,
//         salary: 1600,
//     },
//     {
//         id: 1,
//         name: "Aresu",
//         isMarried: true,
//         salary: 1550
//     },
//     {
//         id: 1,
//         name: "mmm ",
//         isMarried: "going to marry",
//         salary: 100,
//     }
// ]

// let filtered = array.filter((item) => {
//     let merry = item.isMarried == "going to marry"
//     // let goingTo = item.isMarried == true
//     return merry
// })
// let filtered = array.filter((item) => item.isMarried == true)
// console.log("tey are goin to" + q   );



// arr = [100,14,8,6,20,1, 2, 3, 4, 5]
// let sorted = arr.sort((a,b) => a - b).reverse()
// console.log(sorted);
// let math = sorted.reduce((a,b)=> a-b)
// console.log(math);


// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, suscipit?"
// let mmm = str.split("")

// for (let i = 0; i < mmm.length; i++) {  
//     if (mmm[i] == "l" || mmm[i] == "o" || mmm[i] == "r" || mmm[i] == "e" || mmm[i] == "m") {
//         mmm.splice(i,1)
//         i = i -1
//     }
// }
// let mess = mmm.join("")
// console.log(mess);


// const array = [
//     {name:"Dilshod" ,age:25,salary:500,status:"Intelegnt"},
//     {name:"Nodirbek",age:24,salary:800,status:"teacher"},
//     {name:"Shox",age:19,salary:1200,status:"richStudent"}
// ]
// let filtered = array.filter((human)=>{
//     // return human.age > 20
//     return human.salary > 1000 || human.age === 25
// })
// console.log(filtered);

// comm

// const users = [{
//         userId: 1,
//         userName: "Abdulaziz",
//         userAge: 12,
//         userInterest: "cycling"
//     },
//     {
//         userId: 2,
//         userName: "Muhamadaziz",
//         userAge: 14,
//         userInterest: "anime"
//     },
//     {
//         userId: 3,
//         userName: "Bois",
//         userAge: 22,
//         userInterest: "csgo"
//     },
//     {
//         userId: 4,
//         userName: "Abdullo",
//         userAge: 42,
//         userInterest: "news"
//     },
// ]
// let changed = users.map((user) => {
//     return newId = user.userId 
// })
// console.log(changed);
// let string = prompt("enter the numbers whit ,")
// while (isNaN(string) || string+",") {
//     string = prompt("ENTER THE NUMBERS WITH ,")
// }
function arr(...string) {
    let toArray = string
    if (toArray.length > 2) {
        let slicedArray = toArray.slice(1, -1)
        return slicedArray;
    } else {
        return "null"
    }
}
console.log(arr("1", "2"));
console.log(arr("1", "2", "5", "3", "4"));
console.log(arr("1", "2", "3", "4"));
console.log(arr("2", "9", "5", "10", "3", "4"));

