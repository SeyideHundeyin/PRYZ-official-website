// truncate text on the active launchpad page

function textEllipsis(str, maxLength, { side = "end", ellipsis = "..." } = {}) {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length));
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
  }
  return str;
}

var short = textEllipsis('0x720089996e34B0b13812ec9211fde0eF11CD9C52', 10);



// reducing the contract number

document.getElementById('trunc').innerHTML = short;



// changing the button

// document.getElementById("copy").addEventListener("click", function() {
//   document.getElementById("copy").style.display = "none";  
//   document.getElementById("copy").innerHTML = `<i class="fas fa-check"></i>`;  
// });

// copying text

document.getElementById("copy").addEventListener('click',function copyContract() {
  var r = document.createRange();
r.selectNode(document.getElementById("truncc"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
});