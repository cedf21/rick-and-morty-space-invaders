class Nave{
    constructor(id, position){

        this.id = id;
        this.tamanhoTela = document.body.clientWidth;
        
        this.positionDispare  = 0;
        this.inter = 0;
        this.position = position;
    }
    movimentar(){
        this.inter = setInterval(()=>{
        
        if(this.positionDispare > this.tamanhoTela){
            var element = document.querySelector("#"+this.id);
            console.log('limpo');
            element.parentNode.removeChild(element);
            stop(this.inter);
        }
        else{

            if(this.positionDispare > this.tamanhoTela - 20){
                arrayMonstros.map((valores, indice)=>{
                    console.log(this.position+27);
                    if(this.position+27 > valores[0] && this.position+27 < valores[1]){
                        
                        var element = document.querySelector("#monster"+valores[2]);
                        element.parentNode.removeChild(element);
                        arrayMonstros.splice(indice, 1);
                        pontuacao++;
                        document.querySelector("#pontuacao").innerText = pontuacao;
                    }

                })
            }
          
            this.positionDispare+=20;

            document.querySelector("#"+this.id).style.left = this.positionDispare +'px';

        }

    },50);
    }


}
