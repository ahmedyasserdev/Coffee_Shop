
let allLinks = document.querySelectorAll(" .navbar li a")


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


let arrow = document.querySelector(".up")

window.onscroll = function () {
  this.scrollY >= 700 ? arrow.classList.add("show") : arrow.classList.remove("show")
}

arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const audio = new Audio('assets/Music/Music.mkv');
audio.volume = 0.5;


const playButton = document.querySelector('#play-button');

let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    playButton.textContent = 'Stop';
    audio.pause();
  } else {

    playButton.textContent = 'Play';
    audio.play();

  }
  isPlaying = !isPlaying;
});





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

