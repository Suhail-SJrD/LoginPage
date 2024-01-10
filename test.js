// let loogin = [];
// // loogin[0] = "suhail"
// let incrementer = 0;
// console.log(loogin.length);
// while(incrementer<10){
//     let values = prompt("Enter the elemetn");
//     loogin[incrementer] = values;
    
//     incrementer++;
// }
// console.log(loogin);



// // let login = [];
// // let incrementer = 0;

// // while (incrementer < 10) {
// //     let value = prompt("Enter the element");

// //     // Check if the user clicked "Cancel" or entered an empty string
// //     if (value === null || value.trim() === "") {
// //         // Handle the cancel or empty input (optional)
// //         alert("Please enter a valid value.");
// //     } else {
// //         login[incrementer] = value;
// //         incrementer++;
// //     }
// // }

// // console.log(login);

let test = document.getElementById('test')

let arr = ["suhai","salman","sayyid","saahid","sayyid salman bin suhail mohammad"]

for(let i = 0; i< arr.length; i++){
    test.innerText = arr[i];
}
