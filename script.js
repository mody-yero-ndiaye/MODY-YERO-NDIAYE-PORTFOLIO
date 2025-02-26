document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Sélectionner toutes les sections
        const sections = document.querySelectorAll('.section');

        if (targetId === "#accueil") {
            sections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            // Sinon, masquer toutes les sections sauf celle ciblée
            sections.forEach(section => {
                section.style.display = 'none';
            });

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        }
    });
});

// Afficher toutes les sections par défaut au chargement
document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'block';
});