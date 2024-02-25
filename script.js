let button = document.querySelector(".button")
let par = document.querySelector(".quote")

function updateQuote() {
    fetch("https://api.kanye.rest")
        .then((res) => res.json())
        .then((data) => {
            translateCode(data.quote)
        })


}

function translateCode(quote) {
    let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=" + encodeURI(quote)
    fetch(url)
        .then((res) => res.json())
        .then((translateText) => {
            par.textContent = translateText[0][0][0]
        })
        .catch((error) => {
            console.log('error 404', error)
            par.textContent = quote
        })
}

button.addEventListener("click", updateQuote)

