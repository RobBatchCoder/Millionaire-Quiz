var questions = [{
        question: 'What is the capital of France?',
        A: 'Moscow',
        B: 'Paris',
        C: 'Leon',
        D: 'Madrid',
        result: 'B'
    },
    {
        question: 'What is the name of the traditional Japanese sword with a slight curve used by a Samurai?',
        A: 'Tekken',
        B: 'Katana',
        C: 'Kama',
        D: 'Kusarigama',
        result: 'B'
    },

    {
        question: 'In which Italian city can you find the Colosseum?',
        A: 'Venice',
        B: 'Rome',
        C: 'Naples',
        D: 'Milan',
        result: 'B'
    },
    {
        question: 'What is the largest active volcano in the world?',
        A: 'Mount Etna',
        B: 'Mount Vesuvius',
        C: 'Mouna Loa',
        D: 'Mount Batur',
        result: 'C'
    },
    {
        question: 'When did Lenin die?',
        A: '21 January 1924',
        B: '21 January 1934',
        C: '21 January 1944',
        D: '21 January 1954',
        result: 'A'
    },
    {
        question: 'When was the book “To Kill a Mockingbird” by Harper Lee published?',
        A: '1950',
        B: '1960',
        C: '1970',
        D: '1980',
        result: 'B'
    },
    {
        question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
        A: 'Le Louvre',
        B: 'Uffizi Museum',
        C: 'British Museum',
        D: 'Metropolitan Museum of Art',
        result: 'A'
    },
    {
        question: 'When did Hitler invade Poland?',
        A: '1st September 1939',
        B: '11th November 1939',
        C: '8th May 1940',
        D: '1st December 1940',
        result: 'A'
    },
    {
        question: 'What is the largest continent in size?',
        A: 'Asia',
        B: 'Africa',
        C: 'Europe',
        D: 'North America',
        result: 'A'
    },
    {
        question: 'Which French king was nicknamed the “Sun King”?',
        A: 'Louis XVI',
        B: 'Charlemagne',
        C: 'Francis I',
        D: 'Louis XIV',
        result: 'D'
    },
    {
        question: 'Who was George W. Bush’ vice president?',
        A: 'Kamala Harris',
        B: 'Joe Biden',
        C: 'Dick Cheney',
        D: 'Al Gore',
        result: 'C'
    },
    {
        question: 'Jeff Bezos is the founder of which billion dollar company?',
        A: 'Apple',
        B: 'Subway',
        C: 'Tesla',
        D: 'Amazon',
        result: 'D'
    },
    {
        question: 'Which famous inventor invented the telephone?',
        A: 'Thomas Edison',
        B: 'Benjamin Franklin',
        C: 'Alexander Graham Bell',
        D: 'Nikola Tesla',
        result: 'C'
    },
    {
        question: 'In which city is the Juventus Football Club based?',
        A: 'Turin',
        B: 'Barcelona',
        C: 'Manchester',
        D: 'Marseille',
        result: 'A'
    },
    {
        question: 'What does the Richter scale measure?',
        A: 'Wind Speed',
        B: 'Temperature',
        C: 'Tornado Strength',
        D: 'Earthquake intensity',
        result: 'D'
    }
];


var score = 0;
var currentQuestion = 0;


function setup() {

    // setup all the button listeners for the answer choices
    // let buttons = document.getElementsByClassName('answer-box');

    document.getElementById('answer-A').addEventListener('click', aPressed);
    document.getElementById('answer-B').addEventListener('click', bPressed);
    document.getElementById('answer-C').addEventListener('click', cPressed);
    document.getElementById('answer-D').addEventListener('click', dPressed);

    document.getElementById('life-line-A').addEventListener('click', function () {
        remove2Answers(), removeButton("A")
    });
    document.getElementById('life-line-B').addEventListener('click', function () {
        remove2Answers(), removeButton("B")
    });
    document.getElementById('life-line-C').addEventListener('click', function () {
        remove2Answers(), removeButton("C")
    });
    // load up the first quesitons
    loadQuestion(0);
}

function remove2Answers() {

    let removed2 = [];

    do {
        let random = String.fromCharCode(64 + Math.floor(Math.random() * 4) + 1)
        if (random !== questions[currentQuestion].result && random !== removed2[0]) {
            removed2.push(random);
        }
    } while (removed2.length !== 2)
    //removes 2 inccorect answers from view
    let blank1 = document.getElementById(`answer-${removed2[0]}`)
    let blank2 = document.getElementById(`answer-${removed2[1]}`)
    blank1.classList.add("used-blocker");
    blank2.classList.add("used-blocker");

}

function removeButton(button) {
    //removes lifeline button once used
    let removeButton = document.getElementById(`life-line-${button}`);
    removeButton.classList.add("used-blocker");
}

function removeBlocker(removed2) {
    let removeBlank1 = document.getElementById(`answer-${removed2[0]}`)
    let removeBlank2 = document.getElementById(`answer-${removed2[1]}`)
    removeBlank1.classList.remove("used-blocker");
    removeBlank2.classList.remove("used-blocker");
}

function aPressed() {
    checkAnswer('A');
}

function bPressed() {
    checkAnswer('B')
}

function cPressed() {
    checkAnswer('C')
}

function dPressed() {
    checkAnswer('D')
}

function checkAnswer(letter) {

    let answer = questions[currentQuestion].result;
    if (answer === letter) {
        score++;
        currentQuestion++
        increaseScore(score);
    } else {
        gameOver(score)
    }
    // load next question
    loadQuestion(currentQuestion)

}

function gameOver() {
    alert('Game Over');

    location.reload();
}

function loadQuestion(questionNumber) {
    //Load next question

    document.getElementById('answer-A').classList.remove("used-blocker");
    document.getElementById('answer-B').classList.remove("used-blocker");
    document.getElementById('answer-C').classList.remove("used-blocker");
    document.getElementById('answer-D').classList.remove("used-blocker");


    document.getElementById('question-box').innerText = questions[questionNumber].question;
    document.getElementById('answer-A').innerText = questions[questionNumber].A;
    document.getElementById('answer-B').innerText = questions[questionNumber].B;
    document.getElementById('answer-C').innerText = questions[questionNumber].C;
    document.getElementById('answer-D').innerText = questions[questionNumber].D;


    removeLastScore(score);

}

function increaseScore(score) {
    let currentScore = score;
    let cashPrize = document.getElementById(`money${currentScore}`);
    cashPrize.classList.add("currentCash");

}

function removeLastScore(score) {
    let lastScore = score - 1;
    let removePrize = document.getElementById(`money${lastScore}`);
    removePrize.classList.remove('currentCash');

}
// Main program
setup();