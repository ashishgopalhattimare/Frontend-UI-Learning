const DEFAULT_SIZE = 4;

const getRandomColors = function(){
    var ratio = 0.618033988749895;
    
    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;

    var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}

function createBox() {
	let box$ = document.createElement('span');
  box$.classList.add('box');
  
  return box$;
}

function ColorSpotter(id, row, col) {
	const colorSpotter$ = document.querySelector(id);
  colorSpotter$.innerHTML = '';
  
  let colorSpotterFragment$ = document.createDocumentFragment();
  
  const _colorGenerate = getRandomColors(); // {color, oddColor}
  const _randomIndex = Math.floor(Math.random() * (row*col));
  
  let index = 0;
  for(let r = 0; r < row; ++r) {
  	let row$ = document.createElement('span');
    row$.classList.add('row');
    
  	for(let c = 0; c < col; ++c) {
      let box$ = createBox();
      
      if (index === _randomIndex) {
        box$.style.backgroundColor = _colorGenerate.oddColor;
        box$.classList.add('oddColor');
      } else {
        box$.style.backgroundColor = _colorGenerate.color;
      }
      
      box$.addEventListener('click', (event) => {
      	if (event.target.classList.contains('oddColor')) {
        	new ColorSpotter('#color-spotter', row+1, col+1);
        } else {
        	let message$ = document.getElementById('message');
          message$.textContent = 'You got it wrong!!!';
          
          colorSpotter$.classList.add('shake');
          
          setTimeout(() => {
          	new ColorSpotter('#color-spotter', DEFAULT_SIZE, DEFAULT_SIZE);
          	message$.textContent = '';
            colorSpotter$.classList.remove('shake');
          }, 800);
        }
      });
      
      row$.appendChild(box$);
      ++index;
    }
    colorSpotterFragment$.appendChild(row$);
  }
  
  colorSpotter$.appendChild(colorSpotterFragment$);
}

new ColorSpotter('#color-spotter', DEFAULT_SIZE, DEFAULT_SIZE);