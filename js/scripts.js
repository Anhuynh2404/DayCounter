function calculateLoveDays() {
    const startDateInput = document.getElementById('start-date');
    const startDate = new Date(startDateInput.value);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = diffDays;
}

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        heartsContainer.appendChild(heart);
    }
}

createHearts();