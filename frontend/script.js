document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');

  // Check and apply the saved theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.checked = currentTheme === 'dark';
  }

  // Theme toggle event
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

  // Sign-in buttons
  const signinButton1 = document.querySelector('.google a');
  signinButton1.addEventListener('click', function() {
    window.location.href = 'https://reachinbox-assignment-4rf9.onrender.com/auth/google';
  });

  const signinButton2 = document.querySelector('.microsoft a');
  signinButton2.addEventListener('click', function() {
    window.location.href = 'https://reachinbox-assignment-4rf9.onrender.com/outlook/signin';
  });
});
