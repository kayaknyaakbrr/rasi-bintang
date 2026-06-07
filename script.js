// ========================================
// 1. MEMBUAT BINTANG LAINNYA
// ========================================
const sky = document.getElementById('sky');

// Membuat 150 bintang tambahan secara acak
for (let i = 0; i < 150; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    
    // Posisi acak
    let x = Math.random() * 100;
    let y = Math.random() * 85;
    
    // Ukuran bervariasi
    let size = Math.random() * 2 + 1;
    
    // Durasi animasi berbeda (agar tidak berkedip bersamaan)
    let duration = Math.random() * 3 + 1;
    
    // Delay acak
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
// 2. MEMBUAT RUMPUT HITAM RIMBUN
// ========================================
const grassField = document.getElementById('grassField');

// Membuat 300 helai rumput dengan variasi tinggi
for (let i = 0; i < 300; i++) {
    let grass = document.createElement('div');
    grass.classList.add('grass-blade');
    
    // Posisi horizontal (sebaran merata)
    let x = Math.random() * 100;
    
    // Variasi tinggi (15px - 50px)
    let height = Math.random() * 35 + 15;
    
    // Variasi ketebalan (2px - 4px)
    let width = Math.random() * 2 + 2;
    
    // Delay animasi berbeda agar bergoyang tidak bersamaan
    let delay = Math.random() * -4;
    
    // Kecepatan goyangan berbeda
    let speed = Math.random() * 1.5 + 2;
    
    // Variasi warna hitam
    const blackColors = ['#000000', '#0a0a0a', '#111111', '#050505', '#1a1a1a'];
    let color = blackColors[Math.floor(Math.random() * blackColors.length)];
    
    grass.style.left = x + '%';
    grass.style.height = height + 'px';
    grass.style.width = width + 'px';
    grass.style.animationDelay = delay + 's';
    grass.style.animationDuration = speed + 's';
    grass.style.background = `linear-gradient(to top, ${color} 0%, #222 100%)`;
    
    grassField.appendChild(grass);
}

// ========================================
// 3. ANIMASI TAMBAHAN
// ========================================

// Menambahkan style animasi grass-sway
const style1 = document.createElement('style');
style1.innerHTML = `
    @keyframes grass-sway {
        0% { transform: skewX(0deg) rotate(0deg); }
        25% { transform: skewX(-20deg) rotate(-6deg); }
        50% { transform: skewX(-10deg) rotate(-3deg); }
        75% { transform: skewX(-22deg) rotate(-7deg); }
        100% { transform: skewX(0deg) rotate(0deg); }
    }
`;
document.head.appendChild(style1);

// Menambahkan style twinkle untuk bintang latar
const style2 = document.createElement('style');
style2.innerHTML = `
    @keyframes star-twinkle {
        0% { opacity: 0.2; transform: scale(0.7); }
        50% { opacity: 0.6; transform: scale(1); }
        100% { opacity: 1; transform: scale(1.3); }
    }
`;
document.head.appendChild(style2);

// ========================================
// 4. MENAMBAHKAN KAPALANG MALAM
// ========================================

// Membuat awan tipis yang bergerak perlahan
function createClouds() {
    for (let i = 0; i < 3; i++) {
        let cloud = document.createElement('div');
        cloud.style.position = 'absolute';
        cloud.style.top = (10 + i * 15) + '%';
        cloud.style.left = '-200px';
        cloud.style.width = (200 + Math.random() * 150) + 'px';
        cloud.style.height = '40px';
        cloud.style.background = 'rgba(255,255,255,0.03)';
        cloud.style.borderRadius = '50px';
        cloud.style.filter = 'blur(20px)';
        cloud.style.zIndex = '3';
        
        sky.appendChild(cloud);
        
        // Animasi pergerakan awan
        let duration = 60 + Math.random() * 40;
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
// 5. CAPTION ESTETIKA
// ========================================

const caption = document.createElement('div');
caption.className = 'caption';
caption.textContent = 'the night reveals • scorpio';
document.body.appendChild(caption);

// ========================================
// 6. INTERAKSI MOUSE (GERAKAN LEBIH REALISTIS)
// ========================================

const human = document.querySelector('.human-container');

document.addEventListener('mousemove', (e) => {
    // Menghitung jarak mouse dari center
    const centerX = window.innerWidth / 2;
    const mouseX = e.clientX;
    const diffX = (mouseX - centerX) / centerX;
    
    // Gerakan kepala mengikuti mouse (efek subtle)
    if (human) {
        let rotateY = diffX * 3;
        human.style.transform = `translateX(-50%) perspective(500px) rotateY(${rotateY}deg)`;
    }
});

// ========================================
// 7. KONSOLE LOG
// ========================================
console.log(`
╔══════════════════════════════════════╗
║     MALAM ESTETIKA - SCORPION       ║
║     Animasi Dimuat Berhasil        ║
╚══════════════════════════════════════╝
`);