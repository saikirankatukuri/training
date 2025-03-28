let count = 3;

const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const decrement2Button = document.getElementById("decrement2");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

incrementButton.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});

decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    countElement.textContent = count;
});

decrement2Button.addEventListener("click", () => {
    if (count > 1) {
        count -= 2;
    } else {
        count = 0;
    }
    countElement.textContent = count;
});

resetButton.addEventListener("click", () => {
    count = 0;
    countElement.textContent = count;
});

increaseButton.addEventListener("click", () => {
    count += 2;
    countElement.textContent = count;
});


