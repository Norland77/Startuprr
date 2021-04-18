/*Показ геллереи*/
function viewDiv(){
  if (document.getElementById("gallery_hiden").style.display == "block")
  {
    document.getElementById("gallery_hiden").style.display = "none";
    document.getElementById("gallery_hiden").style.transitionDuration = "0.3s";
  }
  else
  {
    document.getElementById("gallery_hiden").style.display = "block";
    document.getElementById("gallery_hiden").style.transitionDuration = "0.3s";
  }
};
/*Показ цитат*/
function viewQuotes() {
    if (document.getElementById("quotes_content_1").style.display == "block")
    {
    document.getElementById("quotes_content_1").style.display = "none";
    document.getElementById("quotes_content_2").style.display = "block";
    document.getElementById("gallery_hiden").style.transitionDuration = "0.3s";
    }
    else
    {
        document.getElementById("quotes_content_1").style.display = "block";
        document.getElementById("quotes_content_2").style.display = "none";
    document.getElementById("gallery_hiden").style.transitionDuration = "0.3s";
    }
};
/*Показ карты*/
function viewMap(){
  const btn = document.querySelector('.Map_btn');

  if (document.getElementById("Map").style.display == "block")
  {
    document.getElementById("Map").style.display = "none";
    document.getElementById("Map").style.transitionDuration = "0.3s";
    btn.innerHTML = ('Show map')
  }
  else
  {
    document.getElementById("Map").style.display = "block";
    document.getElementById("Map").style.transitionDuration = "0.3s";
    btn.innerHTML = ('Hide map')
  }
};


/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("karusel_img");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.opacity = "50%"
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.opacity = "1";    
}

function HideScrol() {
  if (document.getElementById("wrapper").style.overflowY == "hidden")
  {
    document.getElementById("wrapper").style.overflowY = "scroll";
    //document.getElementById("header").style.position = "sticky";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("header").style.transitionDuration = "0.5s";
  }
  else
  {
    document.getElementById("wrapper").style.overflowY = "hidden";
    //document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.opacity = "0";
    document.getElementById("header").style.transitionDuration = "0.5s";
  }
};