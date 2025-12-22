document.addEventListener('DOMContentLoaded', function() {
    // تنعيم التمرير عند النقر على روابط التنقل
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // إضافة تأثير عند التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // محاكاة زر التحميل
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            
             window.location.href = '../version/Alph aBac_V2.2.apk';
        });
    });
    
    // تأثير التمرير للبطاقات
    const featureCards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
// قائمة الموبايل المتحركة
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const sideNav = document.getElementById('sideNav');
    
    menuButton.addEventListener('click', () => {
        sideNav.classList.toggle('active');
});
})

  document.getElementById("more").addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({
      behavior: "smooth"
    });
  });
