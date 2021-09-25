const userInput = document.querySelector('#input')
const translate = document.querySelector('#translate')
const renderInput = document.querySelector('#renderInput')




let url = "https://api.funtranslations.com/translate/gungan.json"


function apiURL(text) {
    return url + "?" + "text=" + text
}

function errorHandler(error) {
    console.log(error)
}

function translatedText() {
    
    let inputText = userInput.value;

    fetch(apiURL(inputText))
        .then(response => response.json())
        .then(json => {
            let output = json.contents.translated;
            renderInput.innerText = output;
        })
        .catch(errorHandler)
}
translate.addEventListener("click", translatedText)

