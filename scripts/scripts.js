function updateRecordingCount() {
    const visibleRows = document.querySelectorAll('tbody tr:not(.hidden)');
    document.getElementById('recording-count').textContent = `Total Recordings: ${visibleRows.length}`;
  }

  // Function to filter the table rows based on selected filters
  function filterTable() {
    const yearFilter = document.getElementById('yearFilter').value;
    const sourceFilter = document.getElementById('sourceFilter').value;
    const rows = document.querySelectorAll('#recordingTable tr');

    rows.forEach(row => {
      const date = row.cells[0].textContent.trim(); // Get the date value
      const source = row.cells[4].textContent.trim(); // Get the source value

      const year = date.split('-')[0]; // Extract the year from the date
      const matchesYear = (yearFilter === 'all' || year === yearFilter); // Check year match
      const matchesSource = (sourceFilter === 'all' || source.toLowerCase().includes(sourceFilter.toLowerCase())); // Check source match

      // Show or hide the row based on whether it matches both filters
      if (matchesYear && matchesSource) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });

    updateRecordingCount(); // Update the visible row count
  }

  // Initialize the filters and set event listeners
  document.addEventListener('DOMContentLoaded', function() {
    const yearSet = new Set(); // Use a set to store unique years
    const rows = document.querySelectorAll('#recordingTable tr'); // Get all table rows

    // Populate yearSet with unique years from the table data
    rows.forEach(row => {
      const year = row.cells[0].textContent.split('-')[0];
      yearSet.add(year);
    });

    // Populate the year filter dropdown dynamically
    const yearFilter = document.getElementById('yearFilter');
    yearSet.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    // Add event listeners for year and source filter changes
    document.getElementById('yearFilter').addEventListener('change', filterTable);
    document.getElementById('sourceFilter').addEventListener('change', filterTable);

    // Update recording count initially
    updateRecordingCount();
  });
