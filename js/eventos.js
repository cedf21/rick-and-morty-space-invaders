var obj = {
    'ArrowDown': ()=>{
        var elem = movimento();
        topE+= weightMoviment;
        elem.style.top  = topE + 'px';
    },
    'ArrowUp': ()=>{
        var elem = movimento();
        topE-= weightMoviment;
        elem.style.top  = topE + 'px';
    },
    ' ': ()=>{
        disparar()
    }
}

window.addEventListener('keydown', function(e){
    var objeto = obj[e.key];
    objeto();
});

function movimento(){
    return document.querySelector(".ponto");
}


function disparar(){
    
    var idDisparo = 'disparo'+contagemdisparo;
        contagemdisparo++;
        var doc = `<div id='${idDisparo}' class="pontodisparo"></div>`;
        document.body.innerHTML += doc;

        var d = document.querySelector('#'+idDisparo);
        d.style.top = (topE + 27) + "px";
        d.style.left = 50 + "px";
        var dd = new Nave(idDisparo, topE);
        dd.movimentar();
}




function stop(inter){
    clearInterval(inter);
}


function iniciarjogo(maximoMonstros, tempoDisparo){
    
    var audio = new Audio('audio/audio.mp3');
    audio.play();
 
    var geradorMonstros = setInterval(()=>{
    if(gerados > maximoMonstros){
     clearInterval(geradorMonstros);

    }else{
        var monster = new Monster();

     
    }

},2000);


setInterval(disparar, tempoDisparo);

document.querySelector('#menu').style.display= 'none';

}