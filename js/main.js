document.addEventListener('DOMContentLoaded', () => {
    const isMobile = () => window.innerWidth <= 950;
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabSections = document.querySelectorAll('.tab-section');

    const switchTab = (targetId) => {
        if (isMobile()) return; 

        navBtns.forEach(b => {
            b.classList.remove('active');
            if (b.getAttribute('data-target') === targetId) {
                b.classList.add('active');
            }
        });

        tabSections.forEach(section => {
            section.classList.remove('active');
            void section.offsetWidth; 
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    };

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(e.target.getAttribute('data-target'));
        });
    });

    window.addEventListener('resize', () => {
        if (isMobile()) {
            tabSections.forEach(section => section.classList.remove('active'));
        } else {
            const hasActive = Array.from(tabSections).some(s => s.classList.contains('active'));
            if (!hasActive) {
                document.getElementById('tab-about').classList.add('active');
                navBtns[0].classList.add('active');
            }
        }
    });
});