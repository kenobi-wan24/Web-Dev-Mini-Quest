let currentLevel = 1;
    const maxLevel = 6;
    const levelBadge = document.getElementById('levelBadge');
    const levelUpBtn = document.getElementById('levelUpBtn');
        
    levelUpBtn.addEventListener('click', function() {
        if (currentLevel < maxLevel) {
            currentLevel++;
            levelBadge.textContent = 'Level ' + currentLevel;
            levelBadge.classList.add('pulse');
                
            setTimeout(function() {
                levelBadge.classList.remove('pulse');
            }, 500);
        }
            
        if (currentLevel === maxLevel) {
            levelUpBtn.disabled = true;
            levelUpBtn.textContent = 'Max Level Reached!';
        }
    });