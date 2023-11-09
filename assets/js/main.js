
let allLinks = document.querySelectorAll(" .navbar li a")
const toggler = document.querySelector(".toggler-icon")


toggler.onclick = () => {
  toggler.classList.toggle("fa-times")
}


allLinks.forEach(link => {
  link.addEventListener("click", e => {
    handleActive(e, link)

  })

})

function handleActive(ev, link) {
  ev.target.parentElement.parentElement.querySelectorAll(".active").forEach(ele => {
    ele.classList.remove("active")
  })

  link.classList.add("active")

}






// Img Slider
let imgs = Array.from(document.querySelectorAll(".slides img"));
let slidesNumber = imgs.length;
let currentSlide = 0;


function nextSlide() {
  currentSlide++

  if (currentSlide >= slidesNumber) {
    currentSlide = 0
  }

  showSlides()
}

function showSlides() {
  imgs.forEach((img, index) => {
    if (currentSlide === index) {
      img.classList.add("active")

    } else {
      img.classList.remove("active")

    }
  })
}

showSlides()


setInterval(nextSlide, 10000);





let arrow = document.querySelector(".up")

window.onscroll =  () =>   {

  const nav = document.querySelector('.navbar-collapse');
  nav.classList.remove("show")
  toggler.classList.remove("fa-times")



  this.scrollY >= 700 ? arrow.classList.add("show") : arrow.classList.remove("show")
}

arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

