//Definindo variáveis individuais
const singleInputs = document.getElementById("md2").querySelectorAll('.in');

function changeFocus(el, n) {
    document.getElementById(el + n).focus();
}

function popIn() {
    document.getElementById("lang").style.display = "flex"
    document.getElementById("lang").style.animation = "pop-in 0.25s linear"
}

function send(validate){
    fadeout('md');
    fadein('md2');
    code = Math.floor(Math.random() * 10000).toString();

    singleInputs.forEach(el => {
        el.max = 9;
        el.min = 0;
        }
    )
    if(validate == 1) {
        console.log(code)
    }
    else {
        console.log('Email não encontrado')    
    }
    countTry = 5;
}

function load() {
    fadeout('ex')
    fadeout('md');
    girar('logo')
}

function valEmail(idEm) {
    if (validateNull('email', 'f-e', 'msgEm') == true) {
        var countPoly = parseInt(localStorage.getItem('nContas'));
        counter = 1;
        var emailRec  = document.getElementById(idEm).value;

        while (counter <= countPoly) {
            dadosConta = JSON.parse(localStorage.getItem('conta' + counter))
            if (emailRec == dadosConta.email) {
                console.log('Oh, glória ao meu Jesus, pois é digno de louvor, é meu rei, meu bom pastor e meu Senhor')
                var emailFound = 1;
                break
            }
            else{
                counter++;
            }
        }
        console.log(emailFound)
        send(emailFound)
    }
}

function valcode() {
    var dicode = "";
    singleInputs.forEach(el => {
        dicode += el.value;
    }
    )
    
    if (dicode == code) {
        document.getElementById("CodeErr").innerHTML = "Código validado. Aguarde o redirecionamento";
        document.getElementById("CodeErr").style.color = "green";
        setTimeout(function() {
            fadeout('md2');
            fadein('md3');
        }, 2000)
    }
    else {
        countTry--;
        document.getElementById("CodeErr").innerHTML = "Código incorreto. Restam " + countTry + " tentativas";
        if (countTry == 0) {
            document.getElementById("CodeErr").innerHTML = "Código incorreto. Sem tentativas restantes";
            document.getElementById("CodeErr").style.color = "red";
        }
    }
}

function valPass() {
    var pass = document.getElementById("newPass").value;
    var pass2 = document.getElementById("newPassCon").value;
    if (pass == pass2) {
        document.getElementById("PassErr").innerHTML = "Senha validada. Aguarde o redirecionamento";
        document.getElementById("PassErr").style.color = "green";
        var newConta = {email: document.getElementById('email').value, senha: pass}
        localStorage.setItem('conta' + counter, JSON.stringify(newConta))
        setTimeout(function() {
            window.location.href = "LoginPage.html";
        }, 2000)
    }
    else {
        document.getElementById("PassErr").innerHTML = "Senhas não correspondem";
        document.getElementById("PassErr").style.color = "red";
    }
}

window.onload = changeTheme;