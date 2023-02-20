var questions = [{
    question: 'What is the capital of FrENCHIESA?',
    answerA: 'Moscow',
    answerB: 'Paris',
    answerC: 'Leon',
    answerD: 'Madrid',
    result: 'answerB'
}, {
    question: 'What are the three primary colours?',
    answerA: 'Red, Yellow, Blue',
    answerB: 'Red, Green, Yellow',
    answerC: 'White, Black, Gold',
    answerD: 'Red, Green Blue',
    result: 'answerD'
}];

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
    alert(type);
}

function main() {
    document.getElementById('question-box').innerText = questions[0].question;
}

// Main program
setup();
main();