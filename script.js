/* MAIPULAÇÃO DE ATRIBUTOS */

/*const header = document.querySelector('body')

function bgBlack() {
  header.setAttribute('class', 'header')
}


function bgRemove() {
  header.removeAttribute('class')
}*/

/* ALTERANDO ESTILOS COM STYLE*/
/*
bgAdd = () => {
  const element = document.querySelector('body')

  element.style.backgroundColor = 'green'
  element.style.color = 'white'
}

*/

/* CLASSLIST */

function bgAdd() {
  const element = document.querySelector('body')
  element.classList.toggle('blackMode', '')
}

const person1 = {
  name: 'fabricio',
  age: '26',
  country: 'Belém'
}
function addAge() {
  document.getElementsById('title2').innerHTML = 'fbc'
  console.log(person1.age)
}


