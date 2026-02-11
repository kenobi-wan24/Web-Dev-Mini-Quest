let coins = 0;
        
const coinCount = document.getElementById('coinCount');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
        
function updateDisplay() {
    coinCount.textContent = coins;
    coinCount.classList.add('bounce');
    setTimeout(function() {
        coinCount.classList.remove('bounce');
    }, 500);
}
        
increaseBtn.addEventListener('click', function() {
    coins++;
    updateDisplay();
});
        
decreaseBtn.addEventListener('click', function() {
    if (coins > 0) {
        coins--;
        updateDisplay();
    }
});