function showDiv() {
    document.getElementById('ex').style.display = "flex";
}

function hideDiv() {
    document.getElementById('ex').style.display = "none";
}

function addPoint(){
    var inputValue = document.getElementById("CEP").value;
    var inputValueLength = inputValue.length;
    if(inputValueLength == 5){
        document.getElementById("CEP").value = inputValue+"-"; 
    }
   }