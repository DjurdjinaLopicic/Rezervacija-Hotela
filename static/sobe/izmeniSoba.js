function init() {



    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    

    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const informacije = document.getElementById("informacije");
    id = urlParams.get('id');


    fetch(`https://rezervacija-hotela-rest.herokuapp.com/sobe/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data.msg != undefined){
            alert(data.msg);
        }else{
            document.getElementById("opis").value = data.opis;
            document.getElementById("cena").value = data.cena;
            document.getElementById("hoteld").value = data.hotelId;
            document.getElementById("tipSobeId").value = data.tipSobeId;
        }

    });




        fetch('https://rezervacija-hotela-rest.herokuapp.com/hoteli', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( d => {
            const button = document.getElementById("btn");
            const hoteli = document.getElementById("hoteld");

            d.forEach( el => {
                var op = document.createElement('option');
                op.value = el.id;
                op.innerHTML = el.naziv;
                hoteli.appendChild(op);
            });
            fetch('https://rezervacija-hotela-rest.herokuapp.com/tipoviSoba', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then( res => res.json())
            .then( dt => {
                const tipovi = document.getElementById("tipSobeId");
    
                dt.forEach( ele => {
                    var op = document.createElement('option');
                    op.value = ele.id;
                    op.innerHTML = ele.tip;
                    tipovi.appendChild(op);
                });
    
                button.disabled = false;
            });
        });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });



    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            opis: document.getElementById('opis').value,
            cena: document.getElementById('cena').value,
            hotelId: document.getElementById('hoteld').value,
            tipSobeId: document.getElementById('tipSobeId').value,
        };

        if(parseInt(data.cena) <= 0){
            alert("Cena mora biti veca od nule");
        }else if(data.opis == ""){
            alert("Opis ne sme biti prazan");
        }else{
            fetch(`https://rezervacija-hotela-rest.herokuapp.com/sobe/${id}`, {
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