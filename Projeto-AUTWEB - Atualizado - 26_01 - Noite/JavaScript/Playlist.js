let lista = JSON.parse(sessionStorage.getItem('newLista'))

function carregaLista() {
    let corpo = document.getElementById('boby')
    let j = 1
    let i = 1
    document.getElementById('name').innerHTML = lista.playname;
    document.getElementById('plNa').innerHTML = lista.playname;
    document.getElementById('plDe').innerHTML = lista.desc

    while (j <= lista.count) {
        let item = lista['ca' + j]
        if (item != null) {
            let newRow = document.createElement('tr')
            newRow.innerHTML = "<td>#" + i + "</td> <td class = 'desEp' ><span>" + item.desenho + "</span><span>" + item.episodio + "</span></td><td id='"+ j +"'><i class='fa-solid fa-play'</i></td>"
            corpo.appendChild(newRow)
            document.getElementById(j).addEventListener("click", function() {
                playEp(item.fonte, item.desenho, item.episodio);
            })
            console.log('newRow')
            i++
        }
        j++
    }
}

function carregaDados () {
    document.getElementById('namePl').value = lista.playname;
    document.getElementById('abtPl').value = lista.desc
}

function carregaBanner () {
    document.getElementById('banner').src = 'Imagens/totally_spies.jpeg'
}

function magica() {
    document.getElementById('sorry').click()
    console.log(document.getElementById('sorry').value)
}

function salvaNDados() {
    let nNome = document.getElementById('namePl').value;
    let nDes = document.getElementById('abtPl').value

    let oldPl = JSON.parse(localStorage.getItem('playlistTable'));
    console.log(oldPl)

    oldPl['play' + id]['nome'] = nNome;
    oldPl['play' + id]['desc'] = nDes;
    console.log(oldPl)
    localStorage.setItem('playlistTable', JSON.stringify(oldPl))
    window.location = 'UserPage.html'
}

function apagaPlay() {
    let del = JSON.parse(localStorage.getItem('playlistTable'))
    delete del['play' + lista.id]
    localStorage.setItem('playlistTable', JSON.stringify(del))
    window.location = 'UserPage.html'
}

window.onload = function () {
    changeTheme();
    carregaLista();
    carregaBanner();
    carregaDados()
}