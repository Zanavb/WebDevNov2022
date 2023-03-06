
const randomSource = document.getElementById('random_meme')

function GetRandomMeme() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=HPcCqZRESDAelBK9K6pzwGg7AJvZmaXq&tag=&rating=g')
    .then(res => res.json())
    .then(meme => {
        console.log(meme.data.embed_url)
        console.log(randomSource)
        randomSource.src = meme.data.embed_url
    })
}