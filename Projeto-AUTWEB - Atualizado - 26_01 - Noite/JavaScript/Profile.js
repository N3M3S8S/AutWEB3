function loadData() {
    document.getElementById('id').innerHTML = 'id: ' + contaAtual['id']
    document.getElementById('NoS').innerHTML = contaAtual['nome']
    document.getElementById('ApS').innerHTML = contaAtual['apelido']
    document.getElementById('PlS').innerHTML = contaAtual['plano']
    document.getElementById('EmS').innerHTML = contaAtual['email']
}

function editar() {
    document.getElementById('Edit').style.display = 'flex'
    document.getElementById('nomeUs').value = contaAtual['nome']
    document.getElementById('apelido').value = contaAtual['apelido']
    document.getElementById('email').value = contaAtual['email']
    document.getElementById('senha').value = contaAtual['senha']
    document.getElementById('Consenha').value = contaAtual['senha']
}

function Cancelaeditar() {
    document.getElementById('Edit').style.display = 'none'
}

function verificaCamposEditar() {
    var name = validateNull('nomeUs', 'f-n', 'msgNa')
    var apelido = validateNull('apelido', 'f-a', 'msgAp')
    if (apelido == true) {
        var apelido = verificaRep('apelido' ,'apelido', 'f-a', 'msgAp', 'O Apelido informado já está em uso', 'edit')
    }

    var Em = validateNull('email', 'f-e', 'msgEm')
    if (Em == true) {
        var Em2 = validateEmail('email', 'f-e', 'msgEm')
        if (Em2 == true) {
            var email = verificaRep('email','email', 'f-e', 'msgEm', 'O email informado já está em uso', 'edit')
        }
    }

    var Sen = validateNull('senha', 'f-s', 'msgSen')
    if (Sen == true) {
        validateLength('senha','f-s', 8, 'msgSen')
    }

    var CoSen = validateNull('Consenha', 'f-cs', 'msgCS')
    if (CoSen == true) {
        var CoSen2 = validateLength('Consenha', 'f-cs', 8, 'msgCS')
        if (compSen('senha', 'Consenha') && CoSen2){
            var senha = true
        }
    }

    if(name && apelido && email && senha) {
        editaLogin('nomeUs', 'email', 'senha', 'apelido')
    }
}

function editaLogin(idNom, idEm, idSen, idAp) {
    var email = document.getElementById(idEm).value;
    var senha = document.getElementById(idSen).value;
    var apelido = document.getElementById(idAp).value;
    var nome = document.getElementById(idNom).value;
    var conta = contaAtual
    conta['email'] = email;
    conta['nome'] = nome;
    conta['apelido'] = apelido;
    conta['senha'] = senha
    localStorage.setItem(encontraConta(id), JSON.stringify(conta))
    recarConta(encontraConta(id))
    sessionStorage.removeItem('act');
    document.getElementById('EditFor').submit()
}

function criarListaPlay(id, na, des) {
    let items = JSON.parse(localStorage.getItem('playItem'))
    let newLista = {count: 1, playname: na, desc: des, id: id}

    let i = 1
    while (i <= items.count) {
        let temp = items['item' + i]
        if (temp['playID'] == id) {
            newLista['ca' + i] = {desenho: temp.desenho, episodio: temp.episodio, fonte: temp.fonte}
            newLista['count'] = i
            sessionStorage.setItem('newLista', JSON.stringify(newLista))
        }
        i++
    }
    console.log(newLista)
}

function carregaPlayOnly() {
    document.getElementById('Plays').innerHTML = '';
    let playlists = JSON.parse(localStorage.getItem('playlistTable'))
    let j = 1
    while (j <= playlists.count) {
        let temp = playlists['play' + j]
        if (playlists['play' + j] != null) {
            if (temp.UserID == id) {
                let mene = document.createElement('div');
                mene.classList.add('cartoon-box');
                mene.id = temp.playID;
                mene.innerHTML = '<span>'+ temp.nome + '</span>'
                mene.style.backgroundColor = getRandomRgbColor()
                mene.addEventListener("click", function() {
                    criarListaPlay(temp.playID, temp.nome, temp.desc);
                    window.location = 'PlaylistPage.html'
                })
                document.getElementById('Plays').appendChild(mene)
            }
        }
        j++
    }
}

function sair() {
    sessionStorage.removeItem('act');
    window.location = 'LoginPage.html'
}

window.onload = function () {
    changeTheme();
    loadData();
    carregaPlayOnly()
}