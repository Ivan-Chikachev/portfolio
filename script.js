window.onscroll = function s() {
    let header = document.querySelector('.header');
    if (window.pageYOffset > 350) {
        header.classList.add('header-fixed');
    }
    else {
        header.classList.remove('header-fixed');
    }
}
document.querySelector('.btn').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
  
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
    
  }
  