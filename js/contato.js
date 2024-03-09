function validateForm() {
    const elements = document.querySelectorAll('.form-control');
    elements.forEach(element => {
        const id = element.id;
        const value = element.value;
        switchcase(id, value);
    });
    document.getElementById('textoErro').style.display = 'block';
    return true;
}

function validarFocousOut(id, value) {
    switchcase(id, value);
}

function switchcase(id, value) {
    switch (id) {
        case 'nome':
            if (!isValidName(value)) {
                errosMostar(id, "red")
                return false;
            }else {
                errosMostar(id, "black")
            }
            break;
        case 'telefone':    
            if (!isValidPhone(value)) {
                errosMostar(id, "red")
                return false;
            }else {
                errosMostar(id, "black")
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                errosMostar(id, "red")
                return false;
            }else {
                errosMostar(id, "black")
            }
            break;
        default:
            break;
    }
}
function errosMostar(campo, cor){
    document.getElementById(campo).style.borderColor = cor
}
function isValidName(name) {
    return name.length > 3;
}
function isValidPhone(phone) {
    return /^\d{11,}$/.test(phone);
}
function isValidEmail(email) {
    return pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}



