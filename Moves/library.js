// var Line
var ExecLine = false;
var marPosLine = 0;
var voltaLine = false;
// var circle
var ExecCircle = false;
var Control = 0;
var voltaCircle = false;
var angle = 0;
//var square
var ExecSquare = false;
var VoltaSquare = false;
var XSquare = 0;
var YSquare = 0;

function startLine() {ExecLine = true}

function stopLine() {ExecLine = false}

function startCircle() {ExecCircle = true}

function stopCircle() {ExecCircle = false}

function startSquare() {ExecSquare = true}

function stopSquare() {ExecSquare = false}

setInterval(() => {
    //perform moviment block in a line
    if (ExecLine) { 
        const objLine = document.getElementById('line');
        const coordinatesLine = document.getElementById('pLine')

        if (!voltaLine){
            marPosLine ++;
        }else{
            marPosLine--;
        }

        objLine.style.marginLeft =  marPosLine+"px";
        coordinatesLine.innerHTML = 'X:'+Math.round(parseInt(marPosLine))+' Y:00';

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
        const objCircle = document.getElementById('circle');
        const coordinatesCircle = document.getElementById('pCircle')
        if (voltaCircle){
            angle -= 0.01;
        }else{
            angle += 0.01;
        };

        const x = Math.cos(angle) * 75 + 'px';
        const y = Math.sin(angle) * 75 + 'px';

        objCircle.style.transform = `translate(${x}, ${y})`;
        coordinatesCircle.innerHTML = 'X:'+Math.round(parseInt(x))+' Y:'+Math.round(parseInt(y));
    
        //condition to return
        if( Control > 635){
            voltaCircle = !voltaCircle;
            Control = 0;
        }
        //circle rotor control
        Control ++;
    }

    //perform moviment in a square
    if (ExecSquare){
        const objSquare = document.getElementById('square');
        const coordinatesSquare = document.getElementById('pSquare');

        if (XSquare < 400 && YSquare == 0){
            XSquare += 1;
        }
        
        if (XSquare >= 400 && YSquare < 100){
            YSquare += 1;
        }
        
        if (YSquare == 100 && XSquare > 0){
            XSquare -= 1;
        }

        if (YSquare <= 100 && XSquare == 0){
            YSquare -= 1;
        }


        objSquare.style.transform = `translate(${XSquare+'px'}, ${YSquare+'px'})`;
        coordinatesSquare.innerHTML = 'X:'+XSquare + ' Y:'+YSquare;
    }

}, 10);



