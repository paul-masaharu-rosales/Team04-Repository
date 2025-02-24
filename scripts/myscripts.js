
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
