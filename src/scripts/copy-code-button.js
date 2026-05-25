function addCopyButtons() {
  // Cari semua blok kode di dalam halaman (hanya yang di dalam prose)
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(block => {
    // Hanya tambahkan tombol jika blok kode ini belum punya
    if (block.querySelector('.copy-code-btn')) return;

    // Buat elemen tombol
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'Copy';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    // Tambahkan event listener untuk menyalin kode saat diklik
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const code = block.querySelector('code');
      if (!code) return;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code.innerText).then(() => {
          // Beri feedback visual kepada pengguna
          button.textContent = 'Copied!!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000); // Kembalikan teks setelah 2 detik
        }).catch((err) => {
          console.error('Failed to copy code:', err);
          button.textContent = 'Error';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
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

// Debounce function to prevent running multiple times
let addButtonsTimeout;
function scheduleAddCopyButtons() {
  clearTimeout(addButtonsTimeout);
  addButtonsTimeout = setTimeout(addCopyButtons, 50);
}

// Jalankan fungsi setelah DOM siap dan juga setelah navigasi klien
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleAddCopyButtons);
} else {
  scheduleAddCopyButtons();
}
document.addEventListener('astro:page-load', scheduleAddCopyButtons);