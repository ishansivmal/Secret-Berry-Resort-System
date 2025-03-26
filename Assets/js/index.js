document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelectorAll('.bg_btn');
    const slider = document.querySelectorAll('.slider_img');
    const banner = document.querySelectorAll('.banner_content');
    let currentIndex = 0;

    function sliderC(index) {
        menuBtn.forEach(btn => btn.classList.remove('active'));
        slider.forEach(img => img.classList.remove('active'));
        banner.forEach(content => content.classList.remove('active'));

        menuBtn[index].classList.add('active');
        slider[index].classList.add('active');
        banner[index].classList.add('active');
    }

    menuBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            sliderC(index);
            currentIndex = index;
        });
    });

    // Auto-slide functionality
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slider.length;
        sliderC(currentIndex);
    }, 5000);
});