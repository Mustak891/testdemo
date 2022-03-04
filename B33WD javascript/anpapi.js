let request =new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload=function(){
    let dat= JSON.parse(request.response);
        console.log(`author name: ${dat.authors} book isbn: ${dat.isbn} numberOfPages: ${dat.numberOfPages} publisher: ${dat.publisher}`);
    }


