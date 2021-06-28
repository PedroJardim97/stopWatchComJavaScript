let ss = 0;
let mm = 0;
let hr = 0;
var time;



function Controlador() { 
    time = setInterval(Contador, 400)
    document.querySelector('.star').disabled = true;
    
}

function Contador () {
    ss = ss +1

    if(ss == 60) {
        ss = 0
        mm = mm +1
    }

    if (mm == 60) {
        mm = 0
        hr = hr +1
    }
    
       var formatHH = (hr < 10 ? '0' + hr : hr)
       var formatMM = (mm < 10 ? '0' + mm : mm ) 
       var formatSS = (ss < 10 ? '0' + ss : ss)
       document.querySelector('.hr').innerHTML = formatHH
       document.querySelector('.mm').innerHTML = formatMM
       document.querySelector('.ss').innerHTML = formatSS
 }

 function refresh() {
     ss = 0;
     mm = 0;
     hr = 0;
     document.querySelector('.hr').innerHTML = '00'
     document.querySelector('.mm').innerHTML = '00'
     document.querySelector('.ss').innerHTML = '00'
}

function pause() {
     clearInterval(time);
     document.querySelector('.star').disabled = false;
}

