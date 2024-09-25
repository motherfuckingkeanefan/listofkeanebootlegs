// Function to update the recording count
function updateRecordingCount() {
    const rowCount = document.querySelectorAll('tbody tr').length;
    document.getElementById('recording-count').textContent = `Total Recordings: ${rowCount}`;
}

// Update count on page load
document.addEventListener('DOMContentLoaded', updateRecordingCount);
