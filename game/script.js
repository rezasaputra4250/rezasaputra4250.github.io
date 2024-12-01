// script.js

// Data kalimat untuk mengetik
const sentences = [
  "Jangan takut gagal, karena kegagalan adalah awal dari kesuksesan.",
  "Belajar dengan tekun adalah kunci untuk meraih impian.",
  "Masa depan adalah milik mereka yang percaya pada keindahan impian mereka.",
  "Kehidupan itu sederhana, yang sulit adalah menjalani kesederhanaannya."
];

// Variabel game
let currentSentence = '';
let timer = 0;
let score = 0;
let isPlaying = false;
let interval;
let startTime = 0;

// Elemen HTML
const sentenceContainer = document.getElementById('sentence');
const inputField = document.getElementById('input-field');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

// Fungsi untuk memulai game
function startGame() {
  isPlaying = true;
  score = 0;
  timer = 0;
  startButton.disabled = true;
  inputField.value = '';
  inputField.disabled = false;
  scoreDisplay.textContent = score;
  generateNewSentence();
  startTimer();
}

// Fungsi untuk menghasilkan kalimat acak
function generateNewSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[randomIndex];
  sentenceContainer.textContent = currentSentence;
}

// Fungsi untuk memulai timer
function startTimer() {
  startTime = Date.now();
  interval = setInterval(() => {
    if (isPlaying) {
      timer = Math.floor((Date.now() - startTime) / 1000);
      timerDisplay.textContent = timer;
    }
  }, 1000);
}

// Fungsi untuk memeriksa input pemain
function checkInput() {
  const inputText = inputField.value;

  // Cek apakah input pemain sama dengan kalimat yang diberikan
  if (inputText === currentSentence) {
    score++;
    scoreDisplay.textContent = score;
    inputField.value = ''; // Bersihkan input
    generateNewSentence(); // Ambil kalimat baru
  }
}

// Fungsi untuk menghentikan game
function stopGame() {
  isPlaying = false;
  clearInterval(interval);
  inputField.disabled = true;
  startButton.disabled = false;
  alert(`Game selesai! Skor Anda: ${score}`);

  // Setelah game selesai, memungkinkan game dimulai lagi
  setTimeout(startGame, 2000); // Mulai lagi setelah 2 detik
}

// Event listeners
inputField.addEventListener('input', checkInput);
startButton.addEventListener('click', startGame);

// Memastikan game berhenti jika waktunya habis (misalnya 60 detik)
setTimeout(stopGame, 60000); // Setel waktu permainan 1 menit
