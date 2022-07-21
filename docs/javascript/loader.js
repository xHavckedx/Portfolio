function fncAccept(){
    box = document.getElementById("_target")
    box.style.display = 'none'

    display = document.getElementById("window")
    display.style.display = 'block'
}

function fncExit(){
    window.opener = self;
    window.close();
}