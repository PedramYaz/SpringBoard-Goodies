
let form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const meme = document.createElement('div');
    const textTop = document.createElement('div');
    const textBottom = document.createElement('div');
    const img = document.createElement('img');

    img.src = document.getElementById('imageURL').value;
    textTop.classList.add('textTop');
    textTop.innerHTML = document.getElementById('topTextInput').value;

    textBottom.classList.add('textBottom')
    textBottom.innerHTML = document.getElementById('bottomTextInput').value;

    meme.classList.add('meme');
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    let memeLocation = document.getElementById('location');
    memeLocation.append(meme);

    form.reset()
});

document.getElementById('location').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});
