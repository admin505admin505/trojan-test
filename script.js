function reverseString(str) {
  return str.split('').reverse().join('');
}

setInterval(function() {
  const newWindow = window.open('', '_blank');
  newWindow.document.write('This is a popup!');
}, 1000);
