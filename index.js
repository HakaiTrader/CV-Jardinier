const attestation = document.querySelector('.attestation');

let toggle = false;
console.log(window);
const scaling = () => {
    if (toggle === false) {
        attestation.style.transform = 'scale(20)';
        toggle = true;
        if (window.innerWidth < 900 ) {
            attestation.style.transform = 'scale(10)';
            toggle = true;
        }

    } else if (toggle = true) {
        attestation.style.transform ='scale(1)'
        toggle = false;
    }
    
}
attestation.addEventListener('click', scaling);