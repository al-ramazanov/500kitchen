document.addEventListener("DOMContentLoaded", (e) => {
  const replaceTarget = document.querySelector('.replace-target-js')
  const replaceItems = document.querySelectorAll(".replace-item-js")
  if (replaceTarget && replaceItems) {
    for (const item of replaceItems) {
      if (window.innerWidth <= 992) {
        replaceTarget.prepend(item)
      }
    }
  }
  const burger = document.querySelector('.burger-btn')
  const menu = document.querySelector('.header-bottom__nav')
  if (burger && menu) {
    burger.addEventListener('click', e => {
      menu.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
    document.addEventListener("click", e => {
      if (e.target == menu) {
        menu.classList.remove('active')
        document.body.style.overflow = null
      }
    })

    document.addEventListener("keydown", e => {
      if (e.key == "Escape") {
        menu.classList.remove('active')
        document.body.style.overflow = null
      }
    })
  }

  function addPadding() {
    const header = document.querySelector('.header')
    const main = document.querySelector('main')
    main.style.paddingTop = `${header.scrollHeight}px`
  }


  addPadding()

//  ===================swipers

  const cardThumbSwiper = new Swiper('.card-slider-thumb', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 18,
    autoHeight: true,
    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.card-slider-thumb__btn.next',
      prevEl: '.card-slider-thumb__btn.prev',
    },

  });
  const cardSwiper = new Swiper('.card-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,

    thumbs: {
      swiper: cardThumbSwiper,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.card-slider-btn.next',
      prevEl: '.card-slider-btn.prev',
    },

  });
//  ===================swipers
})
