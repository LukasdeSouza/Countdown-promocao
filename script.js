'use strict'

const atualizar = (tempo) =>{
    const segundos = document.getElementById('segundos');
    segundos.textContent = tempo
}


const contagemRegressiva = (tempo) =>{
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if(tempo === 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
   
    const id = setInterval(contar, 1000);

}
contagemRegressiva(100);