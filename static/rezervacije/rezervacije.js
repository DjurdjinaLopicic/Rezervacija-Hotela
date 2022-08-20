function init(){
    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/';
    });






    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('https://rezervacija-hotela-rest.herokuapp.com/rezervacije', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        const tabela = document.getElementById("tabela");

        data.forEach( el => {
            tabela.innerHTML += `<tr>`;

            tabela.innerHTML += `<td> ${el.id} </td> <td> ${el.datumPocetka} </td> <td> ${el.datumKraja} </td> <td> ${el.korisnikId} </td>  <td> ${el.sobaId} </td>`;
     
            var izmeni = document.createElement("a");
            s = `/admin/rezervacije/izmeni?id=${el.id}`;
            izmeni.setAttribute("href", s);
            izmeni.innerHTML = "Izmeni "
            tabela.innerHTML += `<td>`;
            tabela.appendChild(izmeni);  

            var obrisi = document.createElement("a");
            s = `/admin/rezervacije/obrisi?id=${el.id}`;
            obrisi.setAttribute("href", s);
            obrisi.innerHTML = "Obrisi "
            tabela.appendChild(obrisi);

            var prikazi = document.createElement("a");
            s = `/admin/rezervacije/prikazi?id=${el.id}`;
            prikazi.setAttribute("href", s);
            prikazi.innerHTML = "Prikazi "
            tabela.appendChild(prikazi);
            tabela.innerHTML += `</td>`
            tabela.innerHTML += `</tr>`;
        });

    });



}