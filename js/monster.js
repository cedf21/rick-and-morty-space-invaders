class Monster{
    constructor(position){
        gerados++;

        this.id = gerados;
        this.tamanhoTela = document.body.clientHeight;
        this.position = this.generatePosition(this.tamanhoTela);
        this.mon = `<div id='monster${this.id}' style='top:${this.position}px' class="monster">
            <img height='48' src='img/monster.png'/>
            </div>`;
        this.gerar();
    }

    gerar(){        
        document.body.innerHTML += this.mon;
        // console.log('teste')
    }

    generatePosition(maxPosition){
        
        var positionFinal = Math.random() * (maxPosition - 48);
        positionFinal = parseInt(positionFinal);
        arrayMonstros.push([positionFinal, positionFinal+48, this.id]);
            return positionFinal;
    }

}

