/*class car{
    constructor(brand, color, series){
        this.brand=brand;
        this.color=color;
        this.series=series;
    }    
}
var s1 =new car ("audi","white","a6",);
var s2 =s1;
//var s2 =new car ("bmw", "black", "a3");
//console.log(s1,s2);*/
var student =[{name:"jhon", marks:30},{name:"alice", marks:40},{name:"bob", marks:50}];
var res = student.filter((element)=>{
    if(element.marks>30){
        console.log(student.name);
    }else("error")
    
});

console.log(res);