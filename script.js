const jokeDiv = document.getElementById("joke");
const fetchButton = document.getElementById("fetchButton");
const thumbsUpButton = document.getElementById("thumbsUpButton");
const thumbsDownButton = document.getElementById("thumbsDownButton");
const counterDiv = document.getElementById("counter");

let totalCounter = 0;

// ფუნქცია ჯოკის წამოსაღებად API-დან
async function fetchJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokeDiv.textContent = data.value; // წაღებული joke value
  } catch (error) {
    jokeDiv.textContent = "Failed to fetch joke. Try again!";
    console.error(error);
  }
}

fetchButton.addEventListener("click", fetchJoke);

// Like Button
thumbsUpButton.addEventListener("click", () => {
  totalCounter++;
  counterDiv.textContent = `Total Like/Dislike: ${totalCounter}`;
});

// Dislike Button
thumbsDownButton.addEventListener("click", () => {
  totalCounter--;
  counterDiv.textContent = `Total Like/Dislike: ${totalCounter}`;
});
