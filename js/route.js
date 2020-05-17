function planRoute(){

    const xmlRequest = new XMLHttpRequest();

    xmlRequest.onload = function(){
        var routeTime = document.getElementById("route-time");
        routeTime.innerHTML = this.responseText;
    }

    xmlRequest.open("POST", "http://localhost:5555/ohdm_traveler", true);
    xmlRequest.setRequestHeader("Content-Type", "application/json");

    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
            var json = JSON.parse(xmlRequest.responseText);
            //show response
            
        }
    }

    var data = JSON.stringify({"classofperson":document.getElementById("class-of-person").value,
     "transporttype":document.getElementById("transport-type").value,
     "waterwayincl":"true",
     "startpoint": {
        "latitude": document.getElementById("route-start-control-lat-input").value, 
        "longitude": document.getElementById("route-start-control-lon-input").value
     },
     "endpoint": {
        "latitude": document.getElementById("route-target-control-lat-input").value, 
        "longitude": document.getElementById("route-target-control-lon-input").value
     },
     "day":"2019-5-1",
     "restricted_area":{}
    })
    xmlRequest.send(data);

    console.log("Hello THere");
}