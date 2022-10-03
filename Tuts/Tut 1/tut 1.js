console.log("this is console");
//const mh
document.querySelector("h1").textContent="This is the heading";
document.querySelector("p").textContent="Hello World!";
alert("This is an alert");
//prompt("enter your age");

let abc;
abc="chocolate";

if (abc === "chocolate")
{
    alert("abc has the value chocolate");
}
if (abc != "chocolate")
{
    alert("abc does not have the value chocolate");
}
else
{
    console.log("it's true")
}

let number = 10;
let myArray = [10,"true", 11, 54];

document.write(myArray[0]);

let num1 = 5;
let num2 = 7;
let num3 = num1num2;
document.write("the result of the multiplication: " + num3);
document.write("<br>");
document.write(num1 + num);
//let output = myFunction();
let output = myFunction(10, 2);
console.log(output);

function myFunction(num1, num2)
{
    /let num1 = 12;
    let num2 = 6;*/
        let num3= num1/num2;
        return num3;
}
document.querySelector("html").addEventListener("click", function() {
    alert("you clicked me");
});
document.querySelector("html").addEventListener("click", function() {
    document.querySelector("img").addEventListener("src", "image/download.svg");
    document.querySelector("h1").textContent = "this is displayed the second image";
});

const myName = prompt("please enter your age:");

localStorage.setItem("name", myName);
document.write("this date is stored on session" + localStorage.getItem("myName"));
document.querySelector("p").textContent = myName;

document.getElementById("newh1").innerHTML = "this is the new html h1 tag";
document.getElementById("newh1").style.background = "red";
