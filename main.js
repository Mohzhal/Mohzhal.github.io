import { loadMainMenu } from './mainMenu.js';

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const loader2 = document.getElementById("loader2");
    const loader3 = document.getElementById("loader3");
    const mainContent = document.getElementById("mainContent");

    // Simulasi pengecekan kekuatan jaringan (gunakan setTimeout untuk simulasi)
    setTimeout(function () {
        // Sembunyikan loader setelah simulasi selesai
        loader.style.display = "none";
        loader2.style.display = "none";
        loader3.style.display = "none";

        // Tampilkan konten utama
        mainContent.style.display = "block";

        // Muat menu utama
        loadMainMenu(mainContent);

        // Setelah konten dimuat, tambahkan kelas untuk efek transisi
        mainContent.classList.add("fade-in");
        
        // Setelah beberapa detik, navigasi ke file index.html
        navigateToIndex();
    }, 3000); // Ubah sesuai dengan kebutuhan waktu pengecekan jaringan
});

function navigateToIndex() {
    // Simpan waktu delay sebelum navigasi (misalnya, 2 detik)
    const delay = 2000;

    setTimeout(function () {
        // Navigasi ke file index.html
        window.location.href = "public/index.html";
    }, delay);
}
