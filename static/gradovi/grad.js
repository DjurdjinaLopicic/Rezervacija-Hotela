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

    fetch(`http://127.0.0.1:8500/gradovi/${id}`, {
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
            informacije.innerHTML += `Naziv: <p>${data.naziv}</p>`;
        }

    });



}