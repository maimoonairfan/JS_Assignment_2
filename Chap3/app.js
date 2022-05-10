// Answer 1
// var std_name = [];
// var std_name = ["john","ruby","joe","elon"];
// var num = [1,2,3,4,5];
// var boolean = ["true","false"];
// var mixed = ["john",true,1,"ruby"]
// var arr = ["SSC","HSC","BSC","BS","Bcom","MS","M.Phil.", "Phd"];
// document.write( "<h3> Qualification ","<br>")
// document.write( arr [0] + "<br>")
// document.write( arr [1] + "<br>")
// document.write( arr [2] + "<br>")
// document.write( arr [3] + "<br>")
// document.write( arr [4] + "<br>")
// document.write( arr [5] + "<br>")
// document.write( arr [6] + "<br>")
// document.write( arr [7] + "<br>")

// Answer 8
// var std_name = ["Michael", "John","Tony"];
// var score = [320,230,480];
// var total = 500;
// document.write("Score of " + std_name[0] + " is " + score[0] + " . Percentage is "+ score[0]/total*100 + "%" + "<br>" )
// document.write("Score of " + std_name[1] + " is " + score[1] + " . Percentage is "+ score[1]/total*100 + "%" + "<br>" )
// document.write("Score of " + std_name[2] + " is " + score[2] + " . Percentage is "+ score[2]/total*100 + "%" + "<br>" )

// Answer 9
// var clr=['violet','indigo','blue','green','yellow','red'];
// alert(clr);
// var userInp=prompt('what color do you want to add to the beginning');
// clr.unshift(userInp);
// alert(clr);
// var userInp=prompt('what color do you want to add to the end');
// clr.push(userInp);
// alert(clr);
// clr.unshift('pink')
// clr.unshift('orange')
// alert('new colors array\n'+clr);
// clr.shift();
// alert('After deleting first color\n'+clr);
// clr.pop();
// alert('After deleting last color\n'+clr);
// index=prompt('At which index you want to add a color');
// userInp= prompt('Which Color')
// clr.splice(index,0,userInp);
// alert(clr);
// index=prompt('At which index you want to add a color');
// count=prompt('How many colors?')
// clr.splice(index,count);
// alert(clr);

// Answer 10
// var arr = [320,230,480,120];
// document.write("<h1> Array :"+ "<br>"+ arr + "<br>")
// document.write("<h3> Sorted Array :"+ "<br>")
// document.write(arr.sort())

// Answer 11
// var Cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<h1> Cities List :"+ "<br>"+ Cities + "<br>");
// var selectedCities = Cities.slice(2,4)
// document.write("<h1> Selected Cities :"+ "<br>"+selectedCities);

// Answer 12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("<h1> Array :"+ "<br>"+arr + "<br>")
// document.write("<h1> String :"+ "<br>")
// document.write(arr.join(''))

// Answer 13
// var devices = [];
// devices.push("Keyboard","Mouse","Printer","Monitor")
// document.write("<h3> Devices :"+ "<br>" + devices + "<br>")
// var device = devices[0]
// document.write("<h3> Out :"+ "<br>" + device + "<br>");
// var device = devices[1]
// document.write("<h3> Out :"+ "<br>" + device + "<br>");
// var device = devices[2]
// document.write("<h3> Out :"+ "<br>" + device + "<br>");
// var device = devices[3]
// document.write("<h3> Out :"+ "<br>" + device );

// Answer 14
// var devices = [];
// devices.push("Keyboard","Mouse","Printer","Monitor")
// document.write("<h3> Devices :"+ "<br>" + devices + "<br>")
// var device = devices[3]
// document.write("<h3> Out :"+ "<br>" + device + "<br>");
// var device = devices[2]
// document.write("<h3> Out :"+ "<br>" + device + "<br>");
// var device = devices[1]
// document.write("<h3> Out :"+ "<br>" + device + "<br>");
// var device = devices[0]
// document.write("<h3> Out :"+ "<br>" + device );

// Answer 15
// var manuf = ["Apple","Samsung","Motorola"];
// for(i=0;i<manuf.length;i++){
//     document.write(manuf[i] + '<br>')
// }