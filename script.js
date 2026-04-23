document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector("main");
    const path = window.location.pathname;

        // I hate JS <3
        // Shoutout to Gemini for helping me

    let category = "";
    if (path.includes("whopper.html")) category = "burgers";
    else if (path.includes("chicken.html")) category = "chicken";
    else if (path.includes("otherMenu.html")) category = "other";
    else if (path.includes("ltMenu.html")) category = "limited";

    if (category) {
        loadCatalog(category, mainContainer);
    }
});

function loadCatalog(category, container) {
    fetch(`${category}.json`)
        .then(response => response.json())
        .then(data => {
            const items = data[category];
            container.innerHTML = ''; 

            items.forEach((item, index) => {
                const section = document.createElement("section");
                
                // s1 is orange back with left image, s2 is tan with right
                const className = (index % 2 === 0) ? "s1" : "s2";
                section.classList.add(className); 


                section.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="content" id="${item.class}">
                        <h2>${item.name}</h2>
                        <p class="rating">${item.rating}</p>
                        <p class="pronunciation">&nbsp;${item.say}</p>
                        <div class="shortHr"></div>
                        <p>${item.desc}</p>
                        <div class="review"><h3>Lore:</h3><p>"${item.review}"</p></div>
                    </div>
                `;
                container.appendChild(section);
            });

            if (window.location.hash) {
                const target = document.querySelector(window.location.hash);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        })
}


function openModal() {
  document.getElementById("lightbox").style.display = "block";
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("small");
  var captionText = document.getElementById("");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}