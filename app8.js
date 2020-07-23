//..........................................chapter  58-67.....................................
//..............Question 1
// Consider you have following code snippet:

// (Copy it in your HTML file)

// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

main=document.getElementById("main-content").children
for(i=0;i<main.length;i++){
      document.write(main[i].innerHTML+"<br>")
}

document.write("<br>")

document.write("<br>")

document.write("<br>")

ren=document.getElementsByClassName("render")

for(i=0;i<ren.length;i++){
document.write(ren[i].innerHTML+"<br>")
}

document.getElementById("first-name").value="sehrish"
document.getElementById("last-name").value="Bibi"
document.getElementById("email").value="Sehrish I'm mishi3231@gmail.com"

document.write(document.getElementById("form-content").nodeType + "<br>")
document.write(document.getElementById("lastName").nodeType, document.getElementById("lastName").childNodes)
lname.appendChild(document.createTextNode("Sehrish"))

var main = document.getElementById("main-content").children
var len=document.getElementById("main-content").children.length-1
document.write("<br>"+main[0].innerHTML+"<br>")
document.write("<br>"+main[len].innerHTML+"<br>")

var p=document.getElementById("lastName").nextElementSibling.innerHTML
var n=document.getElementById("lastName").previousElementSibling.innerHTML
document.write("<br>"+p+"<br>")
document.write("<br>"+n+"<br>")

var email =document.getElementById("email").parentNode

document.write("<br>"+email+"<br>"+email.nodeType)