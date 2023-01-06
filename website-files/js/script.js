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
