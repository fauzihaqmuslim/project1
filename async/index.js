let bendera = document.querySelector("#panggilBendera");
let url = 'https://restcountries.eu/rest/v2/all';

const getData = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    for(let i = 0; i <= 20; i++){
        let listApiNegara =` 
        <div class="col-12 col-lg-3 mt-3">
            <div class = "card">
                <img class="card-img-top" src="${data[i].flag}" alt="card image">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].name}</h5>
                    </div>
            </div>
        </div>
        `;
        bendera.innerHTML += listApiNegara
    }
};
getData();