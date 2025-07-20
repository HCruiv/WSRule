// ===== DATA LIBUR NASIONAL BUMN 2025 =====
const daftarLibur = [
  { tanggal: '2025-01-01', keterangan: 'Tahun Baru Masehi' },
  { tanggal: '2025-01-29', keterangan: 'Isra Mi’raj Nabi Muhammad SAW' },
  { tanggal: '2025-02-28', keterangan: 'Tahun Baru Imlek 2576 Kongzili' },
  { tanggal: '2025-03-29', keterangan: 'Hari Suci Nyepi Tahun Baru Saka 1947' },
  { tanggal: '2025-04-17', keterangan: 'Waisak 2569 BE' },
  { tanggal: '2025-04-18', keterangan: 'Cuti Bersama Waisak' },
  { tanggal: '2025-05-01', keterangan: 'Hari Buruh Internasional' },
  { tanggal: '2025-05-08', keterangan: 'Kenaikan Isa Almasih' },
  { tanggal: '2025-05-28', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-05-29', keterangan: 'Hari Raya Idul Fitri 1446 H' },
  { tanggal: '2025-05-30', keterangan: 'Hari Raya Idul Fitri 1446 H (Hari ke-2)' },
  { tanggal: '2025-06-02', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-06-03', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-06-04', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-06-05', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-06-06', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-06-07', keterangan: 'Cuti Bersama Idul Fitri' },
  { tanggal: '2025-06-17', keterangan: 'Hari Lahir Pancasila' },
  { tanggal: '2025-06-29', keterangan: 'Hari Raya Idul Adha 1446 H' },
  { tanggal: '2025-07-27', keterangan: 'Tahun Baru Islam 1447 H' },
  { tanggal: '2025-08-17', keterangan: 'Hari Kemerdekaan Republik Indonesia' },
  { tanggal: '2025-10-06', keterangan: 'Maulid Nabi Muhammad SAW' },
  { tanggal: '2025-12-25', keterangan: 'Hari Raya Natal' },
  { tanggal: '2025-12-26', keterangan: 'Cuti Bersama Natal' }
];

// ===== FUNGSI HIGHLIGHT KALENDER =====
function highlightHolidays(tahun, bulan) {
  const allCells = document.querySelectorAll("td[data-date]");
  const holidayList = document.getElementById("holiday-list");
  holidayList.innerHTML = "";

  daftarLibur.forEach((libur) => {
    const date = new Date(libur.tanggal);
    if (date.getFullYear() === tahun && (date.getMonth() + 1) === bulan) {
      const targetDate = libur.tanggal;

      // Tandai di kalender
      allCells.forEach((cell) => {
        if (cell.getAttribute("data-date") === targetDate) {
          cell.style.backgroundColor = "#fecaca"; // Merah muda
          cell.style.fontWeight = "bold";
          cell.title = libur.keterangan;
        }
      });

      // Tambahkan ke daftar keterangan
      const listItem = document.createElement("li");
      const tanggalFormat = `${String(date.getDate()).padStart(2, '0')} ${date.toLocaleString('id-ID', { month: 'long' })}`;
      listItem.textContent = `${tanggalFormat}: ${libur.keterangan}`;
      holidayList.appendChild(listItem);
    }
  });
}

// ===== FILTER DROPDOWN (BULAN & TAHUN) =====
const tahunFilter = document.getElementById("filter-tahun");
const bulanFilter = document.getElementById("filter-bulan");

function applyFilter() {
  const tahun = parseInt(tahunFilter.value) || new Date().getFullYear();
  const bulan = parseInt(bulanFilter.value) || (new Date().getMonth() + 1);
  highlightHolidays(tahun, bulan);
}

tahunFilter.addEventListener("change", applyFilter);
bulanFilter.addEventListener("change", applyFilter);

// ===== LOAD DEFAULT: TAMPILKAN SEKARANG =====
document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const tahunNow = now.getFullYear();
  const bulanNow = now.getMonth() + 1;

  if (tahunFilter) tahunFilter.value = tahunNow;
  if (bulanFilter) bulanFilter.value = bulanNow;

  applyFilter();
});
