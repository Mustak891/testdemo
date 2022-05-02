var tem=fetch("https://restcountries.com/v3.1/all");
 tem.then((data)=>data.json()).
 then((data1)=>{
     for (var i=0;i<data1.length;i++){
     row.append( final(data1[i].name.common,data1[i].flags.png,data1[i].capital,data1[i].region,data1[i].fifa));
     }
 }).catch((error)=>console.log(error))


 let box = element("div","box");
 let container = element("div","container");
 let row = element("div","row");
 container.append(row);
 box.append(container);
 document.body.append(box);

 function final(countryname, img, capital, region, countrycode){
     let column = element("div","col-lg-4  col-sm-12");
     let card = element("div","card");
    // let card = document.createElement("div");
    // card.setAttribute("class","card");
     let cardheader = element("div","card-header");
     let cardbody = element("div","card-body");
     let mark = element("div","temp");
     let namediv = element("div","namediv");

     let nameheading = element("h5","card-title");
     nameheading.innerHTML=`country name : ${countryname}`
     let image = document.createElement("img");
     image.setAttribute("src",img);
     image.className="card-img-top";
     let cap = element("h5","card-title");
     cap.innerHTML=`capital : ${capital}`;
     let reg = element("h5","card-title");
     reg.innerHTML=`region : ${region}`;
     let cont = element("h5","card-title");
     cont.innerHTML=`countrycode : ${countrycode}`;
     let anchor = document.createElement("a");
     anchor.setAttribute("href","#");
     anchor.className="btn btn-outline-danger";
     anchor.innerHTML="Press for whether";

     mark.append(namediv,image,cap,reg,anchor);
     cardheader.append(cardbody);
     card.append(cardheader);
     cardbody.append(mark);
     column.append(card);
     namediv.append(nameheading);

      return column;

 }

function element(tag, classname){
    var ele = document.createElement(tag);
    ele.className=classname;
    return ele;
}