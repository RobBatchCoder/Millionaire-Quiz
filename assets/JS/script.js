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
    }
];
// {
//     question: 'In which Italian city can you find the Colosseum?',
//     answerA: 'Venice',
//     answerB: 'Rome',
//     answerC: 'Naples',
//     answerD: 'Milan',
//     result: 'answer-B'
// },
// {
//     question: 'What is the largest active volcano in the world?',
//     answerA: 'Mount Etna',
//     answerB: 'Mount Vesuvius',
//     answerC: 'Mouna Loa',
//     answerD: 'Mount Batur',
//     result: 'answer-C'
// },
// {
//     question: 'When did Lenin die?',
//     answerA: '21 January 1924',
//     answerB: '21 January 1934',
//     answerC: '21 January 1944',
//     answerD: '21 January 1954',
//     result: 'answer-A'
// },
// {
//     question: 'When was the book “To Kill a Mockingbird” by Harper Lee published?',
//     answerA: '1950',
//     answerB: '1960',
//     answerC: '1970',
//     answerD: '1980',
//     result: 'answer-B'
// },
// {
//     question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
//     answerA: 'Le Louvre',
//     answerB: 'Uffizi Museum',
//     answerC: 'British Museum',
//     answerD: 'Metropolitan Museum of Art',
//     result: 'answer-A'
// },
// {
//     question: 'When did Hitler invade Poland?',
//     answerA: '1st September 1939',
//     answerB: '11th November 1939',
//     answerC: '8th May 1940',
//     answerD: '1st December 1940',
//     result: 'answer-A'
// },
// {
//     question: 'What is the largest continent in size?',
//     answerA: 'Asia',
//     answerB: 'Africa',
//     answerC: 'Europe',
//     answerD: 'North America',
//     result: 'answer-A'
// },
// {
//     question: 'Which French king was nicknamed the “Sun King”?',
//     answerA: 'Louis XVI',
//     answerB: 'Charlemagne',
//     answerC: 'Francis I',
//     answerD: 'Louis XIV',
//     result: 'answer-D'
// },
// {
//     question: 'Who was George W. Bush’ vice president?',
//     answerA: 'Kamala Harris',
//     answerB: 'Joe Biden',
//     answerC: 'Dick Cheney',
//     answerD: 'Al Gore',
//     result: 'answer-C'
// },
// {
//     question: 'Which famous inventor invented the telephone?',
//     answerA: 'Thomas Edison',
//     answerB: 'Benjamin Franklin',
//     answerC: 'Alexander Graham Bell',
//     answerD: 'Nikola Tesla',
//     result: 'answer-C'
// },
// {
//     question: 'Which famous inventor invented the telephone?',
//     answerA: 'Thomas Edison',
//     answerB: 'Benjamin Franklin',
//     answerC: 'Alexander Graham Bell',
//     answerD: 'Nikola Tesla',
//     result: 'answer-C'
// },
// {
//     question: 'In which city is the Juventus Football Club based?',
//     answerA: 'Turin',
//     answerB: 'Barcelona',
//     answerC: 'Manchester',
//     answerD: 'Marseille',
//     result: 'answer-A'
// },
// {
//     question: 'What does the Richter scale measure?',
//     answerA: 'Wind Speed',
//     answerB: 'Temperature',
//     answerC: 'Tornado Strength',
//     answerD: 'Earthquake intensity',
//     result: 'answer-D'
// },


var score = 0;
var currentQuestion = 0;

function setup() {

    // setup all the button listeners for the answer choices
    let buttons = document.getElementsByClassName('answer-box');

    document.getElementById('answer-A').addEventListener('click', aPressed);
    document.getElementById('answer-B').addEventListener('click', bPressed);
    document.getElementById('answer-C').addEventListener('click', cPressed);
    document.getElementById('answer-D').addEventListener('click', dPressed);

    // load up the first quesitons
    loadQuestion(0);
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
    } else {
        gameOver()
    }

    // update the progress graphics

    // update score on screen

    // load next question
    loadQuestion(currentQuestion)

}



function gameOver() {
    alert('you fuckefd');
    window.close();
}

function loadQuestion(questionNumber) {
    document.getElementById('question-box').innerText = questions[questionNumber].question;
    document.getElementById('answer-A').innerText = questions[questionNumber].A;
    document.getElementById('answer-B').innerText = questions[questionNumber].B;
    document.getElementById('answer-C').innerText = questions[questionNumber].C;
    document.getElementById('answer-D').innerText = questions[questionNumber].D;

}



// Main program
setup();