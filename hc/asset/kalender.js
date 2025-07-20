document.addEventListener("DOMContentLoaded", function () {
  const bulanDropdown = document.getElementById("bulanDropdown");
  const tahunDropdown = document.getElementById("tahunDropdown");
  const calendarBody = document.getElementById("calendar-body");

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  // Set dropdown bulan dan tahun ke waktu saat ini
  bulanDropdown.value = currentMonth.toString().padStart(2, "0");
  tahunDropdown.value = currentYear;

  // Render awal kalender
  renderCalendar();

  bulanDropdown.addEventListener("change", renderCalendar);
  tahunDropdown.addEventListener("change", renderCalendar);

  function renderCalendar() {
    const bulan = parseInt(bulanDropdown.value);
    const tahun = parseInt(tahunDropdown.value);

    if (!bulan || !tahun) return;

    const firstDay = new Date(tahun, bulan - 1, 1).getDay();
    const lastDate = new Date(tahun, bulan, 0).getDate();

    calendarBody.innerHTML = "";
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < firstDay) {
          cell.innerHTML = "";
        } else if (date > lastDate) {
          cell.innerHTML = "";
        } else {
          cell.innerHTML = date;
          cell.setAttribute("data-date", `${tahun}-${String(bulan).padStart(2, '0')}-${String(date).padStart(2, '0')}`);
          date++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }

    highlightHolidays(tahun, bulan); // Pastikan fungsi ini tersedia
  }
});
