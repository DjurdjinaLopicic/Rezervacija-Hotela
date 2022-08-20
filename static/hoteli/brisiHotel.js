function init(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');

    

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch(`https://rezervacija-hotela-rest.herokuapp.com/hoteli/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then( res => res.json())
    .then( data => {
        if(data.msg != undefined){
            alert(data.msg);
            window.location.href = '/admin/hoteli';
        }else{
            window.location.href = '/admin/hoteli';
        }

    });



}