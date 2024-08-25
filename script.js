document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('prev').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
        showCard(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function () {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        showCard(currentIndex);
    });

    showCard(currentIndex);
});
