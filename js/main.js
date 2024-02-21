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

    const menuClose = document.querySelector('.menu-close')
    if (menuClose) {
      menuClose.addEventListener('click', e => {
        menu.classList.remove('active')
        document.body.style.overflow = null
        e.preventDefault()
      })
    }
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

  function openSelect() {
    const dropdowns = document.querySelectorAll('.dropdown-js')
    if (dropdowns) {
      for (const item of dropdowns) {
        const btn = item.querySelector('.dropdown-btn-js')
        const dropdownBody = item.querySelector('.dropdown-body-js')

        btn.addEventListener('click', e => {
          btn.classList.toggle('active')

          if (btn.classList.contains('active')) {
            dropdownBody.style.maxHeight = `${dropdownBody.scrollHeight}px`
            dropdownBody.style.zIndex = 3;
          } else {
            dropdownBody.style.maxHeight = null
            dropdownBody.style.zIndex = null;
          }
          e.preventDefault()
        })
        const dropdownItems = dropdownBody.querySelectorAll('.dropdown-item-js')
        for (const item of dropdownItems) {
          item.addEventListener('click', e => {
            btn.querySelector('span').innerText = item.innerText;
            btn.classList.remove('active')
            dropdownBody.style.maxHeight = null
            dropdownBody.style.zIndex = null;
            e.preventDefault()
          })
        }
        document.addEventListener("click", (e) => {
          const withinBoundaries = e.composedPath().includes(item);
          if (!withinBoundaries) {
            btn.classList.remove('active')
            dropdownBody.style.maxHeight = null
            dropdownBody.style.zIndex = null;
          }
        });
        document.addEventListener('keydown', e => {
          if (e.key == 'Escape') {
            btn.classList.remove('active')
            dropdownBody.style.maxHeight = null
            dropdownBody.style.zIndex = null;
          }
        })
      }
    }
  }

  openSelect()

  function openInputSelect() {
    const inputSelects = document.querySelectorAll('.calculator-dropdown-js')
    if (inputSelects) {
      for (const item of inputSelects) {
        const input = item.querySelector('.calculator-dropdown-input-js')
        const body = item.querySelector('.calculator-dropdown-body-js')
        const items = body.querySelectorAll('.calculator-dropdown-item-js')

        input.addEventListener('focus', e => {
          body.classList.add('active')
        })

        for (const el of items) {
          el.addEventListener('click', e => {
            input.value = e.currentTarget.innerText;
            body.classList.remove('active')
            e.preventDefault()
          })
        }

        document.addEventListener("click", (e) => {
          const withinBoundaries = e.composedPath().includes(item);
          if (!withinBoundaries) {
            body.classList.remove('active')
            input.blur()
          }
        })
        document.addEventListener('keydown', e => {
          if (e.key == 'Escape') {
            body.classList.remove('active')
            input.blur()
          }
        })
      }

    }
  }

  openInputSelect()

  function addToClick() {
    const btns = document.querySelectorAll('.clickable-js')

    for (const btn of btns) {
      btn.addEventListener('click', e => {
        btns.forEach(e => {
          e.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        e.preventDefault()
      })
    }
  }

  addToClick()

  function cardTabs() {
    const tabBtns = document.querySelectorAll('[data-tab-btn]')
    if (tabBtns) {
      for (const el of tabBtns) {
        el.addEventListener('click', e => {
          const tabId = e.currentTarget.dataset.tabBtn;
          const tabContent = document.querySelector(`[data-id="${tabId}"]`)
          if (tabContent) {
            tabBtns.forEach(el => el.classList.remove('active'))
            const tabContents = document.querySelectorAll('[data-id]')
            tabContents.forEach(el => el.classList.remove('active'))
            el.classList.add('active')
            tabContent.classList.add('active')
            e.preventDefault()
          }
        })
      }
    }
  }

  cardTabs()

  const modalBtn = document.querySelectorAll('[data-modal]')
  if (modalBtn) {
    for (const btn of modalBtn) {
      btn.addEventListener('click', e => {
        const modalId = e.currentTarget.dataset.modal;
        const modal = document.querySelector(`#${modalId}`);
        if (modal) {
          const modalContent = modal.querySelector('.popup__content')
          const closeModal = modal.querySelector('.popup-close')
          modal.classList.add('active')
          modalContent.classList.add('active')
          document.body.style.overflow = 'hidden'

          closeModal.addEventListener('click', e => {
            modal.classList.remove('active')
            modalContent.classList.remove('active')
            document.body.style.overflow = null;
          })
        }
        e.preventDefault()
      })
    }
  }

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


  const slider = document.getElementById('slider');

  if (slider) {
    noUiSlider.create(slider, {
      start: [0, 80],
      connect: true,
      padding: 0,
      tooltips: true,
      range: {
        'min': 0,
        'max': 30000
      },
    });
  }
})


