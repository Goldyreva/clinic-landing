let slides = document.querySelectorAll('.slider__item')
let prevButton = document.getElementById('prev-button')
let nextButton = document.getElementById('next-button')
let span = document.getElementById('current-slide')
let activeSlide = 0

nextButton.addEventListener('click', () => {
    activeSlide < slides.length-1 ? activeSlide++ : activeSlide = 0
    setActiveSlide(activeSlide)
})

prevButton.addEventListener('click', () => {
    activeSlide > 0 ? activeSlide-- : activeSlide = slides.length-1
    setActiveSlide(activeSlide)
})

const setActiveSlide = (activeSlide) => {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
    span.textContent = activeSlide + 1
}