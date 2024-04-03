const memeBtn = document.querySelector('#btn');
const author = document.querySelector('#memeAuth');
const img = document.querySelector('#nameImg');
const loading = document.querySelector('#name-title');

const updateDetails = (url, title, author) => {
    img.setAttribute("src", url)
    loading.innerHTML = title;
    author.innerHTML = author
}

const Generate = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    })
}


memeBtn.addEventListener('click', Generate);


