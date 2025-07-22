const dataPekerja = [
  { nama: "Andi", nopek: "161401", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Budi", nopek: "161402", shift: "Shift B", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Citra", nopek: "161403", shift: "Shift C", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: " Waiting" },
  { nama: "Dewi", nopek: "161404", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Eka", nopek: "161405", shift: "Shift B", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Fajar", nopek: "161406", shift: "Harian", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Gilang", nopek: "161407", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-04-18", status: "Rejected" },
  { nama: "Hani", nopek: "161408", shift: "Shift B", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Indra", nopek: "161409", shift: "Shift C", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Joko", nopek: "161410", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Kiki", nopek: "161411", shift: "Shift D", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Lina", nopek: "161412", shift: "Shift C", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Maya", nopek: "161413", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Nino", nopek: "161414", shift: "Shift B", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Oki", nopek: "161415", shift: "Shift D", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Putri", nopek: "161416", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Qori", nopek: "161417", shift: "Shift B", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Rizky", nopek: "161418", shift: "Shift C", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Sari", nopek: "161419", shift: "Shift A", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" },
  { nama: "Tono", nopek: "161420", shift: "Shift B", TMT: "2025-07-18", endDate: "2025-07-18", tanggal: "2025-07-18", status: "Waiting" }
];

let currentPage = 1;
const rowsPerPage = 10;
let filteredData = [...dataPekerja];

function renderTable() {
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
      <td>${item.TMT}</td>
      <td>${item.endDate}</td>
      <td>${item.tanggal}</td>
      <td>${item.status}</td>
      <td>
        <button class="btn-ajukan" onclick="window.location.href='ajukan-perubahan.html?nopek=${item.nopek}'">
          Approve
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function filterData() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const selectedShift = document.getElementById("shiftDropdown").value;
  const selectedStatus = document.getElementById("statusDropdown").value;

  filteredData = dataPekerja.filter(item => {
    const cocokCari = item.nama.toLowerCase().includes(searchValue) || item.nopek.includes(searchValue);
    const cocokShift = selectedShift === "" || item.shift === selectedShift;
    const cocokStatus = selectedStatus === "" || item.status === selectedStatus;
    return cocokCari && cocokShift && cocokStatus;
  });

  currentPage = 1;
  renderTable();
}

document.getElementById("searchInput").addEventListener("input", filterData);
document.getElementById("shiftDropdown").addEventListener("change", filterData);
document.getElementById("statusDropdown").addEventListener("change", filterData);

document.getElementById("nextBtn").addEventListener("click", () => {
  if ((currentPage * rowsPerPage) < filteredData.length) {
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

window.onload = () => {
  renderTable();
};
