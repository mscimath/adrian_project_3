// static/main/js/button.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.book-btn');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // usuń, jeśli link ma działać normalnie
        btn.classList.toggle('active');
        btn.setAttribute('aria-pressed', btn.classList.contains('active'));
      });
    });
  
    // Kliknięcie poza przyciskiem — dezaktywuje wszystkie
    document.addEventListener('click', (e) => {
      buttons.forEach(btn => {
        if (!btn.contains(e.target)) {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });
    });
  });
  