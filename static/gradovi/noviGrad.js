function init() {

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });


    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];


    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            naziv: document.getElementById('naziv').value,
        };


        if(data.naziv == ""){
            alert("Naziv ne sme biti prazan");
        }else{
            fetch('https://rezervacija-hotela-rest.herokuapp.com/gradovi', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    if (el.msg) {
                        alert(el.msg);
                    } else {
                        alert("Dodat");
                    }
                });
        }
    


    });
}