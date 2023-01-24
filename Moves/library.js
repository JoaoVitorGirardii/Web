// var Line
var ExecLine = false;
var marPosLine = 0;
var voltaLine = false;
// var circle
var ExecCircle = false;
var voltaCircle = false;
let angle = 0;

function startLine(vlr){
    ExecLine = vlr;
    return(ExecLine);
}

function stopLine(vlr) {
    ExecLine = vlr;
    return(ExecLine);
}

function startCircle(vlr){
    ExecCircle = vlr;
    return(ExecLine);
}

function stopCircle(vlr) {
    ExecCircle = vlr;
    return(ExecLine);
}

setInterval(() => {
    //perform moviment block in a line
    if (ExecLine) { 
        const obj = document.getElementById('line');

        if (!voltaLine){
            obj.style.marginLeft =  marPosLine+"px";
            obj.innerHTML = marPosLine;
            marPosLine += 2;
        }else{
            obj.style.marginLeft =  marPosLine+"px";
            obj.innerHTML = marPosLine;
            marPosLine -= 2;
        }

        if (marPosLine > 398){
            voltaLine = true;
        }

        if (marPosLine < 2){
            voltaLine = false;
        }
    };

    //perform moviment in a circle
    if (ExecCircle){
        const obj = document.getElementById('circle');

        angle += 0.01;

        const x = Math.cos(angle) * 75 + 'px';
        const y = Math.sin(angle) * 75 + 'px';

        obj.style.transform = `translate(${x}, ${y})`;
        obj.innerHTML = 'X:'+Math.round(parseInt(x))+' Y:'+Math.round(parseInt(y));
    
    }
}, 10);



