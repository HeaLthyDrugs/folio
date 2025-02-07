export const themeScript = `
  (function() {
    function getTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    
    document.documentElement.setAttribute('data-theme', getTheme());
  })()
`; 