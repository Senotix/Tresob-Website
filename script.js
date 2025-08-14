// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Discord support link
document.addEventListener('DOMContentLoaded', function() {
    const supportLink = document.querySelector('.support-link');
    if (supportLink) {
        supportLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Discord sunucu davet linkinizi buraya ekleyin
            window.open('https://discord.gg/PR2CfW6thZ', '_blank');
        });
    }
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    }
});

// Download button functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-primary, .btn-download').forEach(button => {
        button.addEventListener('click', () => {
            // Download link - replace with your actual download URL
            const downloadUrl = 'https://www.mediafire.com/file/nt4ee2m0r1dmjbf/Tresab.zip/file';
            
            // Open download link in new tab
            window.open(downloadUrl, '_blank');
            
            // Optional: Show download started message
            showDownloadMessage();
        });
    });
});
// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and showcase elements
document.addEventListener('DOMContentLoaded', function() {
    // Feature cards animation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Showcase elements animation
    const showcaseImage = document.querySelector('.showcase-image');
    const showcaseText = document.querySelector('.showcase-text');
    
    if (showcaseImage) {
        showcaseImage.style.opacity = '0';
        showcaseImage.style.transform = 'translateX(-50px)';
        showcaseImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(showcaseImage);
    }
    
    if (showcaseText) {
        showcaseText.style.opacity = '0';
        showcaseText.style.transform = 'translateX(50px)';
        showcaseText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(showcaseText);
    }
});

// Record button interaction
document.addEventListener('DOMContentLoaded', function() {
    const recordCircle = document.querySelector('.record-circle');
    if (recordCircle) {
        recordCircle.addEventListener('click', () => {
            recordCircle.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            recordCircle.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                recordCircle.style.background = 'linear-gradient(135deg, #ff8c00, #ff6600)';
                recordCircle.style.transform = 'scale(1)';
            }, 2000);
        });
    }
});

// Interactive control items
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.control-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            document.querySelectorAll('.control-item').forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Simulate different actions based on control
            switch(index) {
                case 0: // Ekran Seç
                    showScreenSelection();
                    break;
                case 1: // Ses Ayarları
                    showAudioSettings();
                    break;
                case 2: // Kalite
                    showQualitySettings();
                    break;
            }
        });
    });
});

// Simulate screen selection
function showScreenSelection() {
    const item = document.querySelector('.control-item:nth-child(1)');
    if (item) {
        const originalText = item.innerHTML;
        item.innerHTML = '<span>🖥️ Main Screen Selected</span>';
        
        setTimeout(() => {
            item.innerHTML = originalText;
        }, 2000);
    }
}

// Simulate audio settings
function showAudioSettings() {
    const item = document.querySelector('.control-item:nth-child(2)');
    if (item) {
        const originalText = item.innerHTML;
        item.innerHTML = '<span>🎵 Mikrofon Active</span>';
        
        setTimeout(() => {
            item.innerHTML = originalText;
        }, 2000);
    }
}

// Simulate quality settings
function showQualitySettings() {
    const item = document.querySelector('.control-item:nth-child(3)');
    if (item) {
        const originalText = item.innerHTML;
        item.innerHTML = '<span>⭐1080p HD</span>';
        
        setTimeout(() => {
            item.innerHTML = originalText;
        }, 2000);
    }
}

// Showcase play button interaction - sadece hover efekti
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            // Play button sadece görsel efekt için, herhangi bir aksiyon yok
            playButton.style.transform = 'scale(1.2)';
            setTimeout(() => {
                playButton.style.transform = 'scale(1)';
            }, 200);
        });
    }
});

// Orange theme particles effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: #ff8c00;
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: float ${Math.random() * 15 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation styles
function addParticleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.1;
            }
            50% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .particles-container .particle {
            will-change: transform, opacity;
        }
    `;
    document.head.appendChild(style);
}

// Mobile menu functionality
function initMobileMenu() {
    // Mobile menu button oluştur
    const nav = document.querySelector('.nav');
    if (nav && window.innerWidth <= 768) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        nav.appendChild(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-active');
    }
}

// Add mobile styles
function addMobileStyles() {
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
            
            .nav-menu {
                position: fixed;
                top: 70px;
                right: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: var(--surface);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 2rem;
                transition: right 0.3s ease;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                border-left: 1px solid var(--border);
                z-index: 999;
            }
            
            .nav-menu.mobile-active {
                right: 0;
            }
            
            .nav-menu li {
                margin: 1rem 0;
            }
            
            .nav-menu a {
                font-size: 1.2rem;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
}

// Scroll to top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--accent-gradient);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--glow);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Performance optimization
function optimizePerformance() {
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addParticleStyles();
    addMobileStyles();
    initMobileMenu();
    addScrollToTop();
    optimizePerformance();
});

// Initialize particles after page load
window.addEventListener('load', function() {
    createParticles();
});

// Handle resize events
window.addEventListener('resize', function() {
    // Reinitialize mobile menu if needed
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('mobile-active');
        }
    }
});

// Cleanup function for better performance
window.addEventListener('beforeunload', function() {
    // Remove particles container
    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
        particlesContainer.remove();
    }
});