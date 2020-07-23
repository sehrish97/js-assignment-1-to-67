//......................................chp 43-48....................................

//1. Show an alert box on click on a link.
function showAlert() {
    var myText = "This can be whatever text you like!";
    alert(myText);
  }
  
  //2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
  $( "#img" ).click(function() {
    alert( "Hello World jQuery" );
  });
  
  //3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
  var obj=[{Firstname:"Bob",Lastname:"Mayer",Email:"bob@mayer.com",Number: "123456789"},{Firstname:"Steven",Lastname:"Spil",Email:"steven@spill.com",Number: "987654321"},{Firstname:"Paul",Lastname:"Taucker",Email:"paul@tack.com",Number: "578954321"}];
  var form = document.createElement('form');
form.id="details";
document.body.appendChild(form);

var tableDiv  = document.createElement('div');
tableDiv.setAttribute("id", "tabDiv");
form.appendChild(tableDiv);

var table = document.createElement("table");
table.setAttribute("id", "myTable");
tableDiv.appendChild(table);

var btnDelete = document.createElement('input');
btnDelete.type = "button";
btnDelete.value = "Delete";
btnDelete.onclick = deleteRow;
form.appendChild(btnDelete);

var addForm = document.createElement('div');
form.appendChild(addForm);

var row = document.createElement("tr");
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Select";
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Sl.No";
table.appendChild(row);
Object.keys(obj[0]).forEach(function(val) {
  var cell = document.createElement("th");
  row.appendChild(cell); 
  cell.innerHTML = val;
});
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Action";

for (var i = 0; i < obj.length; i++) {
  var btnSave = document.createElement('button');
  btnSave.innerHTML = "Save";
  btnSave.onclick = saveCell;

  var btnEdit = document.createElement('input');
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.onclick = editCell;
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id= "checkBox";

  var row = document.createElement("tr");
  table.appendChild(row);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(checkbox);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.innerHTML = i;
  for (key in obj[i]) {
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = obj[i][key];
  }
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(btnEdit);
  cell.appendChild(btnSave);
}

var firstname = document.createElement('input');
firstname.type = "text";
firstname.placeholder = "Firstname";
firstname.required = true;
addForm.appendChild(firstname);

var lastname = document.createElement('input');
lastname.type = "text";
lastname.placeholder = "Lastname";
lastname.required = true;
addForm.appendChild(lastname);

var email = document.createElement('input');
email.type = "email";
email.placeholder = "Email";
email.required = true;
addForm.appendChild(email);

var phnumber = document.createElement('input');
phnumber.type = "number";
phnumber.placeholder = "Number";
phnumber.required = true;
addForm.appendChild(phnumber);

var addTable = function() { 
 	var btnSave = document.createElement('button');
  btnSave.innerHTML = "Save";
  btnSave.onclick = saveCell;

  var btnEdit = document.createElement('input');
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.onclick = editCell;
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id= "checkBox";
  var row = document.createElement("tr");
  if((firstname.value!="")&&(lastname.value!="")&&(email.value!="")&&(phnumber.value!="")){
  
    table.appendChild(row);
    var cell = document.createElement("td");
  	row.appendChild(cell);
  	cell.appendChild(checkbox);
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = i++;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = firstname.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = lastname.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = email.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = phnumber.value;
    
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.appendChild(btnEdit);
    cell.appendChild(btnSave);
    
    document.getElementById("details").reset();
	}
  else {
  	alert("Enter Input Values");
  }
};

var btnClick = document.createElement('input');
btnClick.type = "submit";
btnClick.value = "Add Row";
btnClick.onclick = addTable;
form.appendChild(btnClick);

function deleteRow() {
  var tabDel = document.getElementById('myTable');
  var rowCount = tabDel.rows.length;
  for(var i=0; i<rowCount; i++) {
    var row = tabDel.rows[i];
    var chkbox = row.cells[0].childNodes[0];
    if(chkbox.checked) {
      tabDel.deleteRow(i);
      rowCount--;
      i--;
    }
	}
}

function editCell(e) {

  var t = e.target.parentElement.parentElement;
  var trs = t.getElementsByTagName("tr");
	tds = t.getElementsByTagName("td");

	tds[2].appendChild(firstname);  
  
  tds[3].appendChild(lastname);  
  
  tds[4].appendChild(email);  
  
  tds[5].appendChild(phnumber);  
  curr = t;
}

function saveCell() { 
  if(curr != undefined)
  {
    var inputs = curr.getElementsByTagName("td");
    for(var i = 2; i < inputs.length - 1; i++)
    {
      currInput = inputs[i].getElementsByTagName("input");
      currInput[0].parentElement.innerHTML = currInput[0].value;
    }
    curr = undefined;
  }
}

//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
var button = document.getElementById("clickme"),
count = 0;
button.onclick = function() {
count += 1;
button.innerHTML = "Clickme: " + count;
console.innerHTML =clickme;
};