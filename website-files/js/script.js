// Typing Effect
var typed = new Typed(".typing", {
  strings: ["YouTube", "Programming", "Science", "Chess", "Hacking"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Copy to Clipboard
function copy() {
  var copyText = "https://axorax.tk/";
  navigator.clipboard.writeText(copyText);
  alert("Copied : " + copyText);
}

// Contact Bottom Links
function contactSuccessPrivacyActive() {
  const button = document.querySelector("#contact-success-bottom-btn-privacy");
  const privacy = document.querySelector(".contact-success-privacy");
  button.addEventListener("click", () => {
    if (privacy.style.display === "block") {
      privacy.style.display = "none";
    } else {
      privacy.style.display = "block";
    }
  });
}
