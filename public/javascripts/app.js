
var outlineButton = document.querySelector('.btn-outline-dark');
outlineButton.addEventListener('click', activate);

function activate() {
    let self = this, activatedClass = 'btn-activated';
    
    if(!classie.has(this, activatedClass)) {
        classie.add( this, activatedClass );
        setTimeout(() => classie.remove(self, activatedClass), 1000 );
    }
}