const images = {
  0: {
    name: 'first',
    text: 'YOU SHALL NOT PASS'
  },
  1: {
    name: 'second',
    text: "AND IT`S ONLY BEEN"
  },
  2: {
    name: 'third',
    text: 'WITHOUT A COMPUTER'
  },
  3: {
    name: 'fourth',
    text: 'NO GOD PLEASE NOOOOOOOO'
  },
};

const meme_image = document.querySelector('.meme-image');
const text = document.querySelector('.text');
const pagination = document.querySelector('.pagination');
const btns = document.querySelectorAll('.btn');
const classes = meme_image.classList;
const classesText = text.classList;
const img = document.querySelector('img');

text.textContent = images[0].text;

pagination.addEventListener('click', (e) => {  
  for (let key in Object.keys(btns)) {
    if (btns[key].classList.contains('btn-active')) {
      btns[key].classList.remove('btn-active');
    }

    if (btns[key] === e.target || e.target.closest('.btn') === btns[key]) {
      text.classList.add('clear-anim');
      btns[key].classList.add('btn-active');
      img.classList.add('clear-anim');
      setTimeout(() => {
        img.src = '../cssMemeSlider/assets/img/' + images[key].name + '.png';
        img.alt = images[key].name;
        text.classList.remove('clear-anim');
        img.classList.remove('clear-anim');
        text.textContent = images[key].text;
      },400) 
    }
  }
})

