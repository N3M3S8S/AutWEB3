function popIn() {
    document.getElementById("lang").style.display = "flex"
    document.getElementById("lang").style.animation = "pop-in 0.25s linear"
}

function verificaLogin(idEm, idSen) {
    if(verificaCampos(idEm, idSen) == true){
        var countPoly = parseInt(localStorage.getItem('nContas'));
        var counter = 1;
        var emailLog  = document.getElementById(idEm).value;
        var senhLog = document.getElementById(idSen).value;

        while (counter <= countPoly) {
            var actInt = localStorage.getItem('conta' + counter)
            var dadosConta = JSON.parse(actInt)
            if (emailLog == dadosConta.email && senhLog == dadosConta.senha) {
                var found = true
                break
            }
            else{
                counter++;
                var found = false
            }
        }

        if (found == true) {
            sessionStorage.setItem('act', actInt)
            document.getElementById('Login').submit()
        }
        else {
            alert('Nenhuma conta encontrada com estas informações')
        }
    }
}

window.onload = changeTheme;