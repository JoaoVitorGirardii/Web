function touch(){
    var canvas = document.getElementById('canvas');
    var newPosTop =  Math.round((Math.random() * 110)).toString(5);
    var newPosLeft =  Math.round((Math.random() * 110)).toString(5);
    //prompt(newPos);
    //canvas.style.marginLeft = newPos;
    canvas.style = "margin-left:"+newPosLeft+"px; margin-top:"+newPosTop+"px";
    canvas.style.color = 'red';
}

function move(){
    var canvas = document.getElementById('canvas');
    var newPosTop =  Math.round((Math.random() * 110)).toString(5);
    var newPosLeft =  Math.round((Math.random() * 110)).toString(5);
    //prompt(newPos);
    //canvas.style.marginLeft = newPos;
    canvas.style = "margin-left:"+newPosLeft+"px; margin-top:"+newPosTop+"px";
    canvas.style.color = 'red';
}

function sim(){
    alert('EEEBA VC PAGA TE AMO');
}