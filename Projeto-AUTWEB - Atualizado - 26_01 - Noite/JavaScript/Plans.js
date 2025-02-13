function passaDados (value, tr, fa) {
    if (sessionStorage.getItem('act') != null) {
        sessionStorage.setItem('valr', value)
        window.location = tr
    }
    else {
        window.location = fa
    }
    
}

window.onload = function () {
    changeTheme()
}