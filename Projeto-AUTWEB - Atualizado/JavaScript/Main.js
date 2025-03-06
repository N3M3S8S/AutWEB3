//Criando variáveis essenciais
var counterLast = sessionStorage.getItem('LastWatch')

function teste() {
    document.getElementById('teste').addEventListener('click', function() {playEp()})
}

function loadLast() {
    var counter = counterLast
    var lasC = 0
    if (counterLast != null) {
        while (counter >= 1) {
            var tdat = sessionStorage.getItem('dr' + counter)
            var dat = JSON.parse(tdat)
            if (dat.desenho != null) {
                clone = document.getElementById(dat.desenho).cloneNode(true);
                clone.id = 'las' + lasC;
                document.getElementById('LastWa').appendChild(clone);
                lasC++;
            }
            counter--;
        }
    }
    else {
        document.getElementById('Last').classList.add('none')
    }
}

window.onload = function() {
    changeTheme();
    loadLast();
    loadCurt();
    teste()
}