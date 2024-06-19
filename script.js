// Sélection des éléments HTML
let contenaire = document.querySelector('.contenaire');
let bouton = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

// Première action sur le bouton start
bouton.onclick = function() {
    let score = 0;
    let time = 10;
    contenaire.innerHTML = "";

    let interval = setInterval(function showTarget() {
        // Création de la cible 
        let target = document.createElement('img');
        target.id = "target";
        target.src = "silly.png";
        target.style.position = 'absolute'; // Position absolue pour le positionnement correct
        contenaire.appendChild(target);

        // Assurez-vous que l'image est chargée avant de définir sa position
        target.onload = function() {
            let maxTop = contenaire.offsetHeight - target.offsetHeight;
            let maxLeft = contenaire.offsetWidth - target.offsetWidth;
            target.style.top = Math.random() * maxTop + 'px';
            target.style.left = Math.random() * maxLeft + 'px';
        };

        // Faire disparaître la cible après 2 secondes
        setTimeout(function() {
            target.remove();
        }, 2000);

        // Quand on clique sur la cible 
        target.onclick = function() {
            score += 1;
            target.remove();
        };

        // Afficher les infos (score et temps)
        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `Temps : ${time}`;

        // Fin du jeu (avec condition)
        if (time <= 0) {
            clearInterval(interval);
            contenaire.innerHTML = 'Le jeu est terminé !';
            return; // Sortir de la fonction pour éviter de diminuer le temps en dessous de zéro
        }

        time -= 1;
    }, 1000);
};
