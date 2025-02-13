var centro = document.getElementById('cen')

function changePostsPub() {
    document.getElementById('cen').classList.add('public')
}

function changePostsOfc() {
    document.getElementById('cen').classList.remove('public')
}

window.onload = function( ) {
    changeTheme()
}