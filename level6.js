const correctDoor = 2;
const result = document.getElementById('result');
        
function checkDoor(doorNumber) {
    if (doorNumber === correctDoor) {
        result.className = 'alert alert-success';
        result.innerHTML = '<strong>🎉 Congratulations!</strong> You completed all 6 levels!';
    } else {
        result.className = 'alert alert-danger';
        result.innerHTML = '<strong>❌ Wrong Door!</strong> Try another door!';
    }
            
    result.style.display = 'block';
}