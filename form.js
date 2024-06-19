function kirimdata() {
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked');
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('alamat').value;
  
    let alertMessage = '';
  
    if (!nama || !nim || !peminatan || !angkatan || !tanggal || !alamat) {
      alertMessage = 'Semua kolom harus diisi!';
    } else {
      alertMessage = `
        Data berhasil dikirim!\n
        Nama: ${nama}\n
        NIM: ${nim}\n
        Peminatan: ${peminatan.value}\n
        Angkatan: ${angkatan}\n
        Tanggal: ${tanggal}\n
        Alamat: ${alamat}
      `;
    }
  
    showAlert(alertMessage);
  }
  
  function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertBox.style.display = 'block';
    
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 5000); 
  }
  
  flatpickr("#tanggal", {
    dateFormat: "Y-m-d",
    defaultDate: new Date(),
  });
  