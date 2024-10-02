function updateRecordingCount(){const rowCount=document.querySelectorAll('tbody tr').length;document.getElementById('recording-count').textContent=`Total Recordings:${rowCount}`;}
document.addEventListener('DOMContentLoaded',updateRecordingCount);
