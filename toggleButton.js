/* toggleButton.js */
export function initToggleButton() {
  const toggleButton = document.querySelector('.toggle-btn');
  
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      toggleButton.classList.toggle('toggle-btn--active');
    });
  }
}