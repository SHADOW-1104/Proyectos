// Elementos HTML
const btn = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const res = document.getElementById('result');

// Eventos del HTML
btn.addEventListener('click', palindrome);

// Funciones del HTML

function palindrome() {
  const cadenaOriginal = input.value;
  const cadenaTratada = [...cadenaOriginal].join('').toLowerCase().replace(/[_(-/).,!?¡¿\s]/g, '');
  const cadenaInvertida = [...cadenaOriginal].reverse().join('').toLowerCase().replace(/[_(-/).,!?¡¿\s]/g, '');

  // Comparacion campo vacio
  if (cadenaOriginal == "") {
    return alert("Por favor, ingresa una palabra.");
  }
  // Comparacion No Palindromo
  if (cadenaTratada !== cadenaInvertida) {
    res.classList.remove('hide');
    setTimeout(function () {
      res.classList.add('hide');
      input.value = "";
    }, 2000);
    return res.innerText = `" ${cadenaOriginal} " = No Palindromo`;
  }
  // Comparacion Palindromo
  res.classList.remove('hide');
  setTimeout(function () {
    res.classList.add('hide');
    input.value = "";
  }, 2000);
  return res.innerText = `" ${cadenaOriginal} " = ¡Palindromo!`;
}