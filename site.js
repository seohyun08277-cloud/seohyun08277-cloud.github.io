
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let currentSlide = 0;

function showSlide(index){
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  if(index < 0) index = slides.length-1;
  if(index >= slides.length) index = 0;

  currentSlide = index;

  slider.style.transform = `translateX(-${index*100}%)`;
}

function nextSlide(){
  showSlide(currentSlide + 1);
}

function prevSlide(){
  showSlide(currentSlide - 1);
}

document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const url = this.href;

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location = url;
      }, 400);
    });
  }
});

