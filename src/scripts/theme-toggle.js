 const toggleButton = document.getElementById('theme-toggle');

 if (toggleButton) {
   toggleButton.addEventListener('click', () => {
     const isDark = document.documentElement.classList.toggle('dark');
     localStorage.setItem('theme', isDark ? 'dark' : 'light');
   });
 }