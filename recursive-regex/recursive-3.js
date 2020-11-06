function inputNomor(nomor){
    if(nomor === 1){
        return 3;
    }else{
        return 2 * inputNomor(nomor - 1)
    }
}
console.log(inputNomor(1));
console.log(inputNomor(2));
console.log(inputNomor(3));
console.log(inputNomor(4));
console.log(inputNomor(5));