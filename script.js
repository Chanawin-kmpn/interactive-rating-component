const card = document.querySelector(".card")
const submitBtn = document.getElementById("submit-btn")
const ratings = document.querySelectorAll(".btn")
const showRate = document.getElementById("rating")
let isSelect = false

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        showRate.innerHTML = rating.value;
        isSelect = true
    })
});

submitBtn.addEventListener("click", () => {
    if(!isSelect) {
        alert("You need to select rate first!")
    } else {
        card.classList.toggle('flipped');
    }
});
