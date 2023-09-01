// home event slider

// Memilih semua elemen dengan kelas "mySliderArticle" dan "navigation"
const myslide = document.querySelectorAll(".mySliderArticle");
const nav = document.querySelectorAll(".navigation");

// Menginisialisasi counter awal
let counter = 1;

// Memanggil fungsi slidefun dengan nilai counter awal
slidefun(counter);

// Fungsi untuk mengubah slide saat ini
function currentSlide1(n) {
  counter = n; // Mengupdate nilai counter
  slidefun(counter); // Memanggil fungsi slidefun dengan nilai counter baru
}

// Fungsi untuk mengatur tampilan slide
function slidefun() {
  let i;
  // Menyembunyikan semua slide
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  // Menampilkan slide dengan indeks sesuai counter
  myslide[counter - 1].style.display = "block";
}

// event slider about
const mySlideEvent = document.querySelectorAll(".myslider");
const dot = document.querySelectorAll(".dot");

let counterEvent = 1;
slidefunEvent(counterEvent);

let timer = setInterval(autoslide, 4000);
function autoslide() {
  counterEvent += 1;
  slidefunEvent(counterEvent);
}

function plusSlide(y) {
  counterEvent += y;
  slidefunEvent(counterEvent);
  resetTimer();
}
function currentSlide(y) {
  counterEvent = y;
  slidefunEvent(counterEvent);
  resetTimer();
}
function resetTimer() {
  clearInterval(counterEvent);
  timer = setInterval(autoslide, 6000);
}

function slidefunEvent(y) {
  let l;
  for (l = 0; l < mySlideEvent.length; l++) {
    mySlideEvent[l].style.display = "none";
  }
  for (l = 0; l < dot.length; l++) {
    dot[l].classList.remove("active");
  }
  //pengulangan kembali ke awal ke - 1
  if (y > mySlideEvent.length) {
    counterEvent = 1;
  }
  if (y < 1) {
    counterEvent = mySlideEvent.length;
  }
  mySlideEvent[counterEvent - 1].style.display = "block";
  dot[counterEvent - 1].classList.add("active");
}
