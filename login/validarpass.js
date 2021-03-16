function checkPass(pwd) {
    if (pwd.value == "") {
        alert("El campo Pass esta vacio");
        pwd.focus();
        return false;}
}
