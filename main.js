// Word list (mixed difficulty)
const words = [
    // Small
    "GAME",
    "WORD",
    "CODE",
    "PLAY",
    "JAVA",

    // Medium
    "PUZZLE",
    "SCRIPT",
    "PLAYER",
    "RANDOM",
    "BUTTON",

    // Large
    "SCRAMBLE",
    "JAVASCRIPT",
    "PROGRAM",
    "COMPUTER",
    "KEYBOARD"
];

let currentWord = "";
let score = 0;
let best = 0;
let streak = 0;
let correct = 0;
let wrong = 0;

const scrambledContainer = document.getElementById("scrambledWord");
const input = document.querySelector(".word-input");
const submitBtn = document.querySelector(".submit-btn");

// Shuffle word
function shuffleWord(word) {
    return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

// Load new word
function loadNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    const scrambled = shuffleWord(currentWord);

    scrambledContainer.innerHTML = "";

    // Adjust spacing based on word length
    if (scrambled.length <= 4) {
        scrambledContainer.style.gap = "18px";
    } else if (scrambled.length <= 6) {
        scrambledContainer.style.gap = "12px";
    } else {
        scrambledContainer.style.gap = "8px";
    }

    scrambled.split("").forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;

        // Adjust tile size for long words
        if (scrambled.length >= 8) {
            span.style.padding = "16px 18px";
            span.style.fontSize = "22px";
        } else {
            span.style.padding = "20px 22px";
            span.style.fontSize = "26px";
        }

        scrambledContainer.appendChild(span);
    });
}

// Update scoreboard
function updateStats() {
    document.getElementById("score").textContent = score;
    document.getElementById("best").textContent = best;
    document.getElementById("streak").textContent = streak;
    document.getElementById("correct").textContent = correct;
    document.getElementById("wrong").textContent = wrong;

    const total = correct + wrong;
    const accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);
    document.getElementById("accuracy").textContent = accuracy + "%";
}

// Submit logic
submitBtn.addEventListener("click", () => {
    const userInput = input.value.trim().toUpperCase();

    if (userInput === currentWord) {
        score += currentWord.length * 5; // bigger word = more score
        streak++;
        correct++;

        if (score > best) {
            best = score;
        }
    } else {
        streak = 0;
        wrong++;
    }

    input.value = "";
    updateStats();
    loadNewWord();
});

// Allow Enter key
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});

// Start game
loadNewWord();
updateStats();
