
const headerEl = document.querySelector('header')
const scrollToTop = document.querySelector('.scrollToTop')
window.addEventListener('scroll', () => {
  let height = headerEl.getBoundingClientRect().height
  // let height = headerEl.offsetHeight
  // 顶部导航栏会出现
  if (window.pageYOffset - height > 800) {
    if (!headerEl.classList.contains('sticky')) {
      headerEl.classList.add('sticky')
    }
  } else {
    headerEl.classList.remove('sticky')
  }
  // 返回顶部出现
  if (window.pageYOffset > 2000) {
    scrollToTop.style.
  }
})



// 轮播图
const glide = new Glide('.glide')
const captionEl = document.querySelectorAll('.slide-caption')

glide.on(['mount.after', 'run.after'], () => {
  const caption = captionEl[glide.index]
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: 'linear',
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger([40, 10]), 0]
  })
})

glide.on('run.before', () => {
  document.querySelectorAll('.slide-caption > *').forEach(el => {
    el.style.opacity = 0
  })
})

glide.mount()

const isotope = new Isotope('.cases', {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
})
// 分类按钮
const filterBtns = document.querySelector('.filter-btns')
filterBtns.addEventListener('click', e => {
  let { target } = e
  const filterOption = target.getAttribute('data-filter')
  if (filterOption) {
    document
      .querySelectorAll('.filter-btn.active')
      .forEach(btn => btn.classList.remove('active'))
    target.classList.add('active')
    isotope.arrange({ filter: filterOption })
  }
})
