let bendera = document.querySelector("#a");
let url = 'https://api.github.com/users/fauzihaqmuslim';

const getData = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
        let listApiNegara =` 
        <div class="col-12 col-lg-3 mt-3">
            <div class = "card">
                <img class="card-img-top" src="${data.avatar_url}" alt="card image">
                    <div class="card-body">
                        <h5 class="card-title">${data.login}</h5>
                    </div>
            </div>
        </div>
        `;
        bendera.innerHTML += listApiNegara
    }
getData();