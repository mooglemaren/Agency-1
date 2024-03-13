let targetTime = new Date();
targetTime.setDate(targetTime.getDate() + 1);
targetTime.setHours(0, 0, 0, 0);

const countdownElement = document.getElementById('countdown');
const resetButton = document.getElementById('resetButton');

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetTime - currentTime;

    if (difference <= 0) {
        countdownElement.textContent = "Pokecard is ready!";
    } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.textContent = `Next pokecard in: ${hours}h ${minutes}m ${seconds}s`;
    }
}

function resetTimer() {
    targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 1);
    targetTime.setHours(0, 0, 0, 0);
    updateCountdown();
}

updateCountdown();

setInterval(updateCountdown, 1000);

resetButton.addEventListener('click', resetTimer);
