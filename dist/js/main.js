const getRandomDadJoke = async () => {


    const url = "https://icanhazdadjoke.com/";

    const jokeStream = await fetch(url, {

        headers: {
            Accept: "application/json"
        }
});

console.log("jokeStream")
console.log((await jokeStream.json()))
const url1 = "/api/hello";
console.log("url1")
console.log(url1)
const joke = (await (await fetch(url1)).json());
console.log("joke")
console.log(joke)

return joke;


};


const displayJoke = (joke) => {

    const h1 = document.querySelector("h1");
    h1.textContent = joke;
}


const refreshJoke = async () => {

    const joke = await getRandomDadJoke();

    displayJoke(joke);
}


setInterval(refreshJoke, 5000)


//load first joke
refreshJoke()