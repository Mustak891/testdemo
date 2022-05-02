var url="https://624a7f85852fe6ebf887cb00.mockapi.io/users";
//GET: READ
function getdata(){
    var res = fetch("https://624a7f85852fe6ebf887cb00.mockapi.io/users");
    res.then((data)=>data.json())
    .then((data1)=>console.log(data1))
    .catch((error)=>console.log(error));
}
// getdata()
  
    function create(){
        var data={
            name:"john doe",
            email:"doe@guvi.in"
        };
        fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
// create()

function updatedata(){
    var data={
        
        email:"john@guvi.in",
        
    };
    fetch(url+"/11",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }) 
}
// updatedata()

function deletedata(){
    fetch(url+"/11",{
        method:"DELETE"})
}
deletedata()