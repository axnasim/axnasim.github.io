// Get the theme toggle button and the icon inside it
const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('i');

// Retrieve the stored theme from localStorage (if any)
const storedTheme = localStorage.getItem('theme');

// Apply the stored theme when the page loads
if (storedTheme === 'dark') {
  // If the stored theme is 'dark', add the 'dark' class to the root element
  document.documentElement.classList.add('dark');
  // Show the sun icon (indicating dark mode is active)
  icon.className = 'fas fa-sun';
} else {
  // Otherwise, show the moon icon (indicating light mode is active)
  icon.className = 'fas fa-moon';
}

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'dark' class on the root element
  document.documentElement.classList.toggle('dark');

  // Check if the 'dark' class is currently applied
  const isDark = document.documentElement.classList.contains('dark');

  // Save the current theme preference in localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Switch the icon based on the current theme
  if (isDark) {
    // If in dark mode, show the sun icon
    icon.className = 'fas fa-sun';
  } else {
    // If in light mode, show the moon icon
    icon.className = 'fas fa-moon';
  }
});
