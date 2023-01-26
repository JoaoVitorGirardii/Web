// var Line
var ExecLine = false;
var marPosLine = 0;
var SpeedLine = 1;
var voltaLine = false;
// var circle
var ExecCircle = false;
var Control = 0;
var voltaCircle = false;
var CirculoEmUmSentido = false;
var SpeedCircle = 0.01;
var angle = 0;
//var square
var ExecSquare = false;
var VoltaSquare = false;
var SpeedSquare = 1;
var QuadradoEmUmSentido = false;
var XSquare = 0;
var YSquare = 0;

function startLine() {ExecLine = true}

function stopLine() {ExecLine = false}

function startCircle() {ExecCircle = true}

function stopCircle() {ExecCircle = false}

function startSquare() {ExecSquare = true}

function stopSquare() {ExecSquare = false}

function speedLineUp() {SpeedLine++}

function speedLineDown() {SpeedLine--}

function speedCircleUp() {SpeedCircle += 0.01}

function speedCircleDown() {SpeedCircle -= 0.01}

function SpeedSquareUp() {
    // SpeedSquare++
    alert('speed buttons is a broken, sorry')
}

function SpeedSquareDown() {
    // SpeedSquare--
    alert('speed buttons is a broken, sorry')
}

function CirculoRetorna() {
    CirculoEmUmSentido = !CirculoEmUmSentido;
    const BtnRotacao = document.getElementById('BtnRotacao')
    if (CirculoEmUmSentido){
        BtnRotacao.innerHTML = 'Sentido ÚNICO'
    }else{
        BtnRotacao.innerHTML = 'DUPLO Sentido'
    }
}

setInterval(() => {
    //perform moviment block in a line
    if (ExecLine) { 
        const objLine = document.getElementById('line');
        const coordinatesLine = document.getElementById('pLine')

        if (!voltaLine){
            marPosLine += SpeedLine;
        }else{
            marPosLine-= SpeedLine;
        }

        objLine.style.transform = `translate(${marPosLine+'px'}, ${0})`;
        coordinatesLine.innerHTML = 'X:'+Math.round(parseInt(marPosLine))+' Y:00 <br> SPEED: '+SpeedLine;

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
            angle -= SpeedCircle;
        }else{
            angle += SpeedCircle;
        };

        const x = Math.cos(angle) * 75 + 'px';
        const y = Math.sin(angle) * 75 + 'px';

        objCircle.style.transform = `translate(${x}, ${y})`;
        coordinatesCircle.innerHTML = 'X:'+Math.round(parseInt(x))+' Y:'+Math.round(parseInt(y))+  '<br> SPEED: '+SpeedCircle;
    
        //condition to return
        if( Control > 635){
            voltaCircle = !voltaCircle;
            Control = 0;
        }
        //circle rotor control
        if (!CirculoEmUmSentido){
            Control ++;
        }
    }

    //perform moviment in a square
    if (ExecSquare){
        const objSquare = document.getElementById('square');
        const coordinatesSquare = document.getElementById('pSquare');

        if(!VoltaSquare){

            if (XSquare < 200 && YSquare == 0){XSquare += SpeedSquare}
            if (XSquare >= 200 && YSquare < 200){YSquare += SpeedSquare}
            if (YSquare == 200 && XSquare > 0){XSquare -= SpeedSquare}
            if (YSquare <= 200 && XSquare == 0){YSquare -= SpeedSquare}
            if (XSquare == 0 && YSquare == 1){VoltaSquare = true}

        }else{

            if (XSquare == 0 && YSquare < 200){YSquare += SpeedSquare}
            if (YSquare == 200 && XSquare < 200){XSquare += SpeedSquare}
            if (XSquare == 200 && YSquare > 0){YSquare -= SpeedSquare}
            if (YSquare == 0 && XSquare > 0){XSquare -= SpeedSquare}
            if(XSquare == 0 && YSquare == 0){VoltaSquare = false}

        }
        
        objSquare.style.transform = `translate(${XSquare+'px'}, ${YSquare+'px'})`;
        coordinatesSquare.innerHTML = 'X:'+XSquare + ' Y:'+YSquare;
    }

}, 1);



