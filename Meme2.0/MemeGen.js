
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

    const deleteButton = document.createElement("BUTTON");
    deleteButton.addEventListener('click', function (){
        this.closest('div').remove();
    });

    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete";
    meme.appendChild(deleteButton);

    let remove = document.getElementsByClassName('.delete');

    function closeTheMeme (){
        this.parentElement.parentElement.removeChild();
    };

    for(let i=0;i<remove.length;i++){
        remove[i].addEventListener("click", closeTheMeme);
    }

    form.reset()
});