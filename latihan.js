String.prototype.hurufBesar = function()  {
    return this.toUpperCase()
}

String.prototype.panjang = function()  {
    return this[0]
}
console.log("halo".panjang())


//function biasa
function hurufBesar(String){
    return String.toUpperCase()
}
console.log(hurufBesar("halo"))

