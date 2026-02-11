const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
        
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
            
        if (name === '') {
            message.className = 'alert alert-danger mt-3';
            message.innerHTML = '<strong>Error!</strong> Please enter your name.';
            message.style.display = 'block';
        } else {
            message.className = 'alert alert-success mt-3';
            message.innerHTML = '<strong>Success!</strong> Welcome, ' + name + '! 🎉';
            message.style.display = 'block';
        }
    });
        
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });