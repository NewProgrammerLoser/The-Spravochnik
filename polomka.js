document.addEventListener('DOMContentLoaded', () => {
    const darkness = document.getElementById('darkness-layer');

    // свет за мышкой
    document.addEventListener('mousemove', (e) => {
        darkness.style.setProperty('--x', e.clientX + 'px');
        darkness.style.setProperty('--y', e.clientY + 'px');
    });

    //на телефоне
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        darkness.style.setProperty('--x', touch.clientX + 'px');
        darkness.style.setProperty('--y', touch.clientY + 'px');
    });
});