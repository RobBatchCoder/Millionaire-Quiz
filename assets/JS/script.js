var questions = [{
    question: 'What is the capital of France?',
    answerA: 'Moscow',
    answerB: 'Paris',
    answerC: 'Leon',
    answerD: 'Madrid',
    result: 'answer-B'
}, {
    question: 'What are the three primary colours?',
    answerA: 'Red, Yellow, Blue',
    answerB: 'Red, Green, Yellow',
    answerC: 'White, Black, Gold',
    answerD: 'Red, Green Blue',
    result: 'answer-D'
},{
    question: 'In which Italian city can you find the Colosseum?',
    answerA: 'Venice',
    answerB: 'Rome',
    answerC: 'Naples',
    answerD: 'Milan',
    result: 'answer-B'
},
{
    question: 'What is the largest active volcano in the world?',
    answerA: 'Mount Etna',
    answerB: 'Mount Vesuvius',
    answerC: 'Mouna Loa',
    answerD: 'Mount Batur',
    result: 'answer-C'
},
{
    question: 'When did Lenin die?',
    answerA: '21 January 1924',
    answerB: '21 January 1934',
    answerC: '21 January 1944',
    answerD: '21 January 1954',
    result: 'answer-A'
},
{
    question: 'When was the book “To Kill a Mockingbird” by Harper Lee published?',
    answerA: '1950',
    answerB: '1960',
    answerC: '1970',
    answerD: '1980',
    result: 'answer-B'
},
{
    question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
    answerA: 'Le Louvre',
    answerB: 'Uffizi Museum',
    answerC: 'British Museum',
    answerD: 'Metropolitan Museum of Art',
    result: 'answer-A'
},
{
    question: 'When did Hitler invade Poland?',
    answerA: '1st September 1939',
    answerB: '11th November 1939',
    answerC: '8th May 1940',
    answerD: '1st December 1940',
    result: 'answer-A'
},
{
    question: 'What is the largest continent in size?',
    answerA: 'Asia',
    answerB: 'Africa',
    answerC: 'Europe',
    answerD: 'North America',
    result: 'answer-A'
},
{
    question: 'Which French king was nicknamed the “Sun King”?',
    answerA: 'Louis XVI',
    answerB: 'Charlemagne',
    answerC: 'Francis I',
    answerD: 'Louis XIV',
    result: 'answer-D'
},
{
    question: 'Who was George W. Bush’ vice president?',
    answerA: 'Kamala Harris',
    answerB: 'Joe Biden',
    answerC: 'Dick Cheney',
    answerD: 'Al Gore',
    result: 'answer-C'
},
{
    question: 'Which famous inventor invented the telephone?',
    answerA: 'Thomas Edison',
    answerB: 'Benjamin Franklin',
    answerC: 'Alexander Graham Bell',
    answerD: 'Nikola Tesla',
    result: 'answer-C'
},
{
    question: 'Which famous inventor invented the telephone?',
    answerA: 'Thomas Edison',
    answerB: 'Benjamin Franklin',
    answerC: 'Alexander Graham Bell',
    answerD: 'Nikola Tesla',
    result: 'answer-C'
},
{
    question: 'In which city is the Juventus Football Club based?',
    answerA: 'Turin',
    answerB: 'Barcelona',
    answerC: 'Manchester',
    answerD: 'Marseille',
    result: 'answer-A'
},
{
    question: 'What does the Richter scale measure?',
    answerA: 'Wind Speed',
    answerB: 'Temperature',
    answerC: 'Tornado Strength',
    answerD: 'Earthquake intensity',
    result: 'answer-D'
},
];

function setup() {
    // Wait for the DOM to finish loading before running the game
    // Get the button elements and add event listeners to them

    document.addEventListener("DOMContentLoaded", function () {
        let buttons = document.getElementsByClassName('answer-box');

        for (let button of buttons) {
            button.addEventListener('click', function () {
                let answerType = this.getAttribute('id');
                checkAnswer(answerType);
            });
        }
    })
}

function checkAnswer(type) {
    if (type === questions[0].result) {
        alert('Yeah, you got it right!');
    }else{
        alert('You suck!');
    }

}

function main() {
    document.getElementById('question-box').innerText = questions[0].question;
    document.getElementById('answer-A').innerText = questions[0].answerA;
    document.getElementById('answer-B').innerText = questions[0].answerB;
    document.getElementById('answer-C').innerText = questions[0].answerC;
    document.getElementById('answer-D').innerText = questions[0].answerD;
}

// Main program
setup();
main();