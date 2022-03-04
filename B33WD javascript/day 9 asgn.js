let mlm = new XMLHttpRequest();
mlm.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
mlm.send();
mlm.onload=function(){
    var data =JSON.parse(mlm.response);
    let res=data.filter((element)=>element.region==="Asia");
    for(let i=0; i<res.length; i++){
        console.log(res[i].name);
    }
let rom=data.filter((ele)=>ele.population<200000);
for(let i=0; i<rom.length; i++){
console.log(rom[i].population + rom[i].name)
}
let 
Object.keys(obj).forEach((ele)=>{
    console.log(ele,obj[ele]);
    });
}


