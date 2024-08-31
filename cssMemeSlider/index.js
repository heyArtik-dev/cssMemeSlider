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

meme_image.classList.add(images[0].name);
text.textContent = images[0].text;

const btns = document.querySelectorAll('.btn');
// console.log(btns);

const classes = meme_image.classList;



pagination.addEventListener('click', (e) => {
  
  for (let key in Object.keys(btns)) {
    
    if (btns[key] === e.target || e.target.closest('.btn') === btns[key]) {
      meme_image.classList.remove(classes[1]);
      meme_image.classList.add(images[key].name);
      text.textContent = images[key].text;
    }
  }
})