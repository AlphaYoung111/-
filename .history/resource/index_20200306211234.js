const headerEl = document.querySelector('header')
const scrollToTop = document.querySelector('.scrollToTop')

window.addEventListener('scroll', () => {
  let height = headerEl.getBoundingClientRect().height
  // 顶部导航栏会出现
  if (window.pageYOffset - height > 800) {
    if (!headerEl.classList.contains('sticky')) {
      headerEl.classList.add('sticky')
    }
  } else {
    headerEl.classList.remove('sticky')
  }
  // 返回顶部按钮出现
  if (window.pageYOffset > 2000) {
    scrollToTop.style.display = 'block'
  } else {
    scrollToTop.style.display = 'none'
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

// 点击分类按钮
const isotope = new Isotope('.cases', {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
})

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

// 滚动到指定位置的元素的动画显示
const scrollAnimateOption = {
  delay: 300,
  distance: '50px',
  duration: 500,
  easing: 'ease-in-out',
  origin: 'bottom'
}
ScrollReveal().reveal('.feature', { ...scrollAnimateOption, interval: 350 })
ScrollReveal().reveal('.service-item', {
  ...scrollAnimateOption,
  interval: 350
})
const dataSectionEl = document.querySelector('.data-section')

// 数据区域数字跳动
ScrollReveal().reveal('.data-section', {
  beforeReveal: () => {
    anime({
      targets: '.data-piece .num',
      innerHTML: el => {
        return [0, el.innerHTML]
      },
      duration: 2000,
      round: 1,
      easing: 'easeInExpo'
    })
    dataSectionEl.style.backgroundPosition = `center calc(50% - ${dataSectionEl.getBoundingClientRect()
      .bottom / 5}px)`
  }
})

// 滚动成功案例背景视差效果
window.addEventListener('scroll', () => {
  const bottom = dataSectionEl.getBoundingClientRect().bottom
  const top = dataSectionEl.getBoundingClientRect().top
  if (bottom >= 0 && top < window.innerHeight) {
    dataSectionEl.style.backgroundPosition = `center calc(50% - ${bottom /
      5}px)`
  }
})

// 锚点链接平滑滚动
const smoothScroll = new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]', {
  header: 'header',
  offset:80
})
// 探索更多
const exploreBtn = document.querySelectorAll('.explore-btn')
exploreBtn.forEach(item => {
  item.addEventListener('click', () => {
    smoothScroll.animateScroll(document.querySelector('#about-us'))
  })
})

// 折叠按钮
const burgerEl = document.querySelector('.burger')
burgerEl.addEventListener('click', () => {
  headerEl.
})



