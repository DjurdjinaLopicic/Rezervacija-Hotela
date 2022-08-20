function init() {



    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    
        fetch('https://rezervacija-hotela-rest.herokuapp.com/gradovi', {
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
            fetch('https://rezervacija-hotela-rest.herokuapp.com/hoteli', {
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