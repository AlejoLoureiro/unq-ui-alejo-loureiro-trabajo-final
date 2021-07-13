export const findDatos = (list, juego) => {
    for (let i = 0; i < list.length; i++){
        if (list[i].juego == juego) {
            return list[i];
        }
    }
}

export const calcularJuegos = (dados) => {
    let result = [];
    if (hayNumero(dados, 1)){
        result.push("1");
    }
    if (hayNumero(dados,2)){
        result.push("2");
    }
    if (hayNumero(dados,3)){
        result.push("3");
    }
    if (hayNumero(dados,4)){
        result.push("4");
    }
    if (hayNumero(dados,5)){
        result.push("5");
    }
    if (hayNumero(dados,6)){
        result.push("6");
    }
    if (esEscalera(dados)){
        result.push("Escalera");
    }
    if (esFull(dados)){
        result.push("Full");
    }
    if (esPoker(dados)){
        result.push("Poker");
    }
    if (esGenerala(dados)){
        result.push("Generala");
    }

    return result;
}

const hayNumero = (dados,nro) => {
    for(let i = 0; i < dados.length;i++){
        if(dados[i].numero == nro){
            return true;
        }
    }
    return false;
}

const esEscalera = (dados) => {
    const sortedDados = dados.sort()
    let prevNum = 0;
    for(let i = 1; i < dados.length;i++){
        
    }
    return false;
}

const esFull = (dados) => {

}

const esPoker = (dados) => {
    
}

const esGenerala = (dados) => {
    
}