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
    document.getElementById('EditFor').submit()
}

function sair() {
    sessionStorage.removeItem('act');
    window.location = 'LoginPage.html'
}

window.onload = function () {
    changeTheme();
    loadData();
    loadCurt();
}