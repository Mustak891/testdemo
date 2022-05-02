let lable = document.createElement("label");
lable.setAttribute("for", "first-name");
lable.innerHTML = "<b>First Name</b>";

let brake = document.createElement("br");

let input = document.createElement("input");
input.setAttribute("id", "first-name");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter your First Name");

let brake1 = document.createElement("br");
let brake2 = document.createElement("br");

let lable1 = document.createElement("label");
lable1.setAttribute("for", "last-name");
lable1.innerHTML = "<b>Last Name</b>";

let brake3 = document.createElement("br");

let input2 = document.createElement("input");
input2.setAttribute("id", "last-name");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Enter your lastname");

let brake4 = document.createElement("br");
let brake5 = document.createElement("br");

let lable2 = document.createElement("label");
lable2.setAttribute("for", "Pincode");
lable2.innerHTML = "<b>pincode</b>";

let brake6 = document.createElement("br");

let input3 = document.createElement("input");
input3.setAttribute("id", "pincode");
input3.setAttribute("type", "number");
input3.setAttribute("placeholder", "Enter your pincode");

let brake7 = document.createElement("br");
let brake8 = document.createElement("br");


let lable3 = document.createElement("label");
lable3.setAttribute("for", "gender");
lable3.innerHTML = "<b>Gender</b>";

let brake9 = document.createElement("br");

let lable4 = document.createElement("label");
lable4.innerHTML = "Male";

let input4 = document.createElement("input");
input4.setAttribute("name", "gender");
input4.setAttribute("type", "radio");
input4.setAttribute("id", "gender");
input4.setAttribute("value", "Male");

let label5 = document.createElement("label");
label5.innerHTML = "Female";

let input5 = document.createElement("input");
input5.setAttribute("name", "gender");
input5.setAttribute("type", "radio");
input5.setAttribute("id", "gender");
input5.setAttribute("value", "Female");

let brake10 = document.createElement("br");
let brake11 = document.createElement("br");

let label6 = document.createElement("label");
label6.setAttribute("for", "address");
label6.innerHTML = ("<b>Address</b>");

let brake12 = document.createElement("br");

let input6 = document.createElement("input");
input6.setAttribute("id", "address");
input6.setAttribute("type", "text");
input6.setAttribute("placeholder", "Enter your Address");

let brake13 = document.createElement("br");
let brake14 = document.createElement("br");

let lable7 = document.createElement("label");
lable7.setAttribute("for", "food");
lable7.innerHTML = ("<b>Choice of Food</b> <small><i>(must choose at least 2 out of 5 options)</i><small>");

let brake15 = document.createElement("br");

let input7 = document.createElement("input");
input7.setAttribute("id", "food");
input7.setAttribute("type", "checkbox");
input7.setAttribute("name", "food");
input7.setAttribute("value", "North Indian");
let Northindian = document.createElement("span");
Northindian.innerHTML = " &nbsp;North Indian";

let brake16 = document.createElement("br");

let input8 = document.createElement("input");
input8.setAttribute("id", "food");
input8.setAttribute("type", "checkbox");
input8.setAttribute("name", "food");
input8.setAttribute("value", "South Indian");
let SouthIndian = document.createElement("span");
SouthIndian.innerHTML = " &nbsp;South Indian";

let brake17 = document.createElement("br");

let input9 = document.createElement("input");
input9.setAttribute("id", "food");
input9.setAttribute("type", "checkbox");
input9.setAttribute("name", "food");
input9.setAttribute("value", "Chinese");
let Chinese = document.createElement("span");
Chinese.innerHTML = " &nbsp;Chinese";

let brake18 = document.createElement("br");

let input10 = document.createElement("input");
input10.setAttribute("id", "food");
input10.setAttribute("type", "checkbox");
input10.setAttribute("name", "food");
input10.setAttribute("value", "Japanese");
let Japanese = document.createElement("span");
Japanese.innerHTML = " &nbsp;Japanese";

let brake19 = document.createElement("br");

let input11 = document.createElement("input");
input11.setAttribute("id", "food");
input11.setAttribute("type", "checkbox");
input11.setAttribute("name", "food");
input11.setAttribute("value", "Sea Food");
let SeaFood = document.createElement("span");
SeaFood.innerHTML = " &nbsp;Sea Foode";

