/* ============================================
   EFECTOS INTERACTIVOS AVANZADOS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Crear corazones flotantes
    createFloatingHearts();
    
    // Efectos de scroll
    setupScrollEffects();
    
    // Efectos en fotos
    setupPhotoEffects();
    
    // Partículas de brillo al hacer clic
    setupClickEffects();
});

// Crear corazones dorados flotantes
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💛';
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: 100%;
            font-size: ${Math.random() * 1 + 0.8}rem;
            pointer-events: none;
            opacity: 0.3;
            animation: float-up ${Math.random() * 5 + 6}s ease-in infinite;
            z-index: 1;
        `;

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 11000);
    }, 800);
}

// Efectos de scroll paralax
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const accent = document.querySelector('.geometric-accent');
        
        if (accent) {
            accent.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0001})`;
        }

        // Animar elementos al entrar en vista
        document.querySelectorAll('.section-title, .photo-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.style.opacity = '1';
            }
        });
    });
}

// Efectos en fotos con brillo
function setupPhotoEffects() {
    const photoContainers = document.querySelectorAll('.photo-container');
    
    photoContainers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const glow = document.createElement('div');
            glow.style.cssText = `
                position: absolute;
                pointer-events: none;
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%);
                left: ${x - 100}px;
                top: ${y - 100}px;
                border-radius: 50%;
                animation: glow-fade 0.8s ease-out forwards;
                z-index: 10;
            `;
            container.appendChild(glow);

            setTimeout(() => glow.remove(), 800);
        });
    });
}

// Partículas al hacer clic
function setupClickEffects() {
    document.addEventListener('click', (e) => {
        createClickParticles(e.clientX, e.clientY);
    });
}

function createClickParticles(x, y) {
    for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '💛';
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            font-size: 1rem;
            z-index: 9999;
            animation: particle-burst ${Math.random() * 1.5 + 1}s ease-out forwards;
        `;
        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 2500);
    }
}

// Estilos de animaciones adicionales
const advancedStyles = document.createElement('style');
advancedStyles.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes glow-fade {
        from {
            opacity: 1;
            filter: blur(0px);
        }
        to {
            opacity: 0;
            filter: blur(10px);
        }
    }

    @keyframes particle-burst {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(
                ${Math.random() * 200 - 100}px,
                ${Math.random() * -200 - 50}px
            ) scale(0);
            opacity: 0;
        }
    }

    /* Suavizar todas las transiciones */
    * {
        transition: all 0.3s ease;
    }

    /* Scroll suave */
    html {
        scroll-behavior: smooth;
    }
`;
document.head.appendChild(advancedStyles);



