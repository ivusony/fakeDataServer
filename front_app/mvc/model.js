function model(url){


    var request = new XMLHttpRequest();
    
    //'http://localhost:3000/xmlData'

    request.open('GET', url, true);

    request.onload = function(data){
        console.log(request.responseText);
        console.log("================================================");
        console.log(request.responseType);
        console.log("================================================");
        console.log(request.responseXML);

        // var parser = new DOMParser();
        // var xmlDoc = parser.parseFromString(request.responseText,"text/xml");

        // console.log(xmlDoc);

        
    }

    request.onerror = function(error){
        console.log('Something went wrong');
        console.log(error);
    }

    request.send();
}

module.exports = model;