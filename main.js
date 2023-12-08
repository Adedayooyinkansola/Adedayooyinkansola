var w;
function startWorker() {
    if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
        w = new
        Worker("time.js");      
    }        
    w.onmessage = function(event) {
        document.getElementById("result").innerHTML = event.data;
        document.getElementById("results").innerHTML = event.data;
    };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}


var service = document.getElementById("servicing");
var img = document.getElementById("img")
var sib = document.getElementById("sib")

function openOrder(n) {
    img.style.transform = "translateY(-35px)";
    sib.style.height = "250px";
    service.style.display = "block";
    // for (let i = 0; i < 5; i++) {
    //     return openOrder(n);
    // }
    if (n = 0) {
        return openOrder(n);
    }

    if (n = 1) {
       return openOrder(n); 
    }

    if (n = 2) {
        return openOrder(n);
    }
}


function closeOrder(n) {
    service.style.display = "none";
    img.style.transform = "translateY(0px)";
    sib.style.height = "300px";
    // for (let i = 0; i < 5; i++) {
    //     return closeOrder(n);
    // }
    if (n = 0) {
        return closeOrder(n);
    }  else {
        return closeOrder(n);
    }
}


// function leaveIt() {
//     img.style.transform = "translateY(-35px)";
// }