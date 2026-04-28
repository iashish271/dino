// Typing Animation for Special Message
const typingText = document.getElementById('typing-text');
const message = "You are my cutiee pie 🫶💖";
let charIndex = 0;

function typeMessage() {
    if (charIndex < message.length) {
        typingText.textContent += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, 100);
    } else {
        // Restart typing animation after a pause
        setTimeout(() => {
            typingText.textContent = '';
            charIndex = 0;
            setTimeout(typeMessage, 500);
        }, 3000);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeMessage, 1000);
});

// Dino Button Interaction
const dinoButton = document.getElementById('dino-button');
const interactionResult = document.getElementById('interaction-result');
let isShowing = false;

dinoButton.addEventListener('click', () => {
    if (!isShowing) {
        interactionResult.classList.add('show');
        dinoButton.textContent = 'Hide the magic 💕';
        isShowing = true;
        
        // Create floating hearts explosion
        createFloatingHearts();
        
        // Play a cute sound effect (optional - you can add audio files)
        playCuteSound();
    } else {
        interactionResult.classList.remove('show');
        dinoButton.innerHTML = '<span class="button-text">Tap me 🦖</span>';
        isShowing = false;
    }
});

// Create Floating Hearts on Button Click
function createFloatingHearts() {
    const colors = ['#ff6b9d', '#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb'];
    const heartSymbols = ['💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out forwards`;
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add float up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-heart, .floating-star');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Gallery Image Hover Effects
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Add a random floating dino near the image
        const randomDino = ['🦖', '🦕', '🦄', '🐣', '🐥'][Math.floor(Math.random() * 5)];
        const dinoElement = document.createElement('div');
        dinoElement.innerHTML = randomDino;
        dinoElement.style.position = 'absolute';
        dinoElement.style.fontSize = '2rem';
        dinoElement.style.pointerEvents = 'none';
        dinoElement.style.animation = 'dinoPop 0.5s ease-out';
        dinoElement.style.zIndex = '10';
        
        const rect = item.getBoundingClientRect();
        dinoElement.style.left = (rect.left + Math.random() * rect.width) + 'px';
        dinoElement.style.top = (rect.top - 30) + 'px';
        
        document.body.appendChild(dinoElement);
        
        setTimeout(() => {
            dinoElement.remove();
        }, 500);
    });
});

// Add dino pop animation
const dinoPopStyle = document.createElement('style');
dinoPopStyle.textContent = `
    @keyframes dinoPop {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(1) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(dinoPopStyle);

// Interactive Dino Character in Hero
const heroDino = document.querySelector('.dino-character');
let clickCount = 0;

heroDino.addEventListener('click', () => {
    clickCount++;
    const messages = [
        'Rawr! 🦖',
        'I love you! 💕',
        'You\'re cute! 🥰',
        'Rawr means I love you in dinosaur! 🦖💕',
        'Best day ever! 🌟'
    ];
    
    if (clickCount <= messages.length) {
        // Create speech bubble
        const bubble = document.createElement('div');
        bubble.textContent = messages[clickCount - 1];
        bubble.style.position = 'absolute';
        bubble.style.background = 'white';
        bubble.style.borderRadius = '20px';
        bubble.style.padding = '10px 15px';
        bubble.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        bubble.style.fontSize = '1rem';
        bubble.style.fontWeight = '600';
        bubble.style.color = '#ff6b9d';
        bubble.style.zIndex = '100';
        bubble.style.animation = 'bubbleFade 2s ease-out forwards';
        bubble.style.top = '-60px';
        bubble.style.left = '50%';
        bubble.style.transform = 'translateX(-50%)';
        
        heroDino.parentElement.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 2000);
    }
    
    // Make dino jump
    heroDino.style.animation = 'none';
    setTimeout(() => {
        heroDino.style.animation = 'dinoJump 0.5s ease-out';
    }, 10);
});

// Add bubble fade and dino jump animations
const bubbleStyle = document.createElement('style');
bubbleStyle.textContent = `
    @keyframes bubbleFade {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
        }
        20% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        80% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
    }
    
    @keyframes dinoJump {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-30px) rotate(10deg);
        }
    }
`;
document.head.appendChild(bubbleStyle);

// Mobile Touch Support
if ('ontouchstart' in window) {
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.dino-button, .gallery-item');
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
        });
        button.addEventListener('touchend', () => {
            button.style.transform = '';
        });
    });
}

// Random Floating Elements Generator
function generateRandomFloatingElement() {
    const elements = ['💕', '💖', '💗', '💝', '⭐', '✨', '🌟', '🦖', '🦕'];
    const element = document.createElement('div');
    element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    element.style.position = 'fixed';
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 15 + 10) + 'px';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '1';
    element.style.animation = `randomFloat ${Math.random() * 5 + 3}s linear forwards`;
    document.body.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 8000);
}

// Generate random floating elements periodically
setInterval(generateRandomFloatingElement, 3000);

// Add random float animation
const randomFloatStyle = document.createElement('style');
randomFloatStyle.textContent = `
    @keyframes randomFloat {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-120vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(randomFloatStyle);

// Easter Egg: Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Create rainbow dinosaurs everywhere!
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const dino = document.createElement('div');
            dino.innerHTML = '🦖';
            dino.style.position = 'fixed';
            dino.style.left = Math.random() * window.innerWidth + 'px';
            dino.style.top = Math.random() * window.innerHeight + 'px';
            dino.style.fontSize = '3rem';
            dino.style.pointerEvents = 'none';
            dino.style.zIndex = '9999';
            dino.style.animation = `rainbowSpin ${Math.random() * 2 + 1}s linear infinite`;
            document.body.appendChild(dino);
            
            setTimeout(() => {
                dino.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add rainbow spin animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbowSpin {
        0% {
            transform: rotate(0deg) scale(1);
            filter: hue-rotate(0deg);
        }
        50% {
            transform: rotate(180deg) scale(1.5);
            filter: hue-rotate(180deg);
        }
        100% {
            transform: rotate(360deg) scale(1);
            filter: hue-rotate(360deg);
        }
    }
`;
document.head.appendChild(rainbowStyle);

// Sound effect function (placeholder - you can add actual audio files)
function playCuteSound() {
    // You can add audio playback here
    // const audio = new Audio('cute-sound.mp3');
    // audio.play();
    console.log('🎵 Playing cute sound effect!');
}

// Page Visibility API - Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    const animations = document.querySelectorAll('.floating-heart, .floating-star, .dino-character, .dino-heart');
    if (document.hidden) {
        animations.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        animations.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Smooth reveal animations on scroll
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

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
