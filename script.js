// ===== AUTO DETECT ICON FROM URL =====
function autoDetectIcons() {
    const linkButtons = document.querySelectorAll('.link-button[href]');
    
    linkButtons.forEach(button => {
        const url = button.getAttribute('href').toLowerCase();
        const icon = button.querySelector('i');
        
        // Detect platform from URL and set appropriate icon
        if (url.includes('instagram.com')) {
            icon.setAttribute('data-lucide', 'instagram');
        } else if (url.includes('github.com')) {
            icon.setAttribute('data-lucide', 'github');
        } else if (url.includes('linkedin.com')) {
            icon.setAttribute('data-lucide', 'linkedin');
        } else if (url.includes('twitter.com') || url.includes('x.com')) {
            icon.setAttribute('data-lucide', 'twitter');
        } else if (url.includes('facebook.com')) {
            icon.setAttribute('data-lucide', 'facebook');
        } else if (url.includes('youtube.com')) {
            icon.setAttribute('data-lucide', 'youtube');
        } else if (url.includes('tiktok.com')) {
            icon.setAttribute('data-lucide', 'music');
        } else if (url.includes('discord.com') || url.includes('discord.gg')) {
            icon.setAttribute('data-lucide', 'message-circle');
        } else if (url.includes('telegram.org') || url.includes('t.me')) {
            icon.setAttribute('data-lucide', 'send');
        } else if (url.includes('whatsapp.com') || url.includes('wa.me')) {
            icon.setAttribute('data-lucide', 'phone');
        } else if (url.includes('twitch.tv')) {
            icon.setAttribute('data-lucide', 'tv');
        } else if (url.includes('spotify.com')) {
            icon.setAttribute('data-lucide', 'music');
        } else if (url.includes('dribbble.com')) {
            icon.setAttribute('data-lucide', 'dribbble');
        } else if (url.includes('behance.net')) {
            icon.setAttribute('data-lucide', 'layout');
        } else if (url.includes('medium.com')) {
            icon.setAttribute('data-lucide', 'book-open');
        } else if (url.includes('mailto:')) {
            icon.setAttribute('data-lucide', 'mail');
        } else {
            // Default icon for custom links
            icon.setAttribute('data-lucide', 'link');
        }
    });
    
    // Reinitialize icons after detection
    lucide.createIcons();
}

// ===== CREATE STARS FOR DARK MODE =====
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        starsContainer.appendChild(star);
    }
}

// ===== CREATE CLOUDS FOR LIGHT MODE =====
function createClouds() {
    const cloudsContainer = document.getElementById('clouds');
    const numberOfClouds = 5;
    
    for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        // Random vertical position
        cloud.style.top = Math.random() * 80 + '%';
        
        // Random size
        const width = Math.random() * 80 + 80; // 80-160px
        const height = width * 0.6;
        cloud.style.width = width + 'px';
        cloud.style.height = height + 'px';
        
        // Random animation delay and duration
        cloud.style.animationDelay = Math.random() * 20 + 's';
        cloud.style.animationDuration = (Math.random() * 20 + 30) + 's';
        
        cloudsContainer.appendChild(cloud);
    }
}

// ===== THEME TOGGLE FUNCTION =====
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    // Save preference to localStorage
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    
    // Reinitialize icons after theme change
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

// ===== LOAD SAVED THEME ON PAGE LOAD =====
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createClouds();
    loadTheme();
    autoDetectIcons(); // Auto detect icons from URLs
});

// ===== ADDITIONAL CUSTOMIZATION OPTIONS =====

// You can add more interactive features here, such as:
// - Analytics tracking for link clicks
// - Dynamic content loading
// - Social media follower counts
