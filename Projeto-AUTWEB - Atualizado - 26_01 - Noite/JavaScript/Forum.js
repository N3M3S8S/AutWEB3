var centro = document.getElementById('cen')

function changePostsPub() {
    document.getElementById('cen').classList.add('public')
}

function changePostsOfc() {
    document.getElementById('cen').classList.remove('public')
}

function busca() {
    let se = document.getElementById('sear').value;
    let j = 1
    document.getElementById('resu').innerHTML = ""

    while (j <= QntContas) {
        let conta = JSON.parse(localStorage.getItem('conta' + j))
        let ap = conta.apelido.toString()
        if (ap.includes(se) == true && se != "") {
            let nUs = document.createElement('div')
            nUs.classList.add('user')
            nUs.innerHTML = '<img src="Imagens/PFP_Holder.jpg" alt=""><span>' + ap +'</span>'
            document.getElementById('resu').appendChild(nUs)
        }
        j++
    }
}

window.onload = function( ) {
    changeTheme()
}