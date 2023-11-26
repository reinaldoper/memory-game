const emojis = [
  "😄",
  "😄",
  "😭",
  "😭",
  "🥶",
  "🥶",
  "😍",
  "😍",
  "🤑",
  "🤑",
  "💢",
  "💢",
  "🔥",
  "🔥",
  "🐯",
  "🐯",
]
let openCards = []
let shuffeEmojis = emojis.sort(() => (
  Math.random() > 0.5 ? 2: -1
))

for(let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div")
  box.className = "item"
  box.innerHTML = shuffeEmojis[i]
  box.onclick = handloclick
  document.querySelector('.game').appendChild(box)
}

function handloclick(){
  if(openCards.length < 2){
    this.classList.add("boxOpen")
    openCards.push(this)
  }
  if(openCards.length === 2){
    setTimeout(checkMath, 500)
  }
  let open = document.querySelector('.finished')
  open.innerHTML = ''
}

function checkMath(){
  if(openCards[0].innerHTML === openCards[1].innerHTML){
    openCards[0].classList.add('boxMath')
    openCards[1].classList.add('boxMath')
  } else {
    openCards[0].classList.remove('boxOpen')
    openCards[1].classList.remove('boxOpen')
  }
  openCards = []

  if(document.querySelectorAll('.boxMath').length  === emojis.length){
    document.body.appendChild(document.createElement('div')).classList.add('venceu');
    let gameOver = document.createElement('h1');
    gameOver.classList.add('finished');
    gameOver.innerHTML = 'Game Over';
    let game = document.querySelector('.venceu');
    game.appendChild(gameOver);
  }
}