function carregaLista() {
    let corpo = document.getElementById('boby')
    let lista = JSON.parse(sessionStorage.getItem('newLista'))
    let j = 1
    console.log(lista.count)
    document.getElementById('name').innerHTML = lista.playname;
    document.getElementById('plNa').innerHTML = lista.playname;
    document.getElementById('plDe').innerHTML = lista.desc

    while (j <= lista.count) {
        let item = lista['ca' + j]
        if (item != null) {
            let newRow = document.createElement('tr')
            newRow.innerHTML = "<td><img src = Imagens/totally_spies.jpeg></img></td> <td class = 'desEp' ><span>" + item.desenho + "</span><span>" + item.episodio + "</span></td><td id='"+ j +"'><i class='fa-solid fa-play'</i></td>"
            corpo.appendChild(newRow)
            document.getElementById(j).addEventListener("click", function() {
                playEp(item.fonte, item.desenho, item.episodio);
            })
            console.log('newRow')
        }
        j++
    }
}

function carregaBanner () {
    document.getElementById('banner').src = 'Imagens/totally_spies.jpeg'
}

window.onload = function () {
    changeTheme();
    carregaLista()
    carregaBanner()
}