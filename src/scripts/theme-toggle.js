// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

const toggleButton = document.getElementById('theme-toggle');

if (!toggleButton) {
  if (import.meta.env.DEV) {
    console.warn('[theme-toggle] Button element #theme-toggle not found');
  }
} else {
  toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}