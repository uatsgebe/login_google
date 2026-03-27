function logar() {
    let usuario = document.getElementById('input_usuario').value
    let senha = document.getElementById('input_senha')

    if(usuario == 'guilherme' && senha == 'gb1234') {
            window.location.href = "home.html"
    } else {
        //alert('usuario incorreto')
        Swal.fire({
        title: "acesso negado!",
        text: "usuario incorreto!",
        con: "error"
});
    }

}