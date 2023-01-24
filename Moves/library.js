// var Line
var ExecLine = false;
var marPosLine = 0;
var voltaLine = false;
// var circle
var ExecCircle = false;
var Control = 0;
var voltaCircle = false;
let angle = 0;
//var square
var ExecSquare = false;


function startLine(vlr){ExecLine = vlr}

function stopLine(vlr) {ExecLine = vlr}

function startCircle(vlr){ExecCircle = vlr}

function stopCircle(vlr) {ExecCircle = vlr}

setInterval(() => {
    //perform moviment block in a line
    if (ExecLine) { 
        const obj = document.getElementById('line');

        if (!voltaLine){
            marPosLine ++;
        }else{
            marPosLine--;
        }

        obj.style.marginLeft =  marPosLine+"px";
        obj.innerHTML = marPosLine;

        //if bigger then i want go to the left
        if (marPosLine > 400){
            voltaLine = true;
        }

        //if smaller than i want go to the right
        if (marPosLine < 0){
            voltaLine = false;
        }
    };

    //perform moviment in a circle
    if (ExecCircle){
        const obj = document.getElementById('circle');

        if (voltaCircle){
            angle -= 0.01;
        }else{
            angle += 0.01;
        };

        const x = Math.cos(angle) * 75 + 'px';
        const y = Math.sin(angle) * 75 + 'px';

        obj.style.transform = `translate(${x}, ${y})`;
        obj.innerHTML = 'X:'+Math.round(parseInt(x))+' Y:'+Math.round(parseInt(y));
    
        //condition to return
        if( Control > 635){
            voltaCircle = !voltaCircle;
            Control = 0;
        }
        //circle rotor control
        Control ++;
    }
}, 10);



