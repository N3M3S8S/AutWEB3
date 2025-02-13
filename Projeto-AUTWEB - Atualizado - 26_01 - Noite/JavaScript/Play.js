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

window.onload = function () {
    carregaEp()
    changeTheme()
    demonstraCurt()
}