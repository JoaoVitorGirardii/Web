function moveBtn() {
    const btn = document.getElementById("btnNO")
    var largura = window.screen.width;

    var tamanhoOK = false;
    while (!tamanhoOK) {
        var x = Math.random() * 250;
        var y = Math.random() * 250;

        if (largura > y){
            tamanhoOK = true;
        }
    }
    

    btn.style.transform = `translate(${x+'px'},${y+'px'})`;
}

function clicou() {
    alert("congratulations")
}

function desistiu() {
    if(confirm("are you going to give up?")){
        window.close();
    }
}