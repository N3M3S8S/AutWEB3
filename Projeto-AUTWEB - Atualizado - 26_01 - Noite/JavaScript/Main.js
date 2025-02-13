//Criando variáveis essenciais
var counterLast = sessionStorage.getItem('LastWatch')

function teste() {
    console.log('teste')
    document.getElementById('teste').addEventListener('click', function() {playEp()})
}

function loadLast() {
    var counter = counterLast
    if (counterLast != null) {
        while (counter >= 1) {
            var tdat = sessionStorage.getItem('dr' + counter)
            var dat = JSON.parse(tdat)
            if (dat.desenho != null) {
                clone = document.getElementById(dat.desenho).cloneNode(true);
                document.getElementById('LastWa').appendChild(clone)
            }
            counter--;
        }
    }
    else {
        document.getElementById('Last').classList.add('none')
    }
}

function addLastWatch(epd) {
    if (sessionStorage.getItem('LastWatch') == null) {
        sessionStorage.setItem('LastWatch', '0')
    }
    var counter = 0
    var counterLast = sessionStorage.getItem('LastWatch')
    var add = true

    while (counter <= counterLast) {
        if (epd == sessionStorage.getItem('dr' + counter)) {
            add = add && false
        }
        else {
            add = add && true
        }
        counter++
    }

    if (add == true) {
        var temp = parseInt(counterLast)
        temp++;
        counterLast = temp.toString();
        sessionStorage.setItem('LastWatch', counterLast)
        sessionStorage.setItem('dr' + counterLast, epd)
    }
}

function playEp(fonte, des, ep) {
    var epdata = {src: fonte, desenho: des, episodio: ep}
    var data = JSON.stringify(epdata)
    sessionStorage.setItem('ep', data);
    addLastWatch(data)
    window.location = 'PlayWindow.html'
}

window.onload = function() {
    changeTheme();
    loadLast();
    loadCurt();
    teste()
}