// Function to show image alt text on hover
function showAlt(image) {
  const caption = document.querySelector("figcaption");
  caption.innerText = image.alt;
  caption.style.display = "block";

  // Add hover animation
  image.style.transform = "scale(1.2)";  // Zoom effect
  image.style.border = "3px solid red";  // Border effect
}

function hideAlt(image) {
  const caption = document.querySelector("figcaption");
  caption.innerText = "";
  caption.style.display = "none";

  // Reset image to original style
  image.style.transform = "scale(1)";
  image.style.border = "none";
}



// Smooth Scroll Effect for "Explore Now" Button
document.getElementById("scrollButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Scroll down smoothly by 300px
  window.scrollBy({
    top: 300,  // Adjust this value to control how far down it scrolls
    behavior: "smooth"
  });
});
