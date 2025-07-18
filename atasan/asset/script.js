// Data dummy
const totalPekerja = 85;
const pengajuanBulanIni = 12;
const menunggu = 4;
const diterima = 6;
const ditolak = 2;

// Update tampilan angka di dashboard
document.getElementById("totalPekerja").textContent = totalPekerja;
document.getElementById("pengajuanBulanIni").textContent = pengajuanBulanIni;
document.getElementById("menunggu").textContent = menunggu;
document.getElementById("diterimaDitolak").textContent = `${diterima} / ${ditolak}`;

// Chart.js - Grafik pengajuan per bulan
const ctx = document.getElementById("shiftChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [{
      label: "Jumlah Pengajuan",
      data: [12, 19, 8, 15, 10, 22],
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
        text: "Jumlah Pengajuan per Bulan"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Jumlah Pengajuan" }
      },
      x: {
        title: { display: true, text: "Bulan" }
      }
    }
  }
});
