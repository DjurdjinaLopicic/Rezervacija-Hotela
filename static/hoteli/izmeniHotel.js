function init() {



    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    


    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');


    
    fetch(`http://127.0.0.1:8500/hoteli/${id}`, {
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
            document.getElementById("opis").value = data.opis;
        }

    });




        fetch('http://127.0.0.1:8500/gradovi', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( d => {
            const button = document.getElementById("btn");
            const gradovi = document.getElementById("gradId");

            d.forEach( el => {
                var op = document.createElement('option');
                op.value = el.id;
                op.innerHTML = el.naziv;
                gradovi.appendChild(op);
            });

            button.disabled = false;
        });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });



    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            naziv: document.getElementById('naziv').value,
            opis: document.getElementById('opis').value,
            gradId: document.getElementById('gradId').value,
        };

        if(data.naziv == ""){
            alert("Naziv sme biti prazan");
        }else if(data.opis == ""){
            alert("Opis ne sme biti prazan");
        }else{
            fetch(`http://127.0.0.1:8500/hoteli/${id}`, {
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
                        alert("Dodat");
                    }
                });
        }
    


    });
}