// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du thème (clair/sombre)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Vérifier la préférence de thème stockée
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Gestion de la navigation
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            // Mettre à jour la navigation active
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Afficher la page cible
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetPage) {
                    page.classList.add('active');
                    
                    // Mettre à jour le titre de la page dans le header
                    document.querySelector('.app-title').textContent = this.querySelector('.nav-label').textContent;
                }
            });
        });
    });
    
    // Gestion du sélecteur de langue
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', function() {
        // Ici, vous implémenteriez normalement la traduction de l'interface
        alert(`Langue changée en: ${this.options[this.selectedIndex].text}`);
        // Dans une implémentation réelle, vous chargeriez les traductions appropriées
    });
    
    // Compteurs pour les wirds
    const jawharaCount = document.getElementById('jawhara-count');
    const decreaseJawhara = document.getElementById('decrease-jawhara');
    const increaseJawhara = document.getElementById('increase-jawhara');
    const resetJawhara = document.getElementById('reset-jawhara');
    
    let jawharaCounter = parseInt(localStorage.getItem('jawharaCounter')) || 0;
    jawharaCount.textContent = jawharaCounter;
    
    increaseJawhara.addEventListener('click', function() {
        jawharaCounter++;
        jawharaCount.textContent = jawharaCounter;
        localStorage.setItem('jawharaCounter', jawharaCounter);
    });
    
    decreaseJawhara.addEventListener('click', function() {
        if (jawharaCounter > 0) {
            jawharaCounter--;
            jawharaCount.textContent = jawharaCounter;
            localStorage.setItem('jawharaCounter', jawharaCounter);
        }
    });
    
    resetJawhara.addEventListener('click', function() {
        jawharaCounter = 0;
        jawharaCount.textContent = jawharaCounter;
        localStorage.setItem('jawharaCounter', jawharaCounter);
    });
    
    // Compteur pour Salatoul Fâtih
    const salatCount = document.getElementById('salat-count');
    const decreaseSalat = document.getElementById('decrease-salat');
    const increaseSalat = document.getElementById('increase-salat');
    const resetSalat = document.getElementById('reset-salat');
    
    let salatCounter = parseInt(localStorage.getItem('salatCounter')) || 0;
    salatCount.textContent = salatCounter;
    
    increaseSalat.addEventListener('click', function() {
        salatCounter++;
        salatCount.textContent = salatCounter;
        localStorage.setItem('salatCounter', salatCounter);
    });
    
    decreaseSalat.addEventListener('click', function() {
        if (salatCounter > 0) {
            salatCounter--;
            salatCount.textContent = salatCounter;
            localStorage.setItem('salatCounter', salatCounter);
        }
    });
    
    resetSalat.addEventListener('click', function() {
        salatCounter = 0;
        salatCount.textContent = salatCounter;
        localStorage.setItem('salatCounter', salatCounter);
    });
    
    // Mise à jour de la localisation pour les horaires de prière
    const updateLocationBtn = document.getElementById('update-location');
    updateLocationBtn.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    alert('Localisation mise à jour avec succès!');
                    // Ici, vous feriez normalement un appel API pour obtenir les horaires de prière
                },
                function(error) {
                    alert('Impossible d\'obtenir la localisation. Veuillez vérifier les permissions.');
                }
            );
        } else {
            alert('La géolocalisation n\'est pas supportée par votre navigateur.');
        }
    });
    
    // Gestion des paramètres
    const darkModeToggle = document.getElementById('dark-mode');
    const prayerNotifications = document.getElementById('prayer-notifications');
    const spiritualReminders = document.getElementById('spiritual-reminders');
    const appLanguage = document.getElementById('app-language');
    
    // Charger les paramètres sauvegardés
    darkModeToggle.checked = localStorage.getItem('darkMode') === 'true';
    prayerNotifications.checked = localStorage.getItem('prayerNotifications') !== 'false';
    spiritualReminders.checked = localStorage.getItem('spiritualReminders') !== 'false';
    appLanguage.value = localStorage.getItem('appLanguage') || 'fr';
    
    // Sauvegarder les paramètres lorsqu'ils changent
    darkModeToggle.addEventListener('change', function() {
        localStorage.setItem('darkMode', this.checked);
        // Appliquer immédiatement le changement de thème
        body.setAttribute('data-theme', this.checked ? 'dark' : 'light');
    });
    
    prayerNotifications.addEventListener('change', function() {
        localStorage.setItem('prayerNotifications', this.checked);
    });
    
    spiritualReminders.addEventListener('change', function() {
        localStorage.setItem('spiritualReminders', this.checked);
    });
    
    appLanguage.addEventListener('change', function() {
        localStorage.setItem('appLanguage', this.value);
        // Ici, vous rechargeriez l'interface avec la nouvelle langue
        alert(`Langue de l'application changée en: ${this.options[this.selectedIndex].text}`);
    });
    
    // Simulation de la date Hijri
    function updateHijriDate() {
        const hijriToday = document.getElementById('hijri-today');
        // Dans une implémentation réelle, vous utiliseriez une bibliothèque ou API pour calculer la date Hijri
        const hijriDates = [
            "15 Rabi' al-Awwal 1445",
            "16 Rabi' al-Awwal 1445",
            "17 Rabi' al-Awwal 1445",
            "18 Rabi' al-Awwal 1445",
            "19 Rabi' al-Awwal 1445"
        ];
        const randomIndex = Math.floor(Math.random() * hijriDates.length);
        hijriToday.textContent = hijriDates[randomIndex];
    }
    
    updateHijriDate();
    
    // Simulation du chat
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.btn-send');
    const chatMessages = document.querySelector('.chat-messages');
    
    function addMessage(text, isSent) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isSent ? 'sent' : 'received');
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        const now = new Date();
        messageTime.textContent = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(messageTime);
        chatMessages.appendChild(messageDiv);
        
        // Faire défiler vers le bas
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    sendButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            // Simulation d'une réponse après un délai
            setTimeout(() => {
                const responses = [
                    "Salam alaykoum, merci pour votre message!",
                    "Qu'Allah vous récompense!",
                    "Barakallahou fik!",
                    "Je partage ce rappel avec la communauté."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, false);
            }, 1000);
        }
    });
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
    
    // Initialisation des médias
    const playButtons = document.querySelectorAll('.btn-play');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mediaItem = this.closest('.media-item');
            const mediaTitle = mediaItem.querySelector('h4').textContent;
            alert(`Lecture de: ${mediaTitle}`);
            // Dans une implémentation réelle, vous lanceriez la lecture du média
        });
    });
    
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mediaItem = this.closest('.media-item');
            const mediaTitle = mediaItem.querySelector('h4').textContent;
            alert(`Téléchargement de: ${mediaTitle}`);
            // Dans une implémentation réelle, vous téléchargeriez le fichier
        });
    });
    
    // Simulation des notifications de prière
    function checkPrayerTimes() {
        // Dans une implémentation réelle, vous vérifieriez l'heure actuelle par rapport aux heures de prière
        const now = new Date();
        const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        // Simuler une notification si l'heure de prière approche
        if (prayerNotifications.checked && Math.random() > 0.7) {
            // Dans une implémentation réelle, vous utiliseriez l'API de notifications du navigateur
            console.log("Rappel: L'heure de la prière approche!");
        }
    }
    
    // Vérifier les heures de prière toutes les minutes
    setInterval(checkPrayerTimes, 60000);
});
