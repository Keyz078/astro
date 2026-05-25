 const btn = document.getElementById('search-toggle');
 const container = document.querySelector('[id="search-container"]');
 
 if (!btn) {
   if (import.meta.env.DEV) {
     console.warn('[search-toggle] Button element #search-toggle not found');
   }
   throw new Error('Search toggle button element not found');
 }
 
 if (!container) {
   if (import.meta.env.DEV) {
     console.warn('[search-toggle] Container element #search-container not found');
   }
   throw new Error('Search container element not found');
 }
 
 btn.addEventListener('click', (e) => {
   e.stopPropagation();
   container.classList.toggle('hidden');
   // autofocus - search for input in pagefind UI
   setTimeout(() => {
     const searchInput = container.querySelector('input[placeholder*="Search"], input[type="search"], .pagefind-ui__input');
     if (searchInput) {
       searchInput.focus();
     }
   }, 50);
 });
 
 // klik luar = close
 document.addEventListener('click', (e) => {
   if (!container.contains(e.target) && !btn.contains(e.target)) {
     container.classList.add('hidden');
   }
 });
 
 // shortcut "/"
 document.addEventListener('keydown', (e) => {
   if (e.key === '/') {
     e.preventDefault();
     container.classList.remove('hidden');
     setTimeout(() => {
       const searchInput = container.querySelector('input[placeholder*="Search"], input[type="search"], .pagefind-ui__input');
       if (searchInput) {
         searchInput.focus();
       }
     }, 50);
   }
 });