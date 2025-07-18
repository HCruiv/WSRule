const dataPekerja = [
  { nama: "Andi", bagian: "Produksi", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Budi", bagian: "Maintenance", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Citra", bagian: "Quality", shift: "Malam", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Dewi", bagian: "Logistik", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Eka", bagian: "Produksi", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Fajar", bagian: "Maintenance", shift: "Malam", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Gilang", bagian: "Quality", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Hani", bagian: "Logistik", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Indra", bagian: "Produksi", shift: "Malam", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Joko", bagian: "Maintenance", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Kiki", bagian: "Quality", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Lina", bagian: "Logistik", shift: "Malam", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Maya", bagian: "Produksi", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Nino", bagian: "Maintenance", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Oki", bagian: "Quality", shift: "Malam", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Putri", bagian: "Logistik", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Qori", bagian: "Produksi", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Rizky", bagian: "Maintenance", shift: "Malam", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Sari", bagian: "Quality", shift: "Pagi", TMT: "2025-07-18", endDate: "2025-07-18" },
  { nama: "Tono", bagian: "Logistik", shift: "Siang", TMT: "2025-07-18", endDate: "2025-07-18" }
];

let currentPage = 1;
const rowsPerPage = 10;

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  const pageInfo = document.getElementById("pageInfo");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = dataPekerja.slice(start, end);

  pageData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${start + index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.bagian}</td>
      <td>${item.shift}</td>
      <td>${item.TMT}</td>
      <td>${item.endDate}</td>
    `;
    tableBody.appendChild(row);
  });

  pageInfo.textContent = `Halaman ${currentPage} dari ${Math.ceil(dataPekerja.length / rowsPerPage)}`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage * rowsPerPage < dataPekerja.length) {
    currentPage++;
    renderTable();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

window.onload = renderTable;
