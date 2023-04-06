// Section 2
// 2.1
// Mendapatkan elemen dengan id "judul" menggunakan method getElementById
const judul = document.getElementById('judul');
// Mengubah isi teks pada elemen "judul" dengan menggunakan property textContent
judul.textContent = 'ubah Intro Dom ';

// 2.2
// Mendapatkan semua elemen "p" menggunakan method getElementsByTagName
const p = document.getElementsByTagName('p');
// Mengubah background color dari elemen "p" dengan index 1 menjadi "green"
p[1].style.backgroundColor = 'green';

// 2.3 
// Mendapatkan elemen "p" yang berada di dalam elemen dengan id "b" menggunakan method querySelector
const p4 = document.querySelector('#b p');
// Mengubah background color dari elemen "p4" menjadi "red"
p4.style.backgroundColor = 'red';


// section 3
// 3.1 Menemukan parent node dari sebuah elemen
const judul = document.querySelector('judul');
console.log(judul.parentNode); // mencetak parent node dari elemen dengan id "judul"

// 3.2Mendapatkan list dari child nodes dari sebuah elemen
const menu = document.getElementById('judul');
const children = menu.children; // mendapatkan list dari child nodes dari elemen dengan id "judul"
console.log(children);

// 3.3 Mendapatkan sibling node dari sebuah elemen
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling; // mendapatkan sibling node dari elemen dengan class "current"
console.log(nextSibling);


// Section 4
// Membuat elemen baru
const newParagraph = document.createElement('p');
// Menambahkan teks ke elemen baru
newParagraph.textContent = 'Ini adalah paragraf baru';
// Menemukan elemen tempat kita ingin menambahkan elemen baru
const sectionB = document.getElementById('b');
// Menambahkan elemen baru ke dalam elemen sectionB
sectionB.appendChild(newParagraph);
