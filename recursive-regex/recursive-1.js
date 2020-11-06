// latihan-tugas 1

function angkaFaktorial(angka) {
    let faktor = 1;
  
    for (let i = 2; i <= angka; i++) {
        
      faktor = faktor * i;
    }
  
    return faktor;
  }
  
  console.log(angkaFaktorial(4));