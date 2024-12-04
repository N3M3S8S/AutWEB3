console.log("Meu Primeiro Script JavaScript");
window.alert("Página HTML carregada com sucesso!");
document.getElementById('msg').innerHTML = "Mensagem de Erro";
var mback = 0;

function mudarback () {
    if (mback == 0)
    {
        document.getElementById('telalogin').style.backgroundColor = 'blue';
        mback = 1
    }
    else
    {
        document.getElementById('telalogin').style.backgroundColor = 'white';
        mback = 0
    }
}