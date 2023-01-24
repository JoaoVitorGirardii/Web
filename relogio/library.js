window.onload = getHour();

function getHour(){
    var Hour = new Date();
    var Tempo = Hour.toLocaleTimeString();

    document.getElementById('clock').innerHTML = Tempo;

    document.getElementById('hoursLeft').innerHTML = Tempo[0];
    document.getElementById('hoursRight').innerHTML = Tempo[1];

    document.getElementById('minuteLeft').innerHTML = Tempo[3];
    document.getElementById('minuteRight').innerHTML = Tempo[4];

    document.getElementById('secondLeft').innerHTML = Tempo[6];
    document.getElementById('secondRight').innerHTML = Tempo[7];

    setTimeout(getHour, 1000);
}



