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

    

    fetch(`https://rezervacija-hotela-rest.herokuapp.com/tipoviSoba/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data.msg != undefined){
            alert("Greska");
        }else{
            document.getElementById("tip").value = data.tip;
        }

    });

    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            tip: document.getElementById('tip').value,
        };


        if(data.tip == ""){
            alert("Tip sobe ne sme biti prazan");
        }else{
            fetch(`https://rezervacija-hotela-rest.herokuapp.com/tipoviSoba/${id}`, {
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