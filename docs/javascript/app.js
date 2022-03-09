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