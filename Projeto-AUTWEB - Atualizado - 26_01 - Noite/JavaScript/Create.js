function criarConta(idNom, idEm, idSen, idAp) {
    var email = document.getElementById(idEm).value;
    var senha = document.getElementById(idSen).value;
    var apelido = document.getElementById(idAp).value;
    var nome = document.getElementById(idNom).value;
    var nContasSt = localStorage.getItem('nContas')
    var nContasIn = parseInt(nContasSt) + 1;
    var nContasSt = nContasIn.toString()
    localStorage.setItem('nContas', nContasSt)
    var conta = {nome: nome, email: email, senha: senha, apelido: apelido, id: nContasSt, plano: 'Gratuito'}
    localStorage.setItem('conta' + localStorage.getItem('nContas'), JSON.stringify(conta))
    document.getElementById('CreateFor').submit()
}

function criarLocal() {
    if (localStorage.getItem('nContas') == null) {
        localStorage.setItem('nContas', '0')
    }
}

function verificaCamposCriar() {
    var name = validateNull('nomeUs', 'f-n', 'msgNa')
    var apelido = validateNull('apelido', 'f-a', 'msgAp')
    if (apelido == true) {
        var apelido = verificaRep('apelido' ,'apelido', 'f-a', 'msgAp', 'O Apelido informado já está em uso')
    }

    var Em = validateNull('email', 'f-e', 'msgEm')
    if (Em == true) {
        var Em2 = validateEmail('email', 'f-e', 'msgEm')
        if (Em2 == true) {
            var email = verificaRep('email','email', 'f-e', 'msgEm', 'O email informado já está em uso', 'create')
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
        changeDisplay('req', 'final')
    }
}

window.onload = function () {
    changeTheme();
    criarLocal()
}