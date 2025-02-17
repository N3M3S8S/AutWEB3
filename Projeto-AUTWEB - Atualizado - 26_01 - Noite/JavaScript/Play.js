//Definindo variáveis úteis
var countid = 0
var epdata = JSON.parse(sessionStorage.getItem('ep'))

function carregaEp() {
    if (sessionStorage.getItem('ep') != null) {    
        document.getElementById('cartoon').src = epdata.src
        document.getElementById('desenho').innerHTML = epdata.desenho
        document.getElementById('episodio').innerHTML = epdata.episodio
    }
    else {
        console.log('Modo de debug')
    }
}

function vercurt() {
    var actCurt = localStorage.getItem('curtidos' + id)

    if (actCurt != null) {
        if (actCurt.includes(epdata.src)) {
            return true
        }
        else {
            return false
        }
    }
}

function demonstraCurt() {
    if (vercurt() == true) {
        document.getElementById('heart').classList.add('curt')
    }
}

function curtir() {
    if (contaAtual != null) {
        console.log(id)
        if (localStorage.getItem('curtidos' + id) == null) {
            var curt = JSON.stringify({ct1: {src: epdata.src, name: epdata.desenho, episode: epdata.episodio}})
            localStorage.setItem('curtidos' + id, curt)
            localStorage.setItem('curtCount' + id, '1')
            document.getElementById('heart').classList.add('curt')
        }
        else{
            if (vercurt() == false) {
                var counter = localStorage.getItem('curtCount' + id)
                var curt = JSON.parse(localStorage.getItem('curtidos' + id))
                counter++
                curt['ct' + counter] = {src: epdata.src, name: epdata.desenho, episode: epdata.episodio}
                console.log(curt)
                curt = JSON.stringify(curt)
                localStorage.setItem('curtidos' + id, curt)
                localStorage.setItem('curtCount' + id, counter)
                document.getElementById('heart').classList.add('curt')
            }
            else {
                var curt = JSON.parse(localStorage.getItem('curtidos' + id))
                var counterMax = localStorage.getItem('curtCount' + id)
                var counter = 1
                while (counter <= counterMax) {
                    console.log((curt['ct' + counter]))
                    if ((curt['ct' + counter] != null)) {
                        if ((curt['ct' + counter]['src'] == epdata.src)) {
                            console.log(curt['ct' + counter])
                            console.log(epdata.src)
                            delete curt['ct' + counter]
                            localStorage.setItem('curtidos' + id, JSON.stringify(curt))
                            document.getElementById('heart').classList.remove('curt')
                        }
                    }
                    counter++
                }
            }
        }
    }
    else {
        window.location = 'LoginPage.html'
    }
}

function comentar() {
    if (sessionStorage.getItem('act') != null) {
        var ph = document.getElementById('ph')
        var account = JSON.parse(sessionStorage.getItem('act'))
        document.getElementById('nick').innerHTML = account.apelido
        if (document.getElementById('inp').value != ''){ 
            document.getElementById('com').innerHTML = document.getElementById('inp').value
        }
        else {
            document.getElementById('com').innerHTML = 'O usuário ficou com muita preguiça de escrever'
        }
        var newCom = ph.cloneNode(true)
        newCom.id = countid;
        document.getElementById('comns').appendChild(newCom)
        countid++;
        document.getElementById('inp').value = ''
    }
    else {
        window.location = 'LoginPage.html'
    }
}

function criarPlaylist(name, abt) {
    //let name = document.getElementById(idname).value
    //let abt = document.getElementById(idabt).value
    if(localStorage.getItem('playlistTable') == null) {
        let addPlay = JSON.stringify({play1: {nome: name, desc: abt, playID: 1, UserID: id}, count: 1})
        localStorage.setItem('playlistTable', addPlay)
    }
    else {
        let temp = JSON.parse(localStorage.getItem('playlistTable'))
        let i = parseInt(temp.count)
        i++;
        temp['play' + i] = {nome: name, desc: abt, playID: i, UserID: id}
        temp['count'] = i
        localStorage.setItem('playlistTable', JSON.stringify(temp))
    }
    carregaPlay()
}

function addPlayItem(playID) {
    let pItem = localStorage.getItem('playItem')

    if (pItem == null) {
        let addItem = {count: 1, item1: {desenho: epdata.desenho, episodio: epdata.episodio, fonte: epdata.src, playID: playID, itemID: 1}}
        localStorage.setItem('playItem', JSON.stringify(addItem))
    }
    else {
        let addItem = JSON.parse(pItem);
        let i = addItem.count
        i++
        addItem['item' + i] = {desenho: epdata.desenho, episodio: epdata.episodio, fonte: epdata.src, playID: playID, itemID: i}
        addItem['count'] = i;
        localStorage.setItem('playItem', JSON.stringify(addItem))
    }
}

function carregaPlay() {
    document.getElementById('lists').innerHTML = '';
    let playlists = JSON.parse(localStorage.getItem('playlistTable'))
    let j = 1
    while (j <= playlists.count) {
        let temp = playlists['play' + j]
        if (temp.UserID == id) {
            let mene = document.createElement('div');
            mene.classList.add('cartoon-box');
            mene.id = temp.playID;
            mene.innerHTML = '<span>'+ temp.nome + '</span>'
            mene.style.backgroundColor = getRandomRgbColor()
            mene.addEventListener("click", function() {
                addPlayItem(temp.playID);
            })
            document.getElementById('lists').appendChild(mene)
        }
        j++
    }
}

function OeCWin (id) {
    let win = document.getElementById(id)
    
    if (win.style.display == "flex") {
        win.style.display = "none"
        console.log('teste')
    }
    else {
        win.style.display = "flex"
    }
}   

window.onload = function () {
    carregaEp()
    changeTheme()
    demonstraCurt()
    carregaPlay()
}