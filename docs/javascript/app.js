function abrirMenu(){
    let nav = document.getElementById('navresponsive__')
        nav.classList.toggle('navresponsive__Open')
    let ico = document.getElementById('navresponsive__ico')
        ico.classList.toggle("fa-x")
}

function cerrarMenu(){
    let nav = document.getElementById('navresponsive__')
        nav.classList.toggle('navresponsive__Open')
        let ico = document.getElementById('navresponsive__ico')
        ico.classList.toggle("fa-x")
}

function vermas(a){
    let texto = document.getElementsByClassName('habilidades__container-divfooter');
    if(a==0){
        let boton1 = document.getElementById('frontp1')
        boton1.classList.toggle('habilidades__container-p-open')
        if(boton1.classList.contains('habilidades__container-p-open')){
            texto[0].textContent = 'Mostrar menos'
        }
        if(!boton1.classList.contains('habilidades__container-p-open')){
            texto[0].textContent = 'Ver más'
        }
    }
    if(a==1){
        let boton2 = document.getElementById('frontp2')
        boton2.classList.toggle('habilidades__container-p-open')
        if(boton2.classList.contains('habilidades__container-p-open')){
            texto[1].textContent = 'Mostrar menos'
        }
        if(!boton2.classList.contains('habilidades__container-p-open')){
            texto[1].textContent = 'Ver más'
        }
    }
    if(a==2){
        let boton3 = document.getElementById('frontp3')
        boton3.classList.toggle('habilidades__container-p-open')
        if(boton3.classList.contains('habilidades__container-p-open')){
            texto[2].textContent = 'Mostrar menos'
        }
        if(!boton3.classList.contains('habilidades__container-p-open')){
            texto[2].textContent = 'Ver más'
        }
    }
}