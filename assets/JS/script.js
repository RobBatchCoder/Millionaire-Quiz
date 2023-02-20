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