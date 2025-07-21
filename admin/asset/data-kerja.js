const dataPekerja = [
  { nama: "Andi", nopek: "161401", shift: "Shift A" },
  { nama: "Budi", nopek: "161402", shift: "Shift B" },
  { nama: "Citra", nopek: "161403", shift: "Shift C" },
  { nama: "Dewi", nopek: "161404", shift: "Shift A" },
  { nama: "Eka", nopek: "161405", shift: "Shift B" },
  { nama: "Fajar", nopek: "161406", shift: "Shift C" },
  { nama: "Gilang", nopek: "161407", shift: "Shift A" },
  { nama: "Hani", nopek: "161408", shift: "Shift B" },
  { nama: "Indra", nopek: "161409", shift: "Shift C" },
  { nama: "Joko", nopek: "161410", shift: "Shift A" },
  { nama: "Kiki", nopek: "161411", shift: "Shift B" },
  { nama: "Lina", nopek: "161412", shift: "Shift C" },
  { nama: "Maya", nopek: "161413", shift: "Harian" },
  { nama: "Nino", nopek: "161414", shift: "Shift B" },
  { nama: "Oki", nopek: "161415", shift: "Shift C" },
  { nama: "Putri", nopek: "161416", shift: "Shift A" },
  { nama: "Qori", nopek: "161417", shift: "Shift D" },
  { nama: "Rizky", nopek: "161418", shift: "Shift C" },
  { nama: "Sari", nopek: "161419", shift: "Shift A" },
  { nama: "Tono", nopek: "161420", shift: "Shift B" }
];

let currentPage = 1;
const rowsPerPage = 10;

function renderTable() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const shiftValue = document.getElementById("shiftDropdown").value;

  const filteredData = dataPekerja.filter(item => {
    const matchesSearch = item.nama.toLowerCase().includes(searchValue) || item.nopek.includes(searchValue);
    const matchesShift = shiftValue === "" || item.shift === shiftValue;
    return matchesSearch && matchesShift;
  });

  const tableBody = document.getElementById("tableBody");
  const pageInfo = document.getElementById("pageInfo");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${start + index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.nopek}</td>
      <td>${item.shift}</td>
      
    `;
    tableBody.appendChild(row);
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages || 1}`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentPage++;
  renderTable();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

// Event listener untuk filter
document.getElementById("searchInput").addEventListener("input", () => {
  currentPage = 1;
  renderTable();
});

document.getElementById("shiftDropdown").addEventListener("change", () => {
  currentPage = 1;
  renderTable();
});

window.onload = renderTable;
