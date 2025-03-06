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
                buscaPlayOnly(conta.id);
                loaduser(ap);
            })
            document.getElementById('resu').appendChild(nUs)
        }
        j++
    }
}

function buscaPlayOnly(ida) {
    document.getElementById('Plays').innerHTML = '';
    let playlists = JSON.parse(localStorage.getItem('playlistTable'))
    let j = 1
    while (j <= playlists.count) {
        let temp = playlists['play' + j]
        if (playlists['play' + j] != null) {
            if (temp.UserID == ida) {
                let mene = document.createElement('div');
                mene.classList.add('cartoon-box');
                mene.id = temp.playID;
                mene.innerHTML = '<span>'+ temp.nome + '</span>'
                mene.style.backgroundColor = getRandomRgbColor()
                mene.addEventListener("click", function() {
                    criarListaPlay(temp.playID, temp.nome, temp.desc, 'no');
                    window.location = 'PlaylistPage.html'
                })
                document.getElementById('Plays').appendChild(mene)
            }
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