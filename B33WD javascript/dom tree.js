//var container=document.createElement("div");
//container.setAttribute("class","container");

//var row=document.createElement("div");
//row.setAttribute("class","row");

//var col=document.createElement("div");
//col.setAttribute("class","col");
//parent.append(child);
//row.append(col);
//parent.append(child);
//container.append(row);
//parent.append(child);
//document.body.append(container);

// function foo(elementname,attrname){

//    let ele=document.createElement(elementname);
//     an alternative for setAttribute in classname
//    ele.className=attrname;
//    return ele;

//    }

// function foo(){

//         let ele=document.getElementById("firstname").value;
//         let ele1=document.getElementById("middlename").value;
//         let ele2=document.getElementById("lastname").value;
//         let ele3=document.getElementById("password").value;

//         console.log(ele,ele1,ele2,ele3)
//          }

//creating tables using DOM
// var table = document.createElement("table");
// table.className = "table";
// //head code
// var thead = document.createElement("thead");
// thead.className = "thead-dark";

// var tr = document.createElement("tr");

// var th1 = createtrth("th", "firstname");
// var th2 = createtrth("th", "lastname");

// tr.append(th1, th2);
// thead.append(tr);

// //body of the table code
// var tbody = document.createElement("tbody");
// var tr = document.createElement("tr");

// var td1 = createtrth("td", "mark");
// var td2 = createtrth("td", "otto");

// tr.append(td1, td2);
// tbody.append(tr);

// table.append(thead, tbody);
// document.body.append(table);

// //document.createElemenet();ele.innerHTML=ele;
// function createtrth(element, values) {
//     var ele = document.createElement(element);
//     ele.innerHTML = values;
//     return ele;
// }



let lable = document.createElement("label");
lable.setAttribute("for", "fname");
lable.innerHTML = "FirstName";
let input = document.createElement("input");
input.setAttribute("id", "fname");
input.setAttribute("type", "Text");
let br = document.createElement("br");
let lable1 = document.createElement("label");
lable1.setAttribute("for", "secname");
lable1.innerHTML = "SecondName";

let input1 = document.createElement("input");
input1.setAttribute("id", "secname");
input1.setAttribute("type", "Text");
let br1 = document.createElement("br");
let lable2 = document.createElement("label");
lable2.setAttribute("for", "email");
lable2.innerHTML = "E-mail";
let input2 = document.createElement("input");
input2.setAttribute("id", "email");
input2.setAttribute("type", "email");
let br2 = document.createElement("br");
let lable3 = document.createElement("label");
lable3.setAttribute("for", "pass");
lable3.innerHTML = "Password";
let input3 = document.createElement("input");
input3.setAttribute("id", "password");
input3.setAttribute("type", "password");
let brak = document.createElement("br");
let button = document.createElement("button");
button.className = "btn btn-dark";
button.setAttribute("type", "button");
button.innerHTML = "submit";
button.addEventListener("click", () =>
  console.log(input.value, input1.value, input2.value, input3.value)
);

document.body.append(
  lable,
  input,
  br,
  lable1,
  input1,
  br1,
  lable2,
  input2,
  br2,
  lable3,
  input3,
  brak,
  button
);

