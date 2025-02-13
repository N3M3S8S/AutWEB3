function trocarMet() {
    if (document.getElementById('mainDiv').classList.contains('card')) {
        document.getElementById('mainDiv').classList.remove('card');
        document.getElementById('mainDiv').classList.add('pix')
    }
    else {
        document.getElementById('mainDiv').classList.add('card');
        document.getElementById('mainDiv').classList.remove('pix')
    }
}

function pagEf () {
    var temp = JSON.parse(localStorage.getItem(encontraConta(id)))
    if (sessionStorage.getItem('valr') == '20,00') {
        temp['plano'] = 'Premium'
    }
    if (sessionStorage.getItem('valr') == '30,00') {
        temp['plano'] = 'Deluxe'
    }
    localStorage.setItem(encontraConta(id), JSON.stringify(temp))
    recarConta(encontraConta(id))
    alert('Você será redirecionado agora. Assim que o pagamento for aprovado, você receberá os benefícios!')
    window.location = 'MainPage.html'
}

window.onload = function () {
    changeTheme()
    document.getElementById('val').innerHTML = 'VALOR:<br>' + sessionStorage.getItem('valr')
    document.getElementById(sessionStorage.getItem('valr')).style.display = 'flex'
}