// Function to update the recording count
function updateRecordingCount() {
    const rowCount = document.querySelectorAll('tbody tr').length;
    document.getElementById('recording-count').textContent = `Total Recordings: ${rowCount}`;
}

// Function to check if the user is on a mobile device
function checkMobileDevice() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById('mobile-notification').style.display = 'block';
    }
}

// Update count and check for mobile device on page load
document.addEventListener('DOMContentLoaded', () => {
    updateRecordingCount();
    checkMobileDevice();
});
