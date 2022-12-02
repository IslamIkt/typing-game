'use strict'

const startBtn = document.querySelector('.start-btn');
const wordEntry = document.querySelector('.word-entry');
const words = document.querySelector('.words');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const audio = new Audio ('./assets/audio_file01.mp3')

const wordList = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population',
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window'];

let x = 99;
let scoreCount = 0

function generateWord(){
    const randomWord = Math.floor((Math.random() * 90));
    words.innerText = wordList[randomWord];
}

function startTimer(){
    timer.innerText = `${x} seconds`
    x = x - 1;
}

function checkWord(){
    if (words.textContent === wordEntry.value){
        generateWord();
        wordEntry.value = "";
        scoreCount++;
        score.innerText = `Score: ${scoreCount}`;
    }
}

function reset(){
    if(x < 1 || scoreCount === 90){
        audio.pause();
        x = 99;
        scoreCount = 0;
        startBtn.classList.remove('invisible');
        wordEntry.classList.add('invisible');
        words.innerText ='Type as many words as possible within 99 secconds';
    }
}

startBtn.addEventListener('click', () => {
    startBtn.classList.add('invisible');
    wordEntry.classList.remove('invisible');
    audio.play();
    generateWord();
    setInterval(reset, 1000)
    setInterval(checkWord, 100);
    setInterval(startTimer, 1000);
})


