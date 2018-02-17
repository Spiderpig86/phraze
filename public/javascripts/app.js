
var outlineButton = document.querySelectorAll('.btn-outline-dark');
outlineButton.forEach((e, i) => e.addEventListener('click', activate));

function activate() {
    let self = this, activatedClass = 'btn-activated';
    
    if(!classie.has(this, activatedClass)) {
        classie.add( this, activatedClass );
        setTimeout(() => classie.remove(self, activatedClass), 500);
    }
}