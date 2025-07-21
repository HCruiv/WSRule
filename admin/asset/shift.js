document.addEventListener('DOMContentLoaded', function () {
  const bulanDropdown = document.getElementById('bulanDropdown');
  const tahunDropdown = document.getElementById('tahunDropdown');
  const fotoContainer = document.getElementById('fotoContainer');

  function tampilkanFoto() {
    const bulan = bulanDropdown.value;
    const tahun = tahunDropdown.value;

    if (bulan && tahun) {
      const namaFile = `foto-${tahun}-${bulan.padStart(2, '0')}.png`;

      fotoContainer.innerHTML = `
        <img src="jadwal-shift/${namaFile}" alt="Jadwal Foto" 
             style="max-width: 100%; border: 1px solid #ccc; padding: 10px;" 
             onerror="this.style.display='none';" />
      `;
    } else {
      fotoContainer.innerHTML = '';
    }
  }

  bulanDropdown.addEventListener('change', tampilkanFoto);
  tahunDropdown.addEventListener('change', tampilkanFoto);

  // Panggil saat page load
  tampilkanFoto();
});
