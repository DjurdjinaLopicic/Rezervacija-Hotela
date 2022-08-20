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

    fetch(`https://rezervacija-hotela-rest.herokuapp.com/korisnici/${id}`, {
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
            informacije.innerHTML += `Username: <p>${data.username}</p>`;
            informacije.innerHTML += `Password: <p>${data.password}</p>`;
            informacije.innerHTML += `Ime: <p>${data.ime}</p>`;
            informacije.innerHTML += `Prezime: <p>${data.prezime}</p>`;
            informacije.innerHTML += `Email: <p>${data.email}</p>`;
            informacije.innerHTML += `Tip: <p>${data.tip}</p>`;
        }

    });



}