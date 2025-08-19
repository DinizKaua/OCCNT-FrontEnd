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
                    window.location.href = '/pages/outros/sobre.html';
                    break;
                
                case 'repositorio':
                    window.location.href = '/pages/outros/repositorio.html';
                    break;
            }
        })
    })

    const aboutButton = document.querySelector('.about-button');
    if(aboutButton){
        aboutButton.addEventListener('click', function(){
            window.location.href = 'pages/outros/sobre.html';
        })
    }

    const diseaseCard = document.querySelectorAll('.disease-card');
    diseaseCard.forEach(card => {
        card.addEventListener('click', function(){
            const category = this.getAttribute('data-category');
            window.location.href = `pages/categoria/categoria.html?disease=${category}`;
        })
    })
})