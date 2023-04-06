// Memanggil button dan paragraf dengan DOM
const btn1 = document.getElementById('btn1');
const paragraf = document.getElementById('paragraf');

// Menambahkan event listener pada button ketika di klik
btn1.addEventListener('click', function() {
	// Mengubah isi dari paragraf
	paragraf.innerHTML = 'Paragraf telah diubah';
});
