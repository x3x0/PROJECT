document.addEventListener('DOMContentLoaded', function() {
    var modeToggle = document.getElementById('modeToggle');
    var body = document.body;

    // Toggle the mode when the checkbox is clicked
    modeToggle.addEventListener('change', function() {
        if (modeToggle.checked) {
            body.classList.add('dark-mode');
            document.getElementById('modeIcon').className = 'fas fa-moon';
            document.getElementById('modeText').textContent = 'Dark Mode';
        } else {
            body.classList.remove('dark-mode');
            document.getElementById('modeIcon').className = 'fas fa-sun';
            document.getElementById('modeText').textContent = 'Light Mode';
        }
    });
});
