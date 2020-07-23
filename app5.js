//......................................chp 49-52....................................

var fname
var lname
var email
var pass
function submit(){
    pass=document.getElementById("pass").value
    fname=document.getElementById("fname").value
    lname=document.getElementById("lname").value
    email=document.getElementById("email").value

    document.write("First Name: "+fname+"<br>Last Name: "+lname+"<br>Email: "+email+"<br>Password: "+pass)

}

function unhide(){

    document.getElementById("read").style.display="none"
    document.getElementById("hide").style.display="block"

}
var name
var id
var clas

var table = document.getElementById('table')

document.getElementById("form").style.display="none"

var x
for (var i = 1; i < table.rows.length; i++) {

  x=i
  table.rows[i].cells[3].onclick = function del() {

    table.deleteRow(   this.parentElement.rowIndex)
  }

  table.rows[i].cells[4].onclick = function edit() {

    id=table.rows[x].cells[0].innerHTML
    name=table.rows[x].cells[1].innerHTML
    clas=table.rows[x].cells[2].innerHTML

    table.style.display="none"
    document.getElementById("form").style.display="block"
    document.getElementById("id").value=id
    document.getElementById("name").value=name
    document.getElementById("clas").value=clas
  }
}