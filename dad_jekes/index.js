const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "5r26yLQ1xbmqF6KL7TSMvg==Lu1CiJUlSvzVEKhP";

const options = {
    method: "Get",
    headers:{
        "X-Api-Key" :apiKey,
    },
};  

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"



async function getJoke(){
    try {
        jokeEl.innerText = 'updating...'
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL , options)
        const data = await response.json();
        
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "erorrrrr 404 , try again"
        console.log(error);
    }
    
}
btnEl.addEventListener("click",getJoke)