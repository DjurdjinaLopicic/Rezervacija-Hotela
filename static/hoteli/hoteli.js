function init(){
    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });




    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('https://rezervacija-hotela-rest.herokuapp.com/hoteli', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        const tabela = document.getElementById("tabela");

        data.forEach( el => {
            tabela.innerHTML += `<tr>`;

            
         
            tabela.innerHTML += `<td> ${el.id} </td> <td> ${el.naziv} </td> <td> ${el.opis} </td> <td> ${el.gradId} </td>`;
     
            var izmeni = document.createElement("a");
            s = `/admin/hoteli/izmeni?id=${el.id}`;
            izmeni.setAttribute("href", s);
            izmeni.innerHTML = "Izmeni "
            tabela.innerHTML += `<td>`;
            tabela.appendChild(izmeni);  

            var obrisi = document.createElement("a");
            s = `/admin/hoteli/obrisi?id=${el.id}`;
            obrisi.setAttribute("href", s);
            obrisi.innerHTML = "Obrisi "
            tabela.appendChild(obrisi);

            var prikazi = document.createElement("a");
            s = `/admin/hoteli/prikazi?id=${el.id}`;
            prikazi.setAttribute("href", s);
            prikazi.innerHTML = "Prikazi "
            tabela.appendChild(prikazi);
            tabela.innerHTML += `</td>`
            tabela.innerHTML += `</tr>`;
        });

    });



}