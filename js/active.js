// trucate text on the active launchpad page

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

document.getElementById('trunc').innerHTML = `${short} &nbsp <a <i class="far fa-copy"></i> </a>` ;


//copying text

var copyTextareaBtn = document.querySelector('.fa-copy');

copyTextareaBtn.addEventListener('click', function(event) {
  var copy_text = document.getElementsByTagName("p")[0];
  var range = document.createRange();
  range.selectNode(copy_text);
  window.getSelection().addRange(range);

    try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});


// function copyContract() {
//   var copyText = document.getElementById("trunc").innerHTML;
//   copyText.select();
//   copyText.setSelectionRange(0, 99999)
//   document.execCommand("copy");
// }

// function changeButton(){
//   document.querySelector('fa-copy').innerHTML = `<i class="fas fa-check"></i>`;
// }

// document.getElementById('trunc').addEventListener('click', copyContract);

// console.log(changeButton())