// Chapter 9-11
//  Answer 1
// var city = prompt("Enter a city name");

// if (city == "Karachi"){
//     alert("Welcome to Karachi City")
// }
// else{
//     alert("Good Bye")
// }

//  Answer 2
// var gender = prompt("Enter a Gender : ");
// if (gender == "male") {
//     alert("Good Morning Sir");
// }
// else if (gender == "female") {
//     alert("Good Morning Ma'am");
// }

//  Answer 3
// var color = prompt("Enter a signal color");
// if (color == "Red") {
//     alert("Must Stop");
// }
// else if (color == "Yellow") {
//     alert("Ready to Move");
// }
// else if (color == "Green") {
//     alert("Move on");
// }

//  Answer 4
// var fuel = prompt("Remaining fuel in car in Liter");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else{
//    alert("You have enough fuel in car") ;
// }

//  Answer 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Answer to Ques6
// var percentage;
// var obtained_marks;
// var sub1 = prompt("Enter  a subject name = ");
// var sub2 = prompt("Enter  a subject name = ");
// var sub3 = prompt("Enter  a subject name = ");
// var marks1 = prompt("Enter a marks = ");
// var marks2 = prompt("Enter a marks = ");
// var marks3 = prompt("Enter a marks = ");
// var total = prompt("Enter total marks = ");
// obtained_marks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
// percentage = obtained_marks/total*100;
// document.write("Total Marks = "+total+ "<br>");
// document.write("Obatined Marks = "+ obtained_marks+ "<br>");
// document.write("Percentage = "+ percentage + "%"+ "<br>");

// if (percentage>=80) {
//     document.write("Grade: A-One" + "<br>");
//     document.write("Remarks:Excellent");
// }
// else if (percentage>=70){
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good");
// }
// else if (percentage>=60){
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: You need to improve");
// }
// else {
//     document.write("Grade: Fail" + "<br>");
//     document.write("Remarks: Sorry");
// }

// Answer 7
// var secret_Num = 4;
// var guess =+prompt()
// if (guess==secret_Num){
//     alert("Bingo!")
// }
// else if(guess+1 != secret_Num ){
//     alert("Close enough to the correct answer ")
// }

// Answer 8
// var num = 15;
// if(num%3 == 0){
//     document.write("The number is divisible by 3")
// }
// else{
//     document.write("The number is not divisible by 3")
// }

// Answer 9
// var num = prompt("Enter a num to check whether it is even or odd")
// if(num % 2 == 0){
//     alert("The number is even ")
// }
// else{
//     alert("The number is odd ")
// }

// Answer 10
// var temp = prompt(" Enter a temperature :")
// if (temp>40){
//     document.write("Its too hot" + "<br>");
// }
// else if (temp>30){
//     document.write("The weather is today Normal" + "<br>");
// }
// else if (temp>20){
//     document.write("Todays weather is too Cool " + "<br>");
// }
// else if (temp>10){
//     document.write("OMG! Todays weather is so Cool" + "<br>");
// }

// Answer 11
// var a = parseInt(prompt("Enter first number "));
// var b = parseInt (prompt("Enter second number "));
// var operator = prompt('Enter operator ( either +, -, * or / ): ');
// if (operator == '+') {
//     result = a + b;
//     document.write("Addition Operator : "+ result)
// }
// else if (operator == '-') {
//     result = a - b;
//     document.write("Subtraction Operator : "+ result)
// }
// else if (operator == '/') {
//     result = a / b;
//     document.write("Division Operator : "+ result)
// }
// else if (operator == '*') {
//     result = a * b;
//     document.write("Multiplication Operator : "+ result)
// }
// else{
//     result = a%b;
//     document.write("Mode Opertor : " + result)
// }