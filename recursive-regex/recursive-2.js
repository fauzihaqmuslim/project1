function bilGenap(drNomor){
    console.log(drNomor);
    let isiNomor = drNomor - 2;

    if(isiNomor > 0){
        bilGenap(isiNomor);
    }
}
bilGenap(10);