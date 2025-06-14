// Get the theme toggle button and the icon inside it
const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('i');

// Retrieve the stored theme from localStorage (if any)
const storedTheme = localStorage.getItem('theme');

// Apply the stored theme when the page loads
if (storedTheme === 'dark') {
  document.documentElement.classList.add('dark');
  icon.className = 'fas fa-sun'; // Show sun icon for dark mode
} else {
  icon.className = 'fas fa-moon'; // Show moon icon for light mode
}

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  const isDark = document.documentElement.classList.contains('dark');

  // Save theme preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Switch icon
  if (isDark) {
    icon.className = 'fas fa-sun'; // switch to sun icon in dark mode
  } else {
    icon.className = 'fas fa-moon'; // switch to moon icon in light mode
  }
});
