function init() {



    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');

    fetch(`https://rezervacija-hotela-rest.herokuapp.com/rezervacije/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data.msg != undefined){
            alert(data.msg);
        }else{
            document.getElementById("datumPocetka").value = data.datumPocetka;
            document.getElementById("datumKraja").value = data.datumKraja;
        }

    });

        fetch('https://rezervacija-hotela-rest.herokuapp.com/korisnici', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then( res => res.json())
        .then( d => {
            const button = document.getElementById("btn");
            const korisnici = document.getElementById("korisnikId");

            d.forEach( el => {
                var op = document.createElement('option');
                op.value = el.id;
                op.innerHTML = el.username;
                korisnici.appendChild(op);
            });
            fetch('https://rezervacija-hotela-rest.herokuapp.com/sobe', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then( res => res.json())
            .then( dt => {
                const sobe = document.getElementById("sobaId");
    
                dt.forEach( ele => {
                    var op = document.createElement('option');
                    op.value = ele.id;
                    op.innerHTML = ele.id;
                    sobe.appendChild(op);
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
            datumPocetka: document.getElementById('datumPocetka').value,
            datumKraja: document.getElementById('datumKraja').value,
            korisnikId: document.getElementById('korisnikId').value,
            sobaId: document.getElementById('sobaId').value,
        };
        console.log(data.datumPocetka);

            if(data.datumPocetka == ""){
                alert("Datum pocetka mora biti zabran");
            }else if(data.datumKraja == ""){
                alert("Datum kraja mora biti zabran");
            }else if(data.datumPocetka > data.datumKraja){
                alert("Datum pocetka mora biti pre datuma kraja");
            }else{
            fetch(`https://rezervacija-hotela-rest.herokuapp.com/rezervacije/${id}`, {
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