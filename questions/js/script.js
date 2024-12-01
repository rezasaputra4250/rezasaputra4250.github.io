document.addEventListener('DOMContentLoaded', function () {
  let currentQuestionIndex = 0; // Indeks soal yang sedang ditampilkan
  let questions = [];
  let answers = []; // Array untuk menyimpan jawaban yang dipilih
  let classInfo = ''; // Menyimpan informasi kelas
  let subjectInfo = ''; // Menyimpan informasi mata pelajaran

  // Ambil data JSON dari /database/questions.json
  fetch('./database/questions.json')
    .then(response => response.json())
    .then(data => {
      // Ambil informasi kelas dan mata pelajaran
      classInfo = data.quiz.class;
      subjectInfo = data.quiz.subject;
      questions = data.quiz.questions; // Simpan data soal dalam variabel `questions`

      // Tampilkan kelas dan mata pelajaran
      displayClassAndSubject();

      displayQuestion(currentQuestionIndex); // Tampilkan soal pertama
      createPagination(); // Buat tombol navigasi
      createQuestionList(); // Buat daftar nomor soal di sebelah kiri
    })
    .catch(error => console.error('Error fetching JSON:', error));

  // Fungsi untuk menampilkan informasi kelas dan mata pelajaran
  function displayClassAndSubject() {
    const classElement = document.getElementById('class-info');
    const subjectElement = document.getElementById('subject-info');

    // Menampilkan informasi kelas dan mata pelajaran di elemen tertentu
    classElement.innerText = `Kelas: ${classInfo}`;
    subjectElement.innerText = `Mata Pelajaran: ${subjectInfo}`;
  }

  // Fungsi untuk menampilkan soal berdasarkan indeks
  function displayQuestion(index) {
    const questionContainer = document.getElementById('question');
    const question = questions[index];
    questionContainer.innerHTML = ''; // Bersihkan soal yang lama

    // Membuat elemen soal baru
    const questionElement = document.createElement('div');

    // Menambahkan pertanyaan
    const questionTitle = document.createElement('h2');
    questionTitle.classList.add('text-xl', 'font-bold', 'mb-4');
    questionTitle.innerText = `${index + 1}. ${question.question}`;
    questionElement.appendChild(questionTitle);

    // Menambahkan pilihan jawaban
    const optionsContainer = document.createElement('div');
    for (let option in question.options) {
      const optionLabel = document.createElement('label');
      optionLabel.classList.add('block', 'mb-2');

      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `question${index}`;
      optionInput.value = question.options[option];
      optionInput.addEventListener('change', () => {
        answers[index] = optionInput.value; // Simpan jawaban
        updateQuestionList(); // Update daftar nomor soal
      });

      const optionText = document.createElement('span');
      optionText.classList.add('ml-2');
      optionText.innerText = `${question.options[option]}`;

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(optionText);
      optionsContainer.appendChild(optionLabel);
    }

    questionElement.appendChild(optionsContainer);
    questionContainer.appendChild(questionElement);
  }

  // Fungsi untuk membuat tombol pagination
  function createPagination() {
    const paginationContainer = document.getElementById('pagination');

    // Tombol "Sebelumnya"
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Sebelumnya';
    prevButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'mr-2');
    prevButton.disabled = currentQuestionIndex === 0; // Menonaktifkan tombol jika di soal pertama
    prevButton.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
      }
    });

    // Tombol "Berikutnya"
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Berikutnya';
    nextButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-lg');
    nextButton.disabled = currentQuestionIndex === questions.length - 1; // Menonaktifkan tombol jika di soal terakhir
    nextButton.addEventListener('click', () => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
      }
    });

    // Tombol Submit (hanya tampil jika soal terakhir)
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.classList.add('bg-green-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'ml-2');
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
    submitButton.addEventListener('click', () => {
      alert('Kuis selesai!');
    });

    // Tombol berikutnya hanya muncul jika bukan soal terakhir
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';

    // Tambahkan tombol ke container pagination
    paginationContainer.innerHTML = ''; // Bersihkan pagination lama
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);
    paginationContainer.appendChild(submitButton);
  }

  // Fungsi untuk membuat daftar nomor soal di sebelah kiri
  function createQuestionList() {
    const questionListContainer = document.getElementById('question-list');

    // Menghapus daftar yang ada sebelumnya
    questionListContainer.innerHTML = '';

    // Membuat elemen untuk setiap nomor soal
    questions.forEach((question, index) => {
      const questionLink = document.createElement('button');
      questionLink.classList.add('px-2', 'py-2', 'bg-blue-200', 'rounded-lg', 'hover:bg-blue-400', 'text-center');

      // Sesuaikan ukuran dan jarak antar tombol nomor
      questionLink.style.margin = '5px'; // Mengatur jarak bawah tombol soal
      questionLink.style.width = '40px'; // Mengatur lebar tombol agar seragam

      questionLink.innerText = index + 1;
      questionLink.addEventListener('click', () => {
        currentQuestionIndex = index;
        displayQuestion(currentQuestionIndex);
      });

      // Tandai soal yang sudah dijawab dengan warna hijau
      if (answers[index]) {
        questionLink.classList.add('bg-green-500');
      }

      questionListContainer.appendChild(questionLink);
    });
  }
});
