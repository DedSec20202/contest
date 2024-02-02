const navBtn = document.querySelector('.openCloseNav');
const navBtnImg = navBtn.querySelector('img')
const nav = document.querySelector('.nav-mobile')
const navLinks = nav.querySelectorAll('a')
const slider = document.querySelector('.slider')

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("flex")
        navBtnImg.src = "./img/svg/nav-open.svg";
        navBtnImg.setAttribute("openClose", "open")
        slider.classList.remove("none")
        slider.classList.add("slider")
    })
});

navBtn.addEventListener("click", () => {
    if (navBtnImg.getAttribute("openClose") == 'open') {
        navBtnImg.src = "./img/svg/nav-close.svg";
        navBtnImg.setAttribute("openClose", "close")
    } else {
        navBtnImg.src = "./img/svg/nav-open.svg";
        navBtnImg.setAttribute("openClose", "open")
    }
    nav.classList.toggle("flex")
    slider.classList.toggle("slider")
    slider.classList.toggle("none")
})