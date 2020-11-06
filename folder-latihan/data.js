//REGEX
//====================
// literal
// i = case in sesitive
// g = global(cari semua)

// const regex1 = /monkeys/i
// const regex2 = new RegExp("monkeys")

// console.log(regex1.test("MONKEYS"))

//match
// const regex1 = /d/ig

// console.log("David Winalda".match(regex1))

//karakter set
// \d digit 0-9
// \w char A-Z a-z 0-9 _
// \s space tab newline
// ==========================
// \D tidak mengandung digit 0-9
// \W tidak mengandung char A-Z a-z 0-9 _
// \S tidak mengandung space tab newline
// const regex3 = /\d/g
// console.log("123 David Winalda 99".match(regex3))

// char set dengan []
// const regex4 = /[0-9]/g;
// console.log("1234567").match(regex4);

//quantifer
// ^ start of string
// $ end of string

// const regex5 = /^roar/;
// console.log("roar 123123".match(regex5));

// const myRegex = /[^A-Z]/;
// const myName = "Oji";

// if(myName.toUpperCase){
//     return 'Nama mengandung Huruf besar';
// }else{
//     (myName.toLowerCase{
//         return 'Nama mengandung huruf kecil';
//     }
// }


//alternation = atau
// const regex6 = /081./;
// // console.log("081C".match(regex6));


// RECRUSIF
//==========================

// function countDown(number){
//     if(number === 0){
//         return;
//     }else{
//         console.log(number);
//         countDown(number -1);
//     }
// }
// countDown(5);

// function totalNumber(number){
//     if(number === 0){
//         return number;
//     }else{
//         return number + totalNumber (number -1)
//     }
// }
// console.log(totalNumber(5))

//latihan tugas regex 


//latihan-tugas 1
// function angkaFaktorial(angka) {
//     let faktor = 1;
  
//     for (let i = 2; i <= angka; i++) {
//       faktor = faktor * i;
//     }
  
//     return faktor;
//   }
  
//   console.log(angkaFaktorial(4));

//latihan tugas-2
// function countDown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 2;

//     if(nextNumber > 0){
//         countDown(nextNumber);
//     }
// }
// countDown(10);

//latihan tugas-3
