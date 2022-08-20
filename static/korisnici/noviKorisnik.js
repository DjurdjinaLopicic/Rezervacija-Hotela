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
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            ime: document.getElementById('ime').value,
            prezime: document.getElementById('prezime').value,
            email: document.getElementById('email').value,
            tip: parseInt(document.getElementById('tip').value)
        };

        if(data.username == ""){
            alert("Username ne sme biti prazan");
        }else if(data.password.length < 5){
            alert("Password mora imati barem 5 karaktera")
        }else if(data.ime == ""){
            alert("Ime ne sme biti prazan");
        }else if(data.prezime == ""){
            alert("Prezime ne sme biti prazno");
        }else{
            fetch('https://rezervacija-hotela-rest.herokuapp.com/korisnici', {
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