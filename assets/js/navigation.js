document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switch(section){
                case 'dados':
                    window.location.href = '/index.html';
                    break;
                    
                case 'sobre':
                    window.location.href = '/sobre.html';
                    break;
                
                case 'repositorio':
                    window.location.href = '/repositorio.html';
            }
        })
    })

    const aboutButton = document.querySelector('.about-button');
    if(aboutButton){
        aboutButton.addEventListener('click', function(){
            window.location.href = 'sobre.html';
        })
    }

    const diseaseCard = document.querySelectorAll('.disease-card');
    diseaseCard.forEach(card => {
        card.addEventListener('click', function(){
            const category = this.getAttribute('data-category');
            window.location.href = `pages/categoria/${category}.html`;

        })
    })
        
})