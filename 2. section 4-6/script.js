// Section 4: Manipulating elements
// 4. Memanggil element button dan paragraf dengan id tertentu dari HTML menggunakan metode getElementById.
const btn1 = document.getElementById('btn1');
const paragraf = document.getElementById('paragraf');

// 4.2Mengubah isi dari paragraf menggunakan innerHTML
// Menambahkan event click pada button, ketika di klik akan mengubah isi dari paragraf menggunakan innerHTML.
btn1.addEventListener('click', function() {
paragraf.innerHTML = '<strong>Ini paragraf yang baru</strong>';
});
// Membuat element baru menggunakan createElement dan menambahkannya ke dalam container menggunakan appendChild
// Memanggil button dan container dengan id tertentu dari HTML menggunakan metode getElementById.
const btn2 = document.getElementById('btn2');
const container = document.getElementById('container');
// Menambahkan event click pada button, ketika di klik akan membuat element baru menggunakan createElement dan menambahkannya ke dalam container menggunakan appendChild.
btn2.addEventListener('click', function() {
const newParagraf = document.createElement('p');
newParagraf.innerHTML = 'Ini paragraf baru yang dibuat menggunakan createElement';
container.appendChild(newParagraf);
});

// Section 5: Working with Attributes
// 5.1 Memanggil button dan judul dengan id tertentu dari HTML menggunakan metode getElementById.
const btn3 = document.getElementById('btn3');
const judul = document.getElementById('judul');

// Mengubah nilai atribut href pada sebuah link menggunakan setAttribute
// Menambahkan event click pada button, ketika di klik akan mengubah nilai atribut href pada sebuah link menggunakan setAttribute.
btn3.addEventListener('click', function() {
judul.setAttribute('href', 'https://www.google.com');
});

// 5. 2 Mendapatkan nilai atribut href pada sebuah link menggunakan getAttribute
// Memanggil element link dari HTML menggunakan metode querySelector.
const link = document.querySelector('a');

// Menampilkan nilai atribut href pada link di console.
console.log(link.getAttribute('href'));

// Section 6: Manipulating Element's Styles
// 6. Memanggil button dan container dengan id tertentu dari HTML menggunakan metode getElementById.
const btn4 = document.getElementById('btn4');
const containerStyle = document.getElementById('container').style;

// 6.2 Mengubah style suatu element menggunakan style property
// Menambahkan event click pada button, ketika di klik akan mengubah style background-color, padding, dan color pada container menggunakan style property.
btn4.addEventListener('click', function() {
containerStyle.backgroundColor = 'red';
containerStyle.padding = '20px';
containerStyle.color = 'white';
});

// Mendapatkan element yang memiliki class "highlight"
const highlight = document.querySelector('.highlight');

// Menggunakan fungsi getComputedStyle untuk mendapatkan semua style dari element "highlight"
const highlightStyles = getComputedStyle(highlight);

// Mencetak nilai background-color dari element "highlight" pada konsol
console.log(highlightStyles.backgroundColor);