import {Hewan} from './hewan-buah-export.js';
import {Buah} from './hewan-buah-export.js';

var animal = new Hewan("kambing", "kuda", "sapi");
var fruit = new Buah("rambutan", "paya", "apel");


console.log(fruit);
console.log(animal);

let hewan = document.querySelector('#hewan');
hewan.innerHTML = `${animal.nama1}, ${animal.nama2}, ${animal.nama3}`;


let buah = document.querySelector('#buah');
buah.innerHTML = `${fruit.buah1}, ${fruit.buah2}, ${fruit.buah3}`;3