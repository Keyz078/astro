function addCopyButtons() {
  // Cari semua blok kode di dalam halaman
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(block => {
    // Hanya tambahkan tombol jika blok kode ini belum punya
    if (block.querySelector('.copy-code-btn')) return;

    // Buat elemen tombol
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'Copy';

    // Tambahkan event listener untuk menyalin kode saat diklik
    button.addEventListener('click', () => {
      const code = block.querySelector('code');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code.innerText).then(() => {
          // Beri feedback visual kepada pengguna
          button.textContent = 'Copied!!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000); // Kembalikan teks setelah 2 detik
        });
      }
    });
    
    // Buat wrapper untuk positioning
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // Pindahkan blok kode ke dalam wrapper
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);
    
    // Tambahkan tombol ke dalam wrapper
    wrapper.appendChild(button);
  });
}

// Jalankan fungsi saat halaman dimuat atau setelah navigasi
document.addEventListener('astro:page-load', addCopyButtons);
// Jalankan juga saat pertama kali load untuk non-navigasi
addCopyButtons();