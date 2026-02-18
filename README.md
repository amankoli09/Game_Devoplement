🎮 Word Scramble Game

An interactive Word Scramble Game Dashboard built using HTML, CSS, and JavaScript with a modern glassmorphism UI and dynamic gameplay logic.

🔗 Live Demo:
https://game-devoplement.vercel.app/

🚀 Features

🎨 Modern Glass UI Design

🧩 Random Word Scrambling

📊 Live Scoreboard System

🔥 Streak Tracking

📈 Accuracy Percentage Calculation

🏆 Best Score Tracking

⌨️ Enter Key Support

🎯 Mixed Difficulty Words (Small, Medium, Large)

📱 Responsive Layout

🛠 Tech Stack

HTML5 – Structure

CSS3 – Styling (Glassmorphism, Flexbox)

JavaScript (Vanilla JS) – Game Logic

Vercel – Deployment

🧠 How It Works

A random word is selected from the word list.

The letters are shuffled dynamically.

The user enters the correct word.

If correct:

Score increases (based on word length)

Streak increases

Accuracy updates

If wrong:

Streak resets

Wrong counter increases

A new word loads automatically.

📂 Project Structure
Game_Development/
│
├── index.html        → Landing Page
├── main.html         → Game Dashboard
├── style.css         → Landing Page Styling
├── main.css          → Game Styling
├── main.js           → Game Logic
├── Landing.png       → Landing Background
├── Mainimg.png       → Game Background

🎯 Game Logic Highlights

Words are shuffled using:

word.split("").sort(() => Math.random() - 0.5).join("")


Score increases based on word length:

score += currentWord.length * 5;


Accuracy is calculated dynamically:

Math.round((correct / total) * 100);

🌟 Future Improvements

⏳ Countdown Timer

🎚 Difficulty Levels

🔊 Sound Effects

🏅 Leaderboard System

🌍 Multiplayer Mode

👨‍💻 Author

Aman Koli
B.Tech CSE Student
Passionate about UI-focused game development & web design.
