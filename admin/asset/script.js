// Data dummy
const totalPekerja = 85;
const pengajuanBulanIni = 12;
const menunggu = 4;
const diterima = 6;
const ditolak = 2;

// Update tampilan angka di dashboard
document.getElementById("totalPekerja").textContent = totalPekerja;
document.getElementById("pengajuanBulanIni").textContent = pengajuanBulanIni;

// Chart.js - Grafik pengajuan per bulan
const ctx = document.getElementById("shiftChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["GM", "SMOM", "FOC I", "FOC II", "OM 60 & NBM", "OM 70", "LOC I", "SRU & IPAL", "LOC II", "LOC III", "PARAXYLENE", "UTL RFCC", "RFCC", "GTO", "UTL", "EIIE", "RIIE", "ESSI", "P&", "MA 1", "MA 2", "MA 3", "MA 4", "General Maintenance", "MA 5", "MA6", "MA 7", "Workshop", "Supply Chain & Distribution", "Refinery Planning", "Performance & Evaluation", "TA I", "TA II", "Equipment Overhoul", "SMSS", "PE I", "PE II", "Project Engineering", "ECLC", "Laboratorium", "Equipment Reliability", "Plant Reliability", "Asset Integrity", "Environment", "Emergency & Insurance", "Health", "Safety", "Security", "Contract Office", "Purchasing", "Warehousing", "Inventory", "OPI", "Risk Management", "Legal Counsel", "Asset Operation", "Comm & CSR", "HCBP", "WS", "QM", "Hydro Carbon Acc", "Budgeting Acc", "Finance Acc & Reporting"],
    datasets: [{
      label: "Jumlah Pengajuan",
      data: [1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "#36a2eb",
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Jumlah Pengajuan per Bagian"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Jumlah Pengajuan" }
      },
      x: {
        title: { display: true, text: "Bagian" }
      }
    }
  }
});
