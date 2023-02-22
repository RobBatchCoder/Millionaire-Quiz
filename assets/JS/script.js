var questions = [{
        question: 'What is the capital of France?',
        A: 'Moscow',
        B: 'Paris',
        C: 'Leon',
        D: 'Madrid',
        result: 'B'
    },
    {
        question: 'What are the three primary colours?',
        A: 'Red, Yellow, Blue',
        B: 'Red, Green, Yellow',
        C: 'White, Black, Gold',
        D: 'Red, Green, Blue',
        result: 'D'
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
        question: 'Which famous inventor invented the telephone?',
        A: 'Thomas Edison',
        B: 'Benjamin Franklin',
        C: 'Alexander Graham Bell',
        D: 'Nikola Tesla',
        result: 'C'
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

    document.getElementById('life-line-A').addEventListener('click', remove2Answers);
    document.getElementById('life-line-B').addEventListener('click', skipQuestion);
    document.getElementById('life-line-C').addEventListener('click', goAgain);
    // load up the first quesitons
    loadQuestion(0);
}

function remove2Answers(num) {
    let lifeLineId = num;

    let random = String.fromCharCode(64 + Math.floor(Math.random() * 4) + 1)
    let removed2 = 0;
    console.log(random1, random2)
    do{
        if (random !== questions[currentQuestion].result) {
            alert(random);
            let blank1 = document.getElementById(`answer-${random}`)
            blank1.classList.add("used-blocker");
            removed2++;
        } 
    }while(removed2 != 2);
    

    // if (random2 !== questions[currentQuestion].result) {
    //     alert(random2);
    //     let blank2 = document.getElementById(`answer-${random2}`)
    //     blank2.classList.add("used-blocker");
    // }
    // else {
        
    // }
    // } else if (random2 !== random1 &&  questions[currentQuestion].result){
    //     let blank2 = document.getElementById(`answer-${random2}`)
    //     blank2.classList.add("used-blocker");
    // }

}

function skipQuestion() {

}

function goAgain() {

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
        gameOver()
    }

    // update the progress graphics

    // update score on screen

    // load next question
    loadQuestion(currentQuestion)

}

function gameOver() {
    alert('you fucked');
}

function loadQuestion(questionNumber) {
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