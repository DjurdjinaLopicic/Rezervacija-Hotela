function init() {

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });


    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');

    fetch(`http://127.0.0.1:8500/gradovi/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data.msg != undefined){
            alert(data.msg);
        }else{
            document.getElementById("naziv").value = data.naziv;
        }

    });


    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            naziv: document.getElementById('naziv').value,
        };


        if(data.naziv == ""){
            alert("Naziv ne sme biti prazan");
        }else{
            fetch(`http://127.0.0.1:8500/gradovi/${id}`, {
                method: 'PUT',
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
                        alert("Izmenjen");
                    }
                });
        }
    


    });
}