let buahMap = [
  {
    imgBuah: "images/apel.jpg",
    namaBuah: "apel",
    rasaBuah: "manis",
    warnaBuah: "merah",
  },
  {
    imgBuah: "images/pisang.jpg",
    namaBuah: "pisang",
    rasaBuah: "manis",
    warnaBuah: "kuning ada yg ijo",
  },
  {
    
    imgBuah: "images/semangka.jpg",
    namaBuah: "semangka",
    rasaBuah: "manis",
    warnaBuah: "kulitnya ijo, dalemnya merah",
  },
];
const listElement = document.getElementById("idGambar");

listElement.innerHTML = buahMap.map(
  (buah) => `
        <div class="card">
            <img src="${buah.imgBuah}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${buah.namaBuah}</h5>
                <p class="card-text">${buah.rasaBuah}</p>
                <p class="card-text">${buah.warnaBuah}</p>
            </div>
        </div>
`
);