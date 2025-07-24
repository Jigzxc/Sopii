const cards = document.querySelectorAll(".cards li");
let current = 3; // start with center card (index 3)

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove("active");
        if (index === current) {
            card.classList.add("active");
        }
    });
}

document.getElementById("prev").addEventListener("click", () => {
    if (current > 0) {
        current--;
        updateCards();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (current < cards.length - 1) {
        current++;
        updateCards();
    }
});

updateCards(); // initial
