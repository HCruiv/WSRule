document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.querySelector(".btn-ajukan-perubahan");

  downloadBtn.addEventListener("click", function (e) {
    e.preventDefault(); // cegah reload/redirect
    alert("Sedang mengunduh file...");
    // Tambahkan logika pengunduhan file Excel di sini kalau ada
  });
});
