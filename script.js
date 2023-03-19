// Membuat tombol hamburger menu
let hamburger = document.getElementsByClassName('hamburgerMenu');

hamburger[0].addEventListener('click', function () {
  //  eksekusi isi, belum di isi
  let s = document.getElementsByTagName('ul');
  s[0].classList.toggle('muncul');
});
