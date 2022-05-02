var button=document.getElementById("button");
button.addEventListener("click", searchphotos);

function searchphotos(){
    let client_id = "ouPEmoFn14da45wC97JoM-9ifLbSfYKYgu5isaPJ0wQ";
    let search = document.getElementById("search").value;
    let url = `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${search}`;
    let result = document.getElementById("result");

    //make request to api
    fetch(url)
    .then((data)=>{
        return data.json();
    })
    .then(data1=>{
        return result.innerHTML=`<img src="${data1.results[1].urls.raw}"/>`
        // for(let i=0; i<data.length; i++){
        //     console.log(data[i])
        //     let result = document.getElementById("result");
        //     result.innerHTML = `<img src="${data[i].photo.urls.regular}">`
        // }
    })


}

