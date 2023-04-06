// Memanggil form dengan DOM
const form = document.getElementById('form');

// Menambahkan event listener pada form ketika di submit
form.addEventListener('submit', function(e) {
  // Mencegah form untuk di-submit
  e.preventDefault();

  // Mengambil nilai dari input nama, email, password, dan konfirmasi password
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validasi input, jika kosong akan menampilkan pesan error
  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Semua field harus diisi!');
  } else if (password !== confirmPassword) {
    alert('Password dan konfirmasi password harus sama!');
  } else {
    // Jika input sudah valid, maka form akan di-submit
    alert('Form berhasil di-submit!');
    form.submit();
  }
});

// Memanggil select box dengan DOM
const selectBox = document.getElementById('select-box');

// Menambahkan event listener pada select box ketika dipilih
selectBox.addEventListener('change', function() {
  // Mengambil nilai dari option yang dipilih
  const selectedOption = selectBox.options[selectBox.selectedIndex].value;

  // Menampilkan nilai yang dipilih pada console log
  console.log('Nilai yang dipilih: ' + selectedOption);
});
