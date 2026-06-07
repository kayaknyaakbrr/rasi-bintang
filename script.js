// ========================================
// 1. MEMBUAT BINTANG (150 BINTANG)
// ========================================
const sky = document.getElementById('sky');

for (let i = 0; i < 150; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    
    let x = Math.random() * 100;
    let y = Math.random() * 85;
    let size = Math.random() * 2.5 + 1;
    let duration = Math.random() * 3 + 1;
    let delay = Math.random() * -3;
    
    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = delay + 's';
    
    sky.appendChild(star);
}

// ========================================
// 2. MEMBUAT RUMPUT HITAM LEBAT (500 HELAI) - GERAK SEPERTI DAUN
// ========================================
const grassField = document.getElementById('grassField');

for (let i = 0; i < 500; i++) {
    let grass = document.createElement('div');
    grass.classList.add('grass-blade');
    
    let x = Math.random() * 100;
    let height = Math.random() * 60 + 15;
    let width = Math.random() * 3 + 2;
    let delay = Math.random() * -5;
    let speed = Math.random() * 2 + 4;
    
    const blackColors = ['#000000', '#050505', '#0a0a0a', '#111111', '#080808', '#0d0d0d'];
    let color = blackColors[Math.floor(Math.random() * blackColors.length)];
    
    grass.style.left = x + '%';
    grass.style.height = height + 'px';
    grass.style.width = width + 'px';
    grass.style.animationDelay = delay + 's';
    grass.style.animationDuration = speed + 's';
    grass.style.background = 'linear-gradient(to top, ' + color + ' 0%, #1a1a1a 100%)';
    
    grassField.appendChild(grass);
}

// ========================================
// 3. RUMPUT DEPAN MANUSIA (100 HELAI)
// ========================================
const hill = document.querySelector('.hill');

for (let i = 0; i < 100; i++) {
    let grassExtra = document.createElement('div');
    grassExtra.classList.add('grass-blade');
    
    let x = 35 + Math.random() * 30;
    let height = Math.random() * 50 + 30;
    let width = Math.random() * 2 + 2;
    let delay = Math.random() * -4;
    let speed = Math.random() * 2 + 4;
    
    grassExtra.style.left = x + '%';
    grassExtra.style.height = height + 'px';
    grassExtra.style.width = width + 'px';
    grassExtra.style.animationDelay = delay + 's';
    grassExtra.style.animationDuration = speed + 's';
    grassExtra.style.zIndex = '25';
    
    hill.appendChild(grassExtra);
}

// ========================================
// 4. STYLE ANIMASI
// ========================================
const style = document.createElement('style');
style.innerHTML = `
    @keyframes grass-sway-leaves {
        0% { transform: rotate(0deg) skewX(0deg); }
        15% { transform: rotate(2.5deg) skewX(3deg); }
        35% { transform: rotate(1.5deg) skewX(1deg); }
        50% { transform: rotate(0deg) skewX(0deg); }
        65% { transform: rotate(-2.5deg) skewX(-3deg); }
        85% { transform: rotate(-1.5deg) skewX(-1deg); }
        100% { transform: rotate(0deg) skewX(0deg); }
    }
    @keyframes star-twinkle {
        0% { opacity: 0.2; transform: scale(0.7); box-shadow: 0 0 2px white; }
        50% { opacity: 0.7; transform: scale(1); box-shadow: 0 0 4px white; }
        100% { opacity: 1; transform: scale(1.3); box-shadow: 0 0 8px white, 0 0 15px rgba(255,255,255,0.3); }
    }
`;
document.head.appendChild(style);

// ========================================
// 5. AWAN MALAM
// ========================================
function createClouds() {
    for (let i = 0; i < 4; i++) {
        let cloud = document.createElement('div');
        cloud.style.position = 'absolute';
        cloud.style.top = (8 + i * 12) + '%';
        cloud.style.left = '-200px';
        cloud.style.width = (180 + Math.random() * 120) + 'px';
        cloud.style.height = '35px';
        cloud.style.background = 'rgba(255,255,255,0.025)';
        cloud.style.borderRadius = '50px';
        cloud.style.filter = 'blur(25px)';
        cloud.style.zIndex = '3';
        
        sky.appendChild(cloud);
        
        let duration = 55 + Math.random() * 35;
        cloud.animate([
            { left: '-200px' },
            { left: '120%' }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            easing: 'linear'
        });
    }
}

createClouds();

// ========================================
// 6. CAPTION
// ========================================
const caption = document.createElement('div');
caption.className = 'caption';
caption.textContent = 'the night reveals • scorpio';
document.body.appendChild(caption);

// ========================================
// 7. INTERAKSI MOUSE & TOUCH (HP)
// ========================================
const human = document.getElementById('human');

// Untuk Desktop (Mouse)
document.addEventListener('mousemove', function(e) {
    const centerX = window.innerWidth / 2;
    const mouseX = e.clientX;
    const diffX = (mouseX - centerX) / centerX;
    
    if (human) {
        let rotateY = diffX * 3;
        human.style.transform = 'translateX(-50%) perspective(500px) rotateY(' + rotateY + 'deg)';
    }
});

// Untuk HP (Touch/Sentuh)
document.addEventListener('touchmove', function(e) {
    e.preventDefault(); // Mencegah scroll
    const touch = e.touches[0];
    const centerX = window.innerWidth / 2;
    const touchX = touch.clientX;
    const diffX = (touchX - centerX) / centerX;
    
    if (human) {
        let rotateY = diffX * 3;
        human.style.transform = 'translateX(-50%) perspective(500px) rotateY(' + rotateY + 'deg)';
    }
}, { passive: false });

// Reset posisi saat touch berakhir (angkat jari dari layar)
document.addEventListener('touchend', function() {
    if (human) {
        human.style.transform = 'translateX(-50%) perspective(500px) rotateY(0deg)';
    }
});

// ========================================
// 8. KONSOLE LOG
// ========================================
console.log('╔══════════════════════════════════════╗');
console.log('║     MALAM ESTETIKA - SCORPION     ║');
console.log('║     Interaktif (Mouse & Touch)      ║');
console.log('╚══════════════════════════════════════╝');