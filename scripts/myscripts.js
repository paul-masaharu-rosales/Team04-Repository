// ==========================
// HERO SECTION SCROLL FUNCTION
// ==========================

// Smooth Scroll Effect for "Explore Now" Button
document.getElementById("scrollButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Scroll down smoothly by 300px (adjust as needed)
  window.scrollBy({
    top: 300,  // Adjust this value to control how far down it scrolls
    behavior: "smooth"
  });
});
function showAlt(image) {
  let caption = document.querySelector('figcaption');
  caption.textContent = image.alt;  // Display the alt text in the figcaption
}

// Function to hide the alt text
function hideAlt() {
  let caption = document.querySelector('figcaption');
  caption.textContent = '';  // Clear the caption text
}