let brake20 = document.createElement("br");
let brake21 = document.createElement("br");

let lable8 = document.createElement("label");
lable8.setAttribute("for", "state");
lable8.innerHTML = ("<b>State</b>");

let brake22 = document.createElement("br");

let input12 = document.createElement("input");
input12.setAttribute("id", "state");
input12.setAttribute("type", "text");
input12.setAttribute("placeholder", "Enter your State");

let brake23 = document.createElement("br");
let brake24 = document.createElement("br");

let lable9 = document.createElement("label");
lable9.setAttribute("for", "country");
lable9.innerHTML = ("<b>Country</b>");

let brake25 = document.createElement("br");

let input13 = document.createElement("input");
input13.setAttribute("id", "country");
input13.setAttribute("type", "text");
input13.setAttribute("placeholder", "Enter your Country");

let brake26 = document.createElement("br");
let brake27 = document.createElement("br");

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("id", "submit");
button.setAttribute("onclick", "successful()");
button.setAttribute("style", "width:190px")
button.className = "btn btn-dark";
button.innerHTML = "submit";


form.append(lable, brake, input, brake1, brake2, lable1, brake3, input2, brake4, brake5, lable2, brake6, input3, brake7, brake8,
    lable3, brake9, lable4, input4, label5, input5, brake10, brake11, label6, brake12, input6, brake13, brake14, lable7, brake15,
    input7, Northindian, brake16, input8, SouthIndian, brake17, input9, Chinese, brake18, input10, Japanese, brake19, input11,
    SeaFood, brake20, brake21, lable8, brake22, input12, brake23, brake24, lable9, brake25, input13, brake26, brake27, button);

//head code
var thead = document.createElement("thead");
thead.className = "thead-dark";

var tr = document.createElement("tr");

var th1 = createtrth("th", "Firstname");
var th2 = createtrth("th", "Lastname");
var th3 = createtrth("th", "Pincode");
var th4 = createtrth("th", "Gender");
var th5 = createtrth("th", "Address");
var th6 = createtrth("th", "Choice of Food");
var th7 = createtrth("th", "State");
var th8 = createtrth("th", "Country");

tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr);

//body of the table code
var tbody = document.createElement("tbody");


table.append(thead, tbody);


function createtrth(element, values) {
    var ele = document.createElement(element);
    ele.innerHTML = values;
    return ele;
}


let submit = document.getElementById("submit")
submit.addEventListener("click", function (event) {
    event.preventDefault();


    let gendertype = document.getElementsByName("gender");
    let genderlist1;
    for (let i = 0; i < gendertype.length; i++) {
        if (gendertype[i].checked) {
            genderlist1 = gendertype[i].value;
        }
    }


    let food = document.getElementsByName("food");
    let foodlist = [];
    let foodcount = 0;
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodlist.push(food[i].value)
            foodcount++
        }
    }

    if (foodlist.length >= 2) {
        foodans = foodlist.join(", ");
    } else {
        foodans = alert("Choose atleast two options in food")
    }


    let vfirstname = document.getElementById("first-name").value;
    let vlastname = document.getElementById("last-name").value;
    let vpincode = document.getElementById("pincode").value;
    let vaddress = document.getElementById("address").value;
    let vstate = document.getElementById("state").value;
    let vcountry = document.getElementById("country").value;


    console.log(vfirstname, vlastname, vpincode, genderlist1, vaddress, foodlist, vstate, vcountry);
    mytable(vfirstname, vlastname, vpincode, vaddress, genderlist1, vaddress, foodlist, vstate, vcountry)
})




function mytable(vfirstname, vlastname, vpincode, vaddress, genderlist1, vaddress, foodlist, vstate, vcountry) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = vfirstname
    td2.innerHTML = vlastname
    td3.innerHTML = vaddress
    td4.innerHTML = genderlist1
    td5.innerHTML = vaddress
    td6.innerHTML = foodlist
    td7.innerHTML = vstate
    td8.innerHTML = vcountry
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    tbody.append(tr)
}