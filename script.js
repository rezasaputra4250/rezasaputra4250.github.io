// Contoh data untuk Skills, Projects, Certificates, dan Experience

// Data Keahlian dan Progress
const skills = [
  { name: "HTML", icon: "fa-brands fa-html5", progress: 90 },
  { name: "CSS", icon: "fa-brands fa-css3-alt", progress: 80 },
  { name: "JavaScript", icon: "fas fa-code", progress: 75 },
  { name: "React.js", icon: "fab fa-react", progress: 70 },
  { name: "Node.js", icon: "fab fa-node", progress: 60 },
  { name: "Git", icon: "fab fa-git", progress: 85 },
];

const projects = [
  { title: "Proyek 1", description: "Deskripsi proyek 1", link: "#", image: "https://via.placeholder.com/400" },
  { title: "Proyek 2", description: "Deskripsi proyek 2", link: "#", image: "https://via.placeholder.com/400" },
  { title: "Proyek 3", description: "Deskripsi proyek 3", link: "#", image: "https://via.placeholder.com/400" },
];

const certificates = [
  { title: "Sertifikat 1", issuer: "Coursera", link: "#", date: "2023" },
  { title: "Sertifikat 2", issuer: "Udemy", link: "#", date: "2022" },
  { title: "Sertifikat 3", issuer: "LinkedIn Learning", link: "#", date: "2021" },
];
// Data Pengalaman Bekerja
const experience = [
  {
    company: "Perusahaan A",
    role: "Frontend Developer",
    duration: "Januari 2022 - Sekarang",
    description: "Mengembangkan aplikasi web menggunakan HTML, CSS, JavaScript, dan React.js.",
  },
  {
    company: "Perusahaan B",
    role: "Backend Developer",
    duration: "Juni 2020 - Desember 2021",
    description: "Membangun API dengan Node.js dan Express, serta mengelola database MySQL.",
  },
  {
    company: "Perusahaan C",
    role: "Web Developer Intern",
    duration: "Juli 2019 - Mei 2020",
    description: "Membantu tim pengembangan dalam pembuatan aplikasi web dan maintenance situs.",
  },
];

const communities = [
  { name: "Komunitas Web Developer Indonesia", role: "Anggota", duration: "2021 - Sekarang", link: "#" },
  { name: "Komunitas Frontend Developer", role: "Anggota Aktif", duration: "2020 - 2022", link: "#" },
  { name: "Komunitas GitHub Developers", role: "Kontributor", duration: "2019 - 2020", link: "#" },
];

// Fungsi untuk menentukan warna progress bar
function getSkillColor(progress) {
  if (progress >= 80) {
    return 'green';  // Warna hijau untuk kemampuan tinggi
  } else if (progress >= 60) {
    return 'yellow';  // Warna kuning untuk kemampuan menengah
  } else {
    return 'red';  // Warna merah untuk kemampuan rendah
  }
}

// Fungsi untuk menampilkan skill dan progress bar
function displaySkills() {
  const skillsContainer = document.getElementById('skills-list');

  skills.forEach(skill => {
    // Membuat elemen skill dengan progress bar
    const skillElement = document.createElement('div');
    skillElement.className = 'bg-gray-500 shadow-lg rounded-lg p-6';

    // Menambahkan HTML untuk skill, icon, dan progress bar
    skillElement.innerHTML = `
      <div class="flex items-center mb-4">
        <i class="${skill.icon} text-3xl mr-4 text-${getSkillColor(skill.progress)}-500"></i>
        <h3 class="text-xl font-semibold">${skill.name}</h3>
      </div>
      <div class="relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <span class="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-${getSkillColor(skill.progress)}-500 bg-${getSkillColor(skill.progress)}-100">
            ${skill.progress}%
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div class="h-2.5 rounded-full bg-${getSkillColor(skill.progress)}-500" style="width: ${skill.progress}%"></div>
        </div>
      </div>
    `;

    skillsContainer.appendChild(skillElement);
  });
}


// Menambahkan Project
function displayProjects() {
  const projectsContainer = document.getElementById('projects-list');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'bg-gray-500 shadow-lg rounded-lg overflow-hidden';
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-white mb-4">${project.description}</p>
        <a href="${project.link}" class="text-blue-500 hover:text-blue-700">Lihat Proyek <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

// Menambahkan Sertifikat
function displayCertificates() {
  const certificatesContainer = document.getElementById('certificates-list');
  certificates.forEach(cert => {
    const certElement = document.createElement('div');
    certElement.className = 'bg-gray-500 shadow-lg rounded-lg p-6 text-center';
    certElement.innerHTML = `
      <h3 class="text-xl font-semibold mb-2">${cert.title}</h3>
      <p class="text-white mb-2">Penerbit: ${cert.issuer}</p>
      <p class="text-white mb-4">Tahun: ${cert.date}</p>
      <a href="${cert.link}" class="text-blue-500 hover:text-blue-700">Lihat Sertifikat <i class="fas fa-arrow-right"></i></a>
    `;
    certificatesContainer.appendChild(certElement);
  });
}
// Fungsi untuk menampilkan Pengalaman Bekerja
function displayExperience() {
  const experienceContainer = document.getElementById('experience-list');

  experience.forEach(exp => {
    const experienceElement = document.createElement('div');
    experienceElement.className = 'bg-gray-500 p-6 rounded-lg shadow-lg';

    experienceElement.innerHTML = `
      <h3 class="text-xl font-semibold mb-2">${exp.role}</h3>
      <p class="text-white text-sm mb-2">${exp.company}</p>
      <p class="text-white text-xs mb-4">${exp.duration}</p>
      <p class="text-white">${exp.description}</p>
    `;

    experienceContainer.appendChild(experienceElement);
  });
}



// Menambahkan Komunitas
function displayCommunities() {
  const communitiesContainer = document.getElementById('communities-list');
  communities.forEach(community => {
    const communityElement = document.createElement('div');
    communityElement.className = 'bg-gray-500 shadow-lg rounded-lg p-6 text-center';
    communityElement.innerHTML = `
      <h3 class="text-xl font-semibold mb-2">${community.name}</h3>
      <p class="text-white mb-2">Peran: ${community.role}</p>
      <p class="text-white mb-4">Durasi: ${community.duration}</p>
      <a href="${community.link}" class="text-blue-500 hover:text-blue-700">Lihat Komunitas <i class="fas fa-arrow-right"></i></a>
    `;
    communitiesContainer.appendChild(communityElement);
  });
}
// Panggil fungsi untuk menampilkan data
displaySkills();
displayProjects();
displayCertificates();
displayExperience();
displayCommunities();
// Variabel untuk nama
const name = "Reza Saputra"; // Ganti dengan nama Anda

// Pilih semua elemen dengan class "name" dan ganti kontennya
const nameElements = document.querySelectorAll('.name');
nameElements.forEach(element => {
  element.textContent = name;
});
  