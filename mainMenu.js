export function loadMainMenu(container) {
    // Muat konten menu utama dari file terpisah
    fetch('public/index.html')
        .then(response => response.text())
        .then(data => {
            // Setel HTML konten menu utama
            container.innerHTML = data;

            // Tambahkan event listener atau lakukan operasi lain jika diperlukan
            // Contoh: Mengaktifkan event pada elemen di menu utama
            const menuButton = container.querySelector('#menuButton');
            menuButton.addEventListener('click', function() {
                alert('Tombol menu diklik!');
            });
        })
        .catch(error => {
            console.error('Error loading main menu:', error);
        });
}
