window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 500px)").matches) {
        console.log("Screen width is at least 500px");
    } else {
        console.log("Screen less than 500px");
    }
});


// Получаем элементы слайдера
const slider = document.querySelector('.gallery');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderDots = document.querySelectorAll('.dot');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
  thisSlide(slideIndex);
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  thisSlide(slideIndex);
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
   
    } else {
      slide.style.display = 'none';
  
    }
  });
  thisSlide(slideIndex);
}

//Функция указания активного слайда
function thisSlide(index){
    
    sliderDots.forEach(item => item.classList.remove('dot_active'));
   sliderDots[index].classList.add('dot_active');
   sliderDots[index].classList.add('dot_active');

}

// Реализации клика по точкам
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
    thisSlide(slideIndex);
        })
})



// Инициализация слайдера
updateSlider();
