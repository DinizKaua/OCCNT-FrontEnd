document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switch(section){
                case 'dados':
                    window.location.href = 'index.html';
                    break;
                    
                case 'sobre':
                    window.location.href = 'sobre.html';
                    break;
                
                case 'repositorio':
                    window.location.href = 'repositorio.html';
            }
        })
    })

    const ctaButton = document.querySelector('.cta-button');
    if(ctaButton){
        ctaButton.addEventListener('click', function(){
            window.location.href = 'sobre.html';
        })
    }
})