function init(){
    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const informacije = document.getElementById("informacije");
    id = urlParams.get('id');

    

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch(`https://rezervacija-hotela-rest.herokuapp.com/sobe/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data.msg != undefined){
            informacije.innerHTML += `<p>${data.msg}</p>`;
        }else{
            informacije.innerHTML += `id: <p>${data.id}</p>`;
            informacije.innerHTML += `Opis: <p>${data.opis}</p>`;
            informacije.innerHTML += `Cena:: <p>${data.cena}</p>`;
            informacije.innerHTML += `hotelId: <p>${data.hotelId}</p>`;
            informacije.innerHTML += `tipSobeId: <p>${data.tipSobeId}</p>`;
        }

    });



}