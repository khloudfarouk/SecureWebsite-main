


const contentItems = document.querySelectorAll('.content-item');
  const carouselElement = document.getElementById('imageCarousel');

  let currentIndex = 0;
  carouselElement.addEventListener('slide.bs.carousel', function (event) {
    // إزالة active من المحتوى القديم
    contentItems[currentIndex].classList.remove('active');
    // تحديد المحتوى الجديد
    currentIndex = event.to;
    contentItems[currentIndex].classList.add('active');
  });






  // العناصر
const cardIcons = document.querySelectorAll('.wwd-card-icon');
const slidePreview = document.getElementById('wwd-slide-preview');
const slideImg = document.getElementById('wwd-slide-img');
const slideName = document.getElementById('wwd-slide-name');

cardIcons.forEach(icon => {
  icon.addEventListener('mouseenter', (e) => {
    const imgSrc = icon.getAttribute('data-img');
    const name = icon.getAttribute('data-name');

    slideImg.src = imgSrc;
    slideName.textContent = name;

    slidePreview.style.display = 'block';

    // موقع السلايد حسب الماوس
    const rect = icon.getBoundingClientRect();
    slidePreview.style.top = rect.bottom + window.scrollY + 10 + 'px';
    slidePreview.style.left = rect.left + window.scrollX + 'px';
  });

  icon.addEventListener('mouseleave', () => {
    slidePreview.style.display = 'none';
  });
});







