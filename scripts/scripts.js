function updateRecordingCount() {
    const visibleRows = document.querySelectorAll('tbody tr:not(.hidden)');
    document.getElementById('recording-count').textContent = `Total Recordings: ${visibleRows.length}`;
  }

  function filterTable() {
    const yearFilter = document.getElementById('yearFilter').value;
    const sourceFilter = document.getElementById('sourceFilter').value;
    const rows = document.querySelectorAll('#recordingTable tr');

    rows.forEach(row => {
      const date = row.cells[0].textContent;
      const source = row.cells[4].textContent;

      const year = date.split('-')[0];
      const matchesYear = (yearFilter === 'all' || year === yearFilter);
      const matchesSource = (sourceFilter === 'all' || source.includes(sourceFilter));

      if (matchesYear && matchesSource) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });

    updateRecordingCount();
  }

  document.addEventListener('DOMContentLoaded', function() {
    const yearSet = new Set();
    const rows = document.querySelectorAll('#recordingTable tr');
    rows.forEach(row => {
      const year = row.cells[0].textContent.split('-')[0];
      yearSet.add(year);
    });

    const yearFilter = document.getElementById('yearFilter');
    yearSet.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    document.getElementById('yearFilter').addEventListener('change', filterTable);
    document.getElementById('sourceFilter').addEventListener('change', filterTable);

    updateRecordingCount();
  });
