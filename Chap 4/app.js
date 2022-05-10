// Answer 1
// var arr = [[]];
// var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(matrix)

// Answer 3
// for (var i=0; i<=10; i++){
//     document.write(i + "<br>");
// }

// Answer 4
// var table = prompt("Enter a multiplication table number");
// var multiplication = prompt("Input how many multiplication do u want ?");
// document.writeln("<h3> Multiplication Table of " + table);
// document.write("<h3> Length " + multiplication + "<br>");
// for(var i=1; i<=multiplication; i++){
//     document.writeln(table + "x" + i +"=" + table*i + "<br>")
// }

// Answer 5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>") 
// }
// document.write("Element at index 0 is " + fruits[0] + "<br>");
// document.write("Element at index 1 is " + fruits[1] + "<br>");
// document.write("Element at index 2 is " + fruits[2] + "<br>");
// document.write("Element at index 3 is " + fruits[3] + "<br>");
// document.write("Element at index 4 is " + fruits[4] + "<br>");

//  Answer 5
// var counting_arr = [];
// for (var i = 1; i <= 15; i++) {
//     counting_arr.push(i);
// }
// document.write("<h3> Counting = " + counting_arr)

// // Reverse
// var reverse_arr = [];
// for(var i=10; i>=0; i--){
//     reverse_arr.push(i);
// }
// document.write("<h3> Reverse Counting = " + reverse_arr)
// Even
// var even_arr = [];
// for (i=0; i<=20; i+=2) {
//     even_arr.push(i);   
// }
// document.write("<h3> Even Number = " + even_arr);
// Odd
// var odd_arr = [];
// for(i=1; i<=20; i+=2){
//     odd_arr.push(i);
// }
// document.write("<h3> Odd Number = " + odd_arr)
// Series K
// var series_arr = [];
// for(var i=2; i<=20; i+=2){
//     series_arr.push(i);
// }
// document.write("<h3> Series Number = " + series_arr)

// Answer 7
// var A  = ["cake","apple pie", "cookies","chips","patties"];
// var B = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am ?");
// for(var i=0; i<A.length; i++){
//     if(A[i]==B){
//         document.write(A[i]+" is available at Index " + i + "in our bakery")
//     }
// }
// else {
//     document.write("We are sorry " + B + "is not available in our bakery")
// }

// Answer 8
// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// document.write(largest);

// Answer 9
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (smallest > arr[i] ) {
//         smallest = arr[i];
//     }
// }
// document.write(smallest);

// Answer 10
// Multiples of 5
// var num = [];
// for (i=5; i<=100; i+=5) {
//     num.push(i);
// }
// document.write("Multiples Of 5 = " + num);