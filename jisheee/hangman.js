const keyboard = document.querySelector(".keyboard");
const h4 = document.querySelector("h4");
const wordDisplay = document.querySelector(".word-display");
const chance = document.querySelector(".chance");
const img = document.querySelector(".img");
const GameOver = document.querySelector(".GameOver");
const gameoverimg = document.querySelector(".gameoverImg");
const answer=document.querySelector(".answer");
const h3 = document.querySelector("h3");
const h6 = document.querySelector("h6");


let count = 0;

for (let i = 97; i <= 122; i++) { 
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = String.fromCharCode(i)
    keyboard.appendChild(button);
}

const randomIndex = Math.floor(Math.random() * wordlist.length);
const { word, hint } = wordlist[randomIndex]; 


const gameOver = (bool) => {
    gameover.classList.add("show");
    document.querySelector(".game").style.opacity=0.8;
        
    }
const gameOverwin=()=>{
    const matchLetter=[...document.querySelectorAll(".letter")].map((v) => {
        v.innerText.toLowerCase().join("")
        matchLetter===word && gameOver(false)

    })
}

const matchWord = (val) => {
    const matches = word.split("").reduce((acc,el,index) => 
       (el==val.toLowerCase() ? [...acc,index]: acc),[])


    if (matches.length === 0) {
        count++;
        chance.innerText = `${count}/6`;
        count >=6 && setTimeout(() => {gameOver(true);}, 200)            
        }else{
        matches.forEach((v) => {
            const letterElem = document.querySelectorAll(".letter");
            letterElem[v].innerText = val;
            letterElem[v].classList.add("guess");
        })
    }
    gameOverwin()
}


const loadQuestion = () => {
    h4.innerText = `Hint: ${hint}`;
    wordDisplay.innerHTML = ""; 


    Array.from({ length: word.length }, () => {
        const liTag = document.createElement("li");
        liTag.classList.add("letter");
        wordDisplay.appendChild(liTag);
    });


    document.querySelectorAll(".btn").forEach((v) => {
        v.addEventListener("click", (e) => {
            matchWord(e.target.innerText);
            img.src=count >= 6 ? "game6.jpg" : `game${count}.jpg`;
            console.log(word)
        });
    });
};

loadQuestion(); 
