//Definindo variáveis para melhor acesso de todas as páginas
var countConf = 0; 
var countTry = 0;
var counter;
var theme = localStorage.getItem('theme');;
var code = 0;
const bg = document.getElementById("bg");
var contaAtual = JSON.parse(sessionStorage.getItem('act'))
var QntContas = localStorage.getItem('nContas')

if (contaAtual != null) {
    var id = contaAtual['id']
}

if (contaAtual != null) {
    var countCurt = localStorage.getItem('curtCount' + id)
}

//A partir deste momento, teremos os métodos gerais, que aparecem em uma ou mais páginas HTML.
function config() {
    if (countConf == 0) {
        document.getElementById("gear").style.animation = "girar 0.5s linear 1 none"
        document.getElementById("sub-menu").style.display = "flex"
        document.getElementById("sub-menu").style.animation = "movimento-vertical 0.5s"
        setTimeout(function() {
            document.getElementById("gear").style.animation = "none"
            document.getElementById("sub-menu").style.animation = "none"
        }, 500)
        countConf = 1;
    }
    else{
        document.getElementById("gear").style.animation = "girar 0.5s linear 1 reverse none"
        document.getElementById("sub-menu").style.animation = "movimento-vertical 0.45s reverse"
        setTimeout(function() {
            document.getElementById("sub-menu").style.display = "none"
            document.getElementById("gear").style.animation = "none"
            document.getElementById("sub-menu").style.animation = "none"
        }, 400)
        countConf = 0;
    }
}

function changeDisplay(id1, id2) {
    document.getElementById(id1).style.display = 'none'
    document.getElementById(id2).style.display = 'flex'
}

function changeTheme() {
    if (theme == "dark") {
        document.getElementById("all").classList.remove("white-theme")
        document.getElementById("all").classList.add("dark-theme")
        theme = "light"
        localStorage.setItem('theme', "dark");
    }
    else {
        document.getElementById("all").classList.remove("dark-theme")
        document.getElementById("all").classList.add("white-theme")
        theme = "dark"
        localStorage.setItem('theme', "light");
    }
}

function verificaRep(data, inpId, divC, Err, msg, type) {
    var countPoly = parseInt(localStorage.getItem('nContas'));
    if (countPoly > 0) {
        var counter = 1;
        var dataLog  = document.getElementById(inpId).value;
        var value = true

        while (counter <= countPoly) {
            var dadosConta = JSON.parse(localStorage.getItem('conta' + counter))
            if (dataLog == dadosConta[data]) {
                if (id != dadosConta['id']) {
                    document.getElementById(divC).classList.add('error')
                    document.getElementById(Err).innerHTML = msg
                    value = value && false
                    break
                }
                else {
                    if (type == 'create') {
                        document.getElementById(divC).classList.add('error')
                        document.getElementById(Err).innerHTML = msg
                        value = value && false
                    }
                    counter++;
                }
            }
            else{
                counter++;
                value = value + true
            }
        }
        return value
    }
    else {
        return true
    }
}

function compSen(ids, idcs){
    Senha = document.getElementById(ids).value;
    CoSenha = document.getElementById(idcs).value

    if(Senha == CoSenha) {
        return true
    }
    else {
        document.getElementById('f-s').classList.add('error')
        document.getElementById('msgSen').innerHTML = 'As senhas não coincidem'
        document.getElementById('f-cs').classList.add('error')
        document.getElementById('msgCS').innerHTML = 'As senhas não coincidem'

        return false
    }
}

function validateNull (id, fid, msg) {
    if (document.getElementById(id).value != '') {
        return true
    }
    else {
        document.getElementById(fid).classList.add('error')
        document.getElementById(msg).innerHTML = 'Este campo não pode estar vazio'
        return false
    }
}

function validateEmail(idEm, fid, msg) {
    const email = document.getElementById(idEm).value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) == true) {
        return true
    }
    else {
        document.getElementById(fid).classList.add('error')
        document.getElementById(msg).innerHTML = 'O email inserido não é válido!'
    };
}

function validateLength(id, fid, len, msg) {
    tar = document.getElementById(id).value;
    if (tar.length >= len){
        return true;
    }
    else{
        document.getElementById(fid).classList.add('error')
        document.getElementById(msg).innerHTML = 'A senha deve ter 8 caracteres!'
    }
}

function remError (fid) {
    document.getElementById(fid).classList.remove('error')
}

function verificaCampos(idEm, idSen) {
    var Em1 = validateNull(idEm, 'f-e', 'msgEm')
    if(Em1 == true) {
        var Em2 = validateEmail(idEm, 'f-e', 'msgEm')
        if (Em2 == true) {
            var Em = true
        }
    }

    var Sen1 = validateNull(idSen, 'f-s', 'msgSen');
    if(Sen1 == true) {
        var Sen2 = validateLength(idSen, 'f-s', 8, 'msgSen')
        if (Sen2 == true) {
            var Sen = true
        }
    }

    console.log(Sen && Em)
    return (Sen && Em)
}

function user() {
    if (contaAtual == null) {
        window.location = 'LoginPage.html'
    }
    else {
        window.location = 'UserPage.html'
    }
}

function girar(id) {
    fadein(id)
    setTimeout(function() {
        document.getElementById(id).style.animation = "girar 0.5s linear infinite"
    }, 500)
}

function encontraConta(id) {
    counter = 1
    while (counter <= QntContas) {
        var prova = JSON.parse(localStorage.getItem('conta' + counter))
        if (id == prova['id']) {
            return 'conta' + counter
        }
        counter++
    }
}

function recarConta(newData) {
    sessionStorage.setItem('act', localStorage.getItem(newData))
}

function criaPlaylist(NaIn, DesIn) {
    var NomePlay = 'teste'
    var DesIn = 'teste'
    var temp = contaAtual
    temp['playlists']['NomePlay'] = 'teste'
    localStorage.setItem('conta' + id, JSON.stringify(temp)) 
}


function loadCurt() {
    var counter = countCurt
    if (countCurt != null) {
        while (counter >= 1) {
            var tdat = JSON.parse(localStorage.getItem('curtidos' + id))
            var tdat = tdat['ct' + counter]
            if (tdat != null) { 
                clone = document.getElementById(tdat['name']).cloneNode(true);
                document.getElementById('CurtCS').appendChild(clone)
            }
            counter--;
        }
    }
    else {
        document.getElementById('curtdr').classList.add('none')
    }
}

function fadein(id) {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id).style.animation = "fade-in 0.5s linear";
}

function fadeout(id) {
    document.getElementById(id).style.animation = "fade-in 0.5s linear reverse forwards";
    document.getElementById(id).style.display = "none";
}