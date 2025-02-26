var centro = document.getElementById('cen')

function changePostsPub() {
    document.getElementById('cen').classList.add('public')
}

function changePostsOfc() {
    document.getElementById('cen').classList.remove('public')
}

function busca() {
    let se = document.getElementById('sear').value.toLowerCase();
    let j = 1
    document.getElementById('resu').innerHTML = ""

    while (j <= QntContas) {
        let conta = JSON.parse(localStorage.getItem('conta' + j))
        let ap = conta.apelido
        if (ap.toLowerCase().includes(se) == true && se != "" && conta.id != id) {
            let nUs = document.createElement('div')
            nUs.classList.add('user')
            nUs.innerHTML = '<img src="Imagens/PFP_Holder.jpg" alt=""><span>' + ap +'</span>'
            nUs.addEventListener('click', function() {
                loaduser(ap)
            })
            document.getElementById('resu').appendChild(nUs)
        }
        j++
    }
}

function loaduser(ape) {
    document.getElementById('ape').innerHTML = ape;
    OeCWin('prf')
}

window.onload = function( ) {
    changeTheme()
}