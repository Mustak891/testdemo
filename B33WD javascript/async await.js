// async function foo(){
// try{
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let res1 = await res.json;
//     console.log(res1);
// }catch(error){
// console.log(error)
// }
// }foo()

async function foo(){
    try {
    let res=await fetch("https://restcountries.com/v2/all");
    let res1=await res.json();
    for(let i=0; i<res1.length; i++){
        let ans = document.createElement("div");
        ans.innerHTML=res1[i].name;
        document.body.append(ans);
    };
    } catch (error) {
        console.log(error);
    }
    }
    
    
    
    foo();