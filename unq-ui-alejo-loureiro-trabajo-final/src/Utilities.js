export const findDatos = (list, juego) => {
    //devuelve los datos del juego dentro de la lista
    for (let i = 0; i < list.length; i++){
        if (list[i].juego === juego) {
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

export const puntos = (juego,n) => {
    if (juego === "1"){
        return 1*n;
    }
    if (juego === "2"){
        return 2*n;
    }
    if (juego === "3"){
        return 3*n;
    }
    if (juego === "4"){
        return 4*n;
    }
    if (juego === "5"){
        return 5*n;
    }
    if (juego === "6"){
        return 6*n;
    }
    if (juego === "Escalera"){
        return 20;
    }
    if (juego === "Full"){
        return 30;
    }
    if (juego === "Poker"){
        return 40;
    }
    if (juego === "Generala"){
        return 60;
    }
}

const hayNumero = (dados,nro) => {
    for(let i = 0; i < dados.length;i++){
        if(dados[i].numero === nro){
            return true;
        }
    }
    return false;
}

export const esEscalera = (dados) => {
    const sortedDados = dados.map(dado => dado.numero).sort();
    let result = false;
    for(let i = 0; i < dados.length - 1;i++){
        if(sortedDados[i] === (sortedDados[i+1] - 1)){
            result = true;
        } else {
            return false;
        }
    }
    return result;
}

const esFull = (dados) => {
    // nnmmm nnnmm
    const numeros = dados.map(dado => dado.numero).sort();

    const n1 = numeros[0];
    const n2 = numeros[1];
    const n3 = numeros[2];
    const n4 = numeros[3];
    const n5 = numeros[4];

    // nnnmm
    if (n1 === n2 && n2 === n3 && n3 !== n4 && n4 === n5){
        return true;
    // nnmmm
    } else if (n1 === n2 && n2 !== n3 && n3 === n4 && n4 === n5){
        return true;
    } else {
        return false;
    }
}

const esPoker = (dados) => {
    // nmmmm nnnnm
    const numeros = dados.map(dado => dado.numero).sort();

    const n1 = numeros[0];
    const n2 = numeros[1];
    const n3 = numeros[2];
    const n4 = numeros[3];
    const n5 = numeros[4];

    if (n1 === n2 && n2 === n3 && n3 === n4){
        return true;
    } else if (n2 === n3 && n3 === n4 && n4 === n5){
        return true;
    } else {
        return false;
    }
}

export const esGenerala = (dados) => {
    const numeros = dados.map(dado => dado.numero);
    let result = false;
    for (let i = 0; i < numeros.length - 1; i++){
        if (numeros[i] === numeros[i+1]){
            result = true;
        } else {
            return false;
        }
    }
    return result;
}