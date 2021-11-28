const slidePage = document.querySelector(".slide-page");
const page = document.querySelector("#last");
const output = document.querySelector(".output");
const erro = document.querySelector("#erro");

const nextBtnFirst = document.querySelector(".firstNext");
//const startBtn = document.querySelector("#start");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");


let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  
  slidePage.style.marginLeft = "-25%";
  progressBar.style.visibility = "visible";
  progressBar.style.margin = "40px 0";
  //startBtn.style.visibility = "hidden";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  if(nome.value === "" || email.value === "" || regional.value === "") {
    erro.style.visibility = "visible"
  }else{
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    console.log(nome.value);
    ambicao_regional.value = "Olá "+nome.value+", você é da "+regional.value+" e aqui irá aparecer o texto da ambição digital da sua regional!";
    erro.style.visibility = "hidden"
    current += 1;
  }
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  page.style.visibility = "hidden";
  progressBar.style.visibility = "hidden";
  output.style.visibility = "visible";
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  progressBar.style.margin = "-40px 0";
  progressBar.style.visibility = "hidden";
  //startBtn.style.visibility = "visible";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
