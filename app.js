let container = document.querySelector('.container');
let gridDivs = document.getElementsByClassName('div-style');
const body = document.querySelector('body');


function defaultGrid() {
  container.style.gridTemplateRows = 'repeat(16, 1fr)';
  container.style.gridTemplateColumns = 'repeat(16, 1fr)';
  for (let i = 0; i < 256; i++) {
    let makeDiv = document.createElement('div');
    makeDiv.className = 'div-style';
    container.appendChild(makeDiv);
  }
}

defaultGrid();

//makes gridDivs into an array-like structure, so I can forEach through. This does stops working once you change the grid's size. Since I dynamically change the grid size with js, I needed to use event delegation, which I did by tagreting the body and the e.target.classList.contains pattern
/* function hoverEffect() {
  gridDivs = Array.from(gridDivs);
  gridDivs.forEach(function(gridDiv) {
    gridDiv.addEventListener('mouseover', function(){
      gridDiv.style.background = 'black';
    })
  })
} */

/* hoverEffect();
 */
 
document.body.addEventListener('mouseover', hoverEffect);

function hoverEffect(e) {
	if (e.target.classList.contains('div-style')) {
		e.target.classList.add('black');
	}
}

function customGrid() {
  let customSize = prompt('Enter a number less than 64, greater than 0, and I\'ll square it');
  //Limit certain inputs.
  while (customSize > 64 || customSize < 1) {
    customSize = prompt('Enter a number less than 64, greater than 0, and I\'ll square it');
  }

  // container.innerHTML = '';
  Array.from(container.childNodes).forEach(function(x) {
    container.removeChild(x);
  })

  container.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;

  for (let i = 0; i < customSize * customSize; i++) {
    let custDiv = document.createElement('div');
    custDiv.className = 'div-style';
    container.appendChild(custDiv);
  }
}
