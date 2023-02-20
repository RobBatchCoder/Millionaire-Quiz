questions = [{
    question: 'What is the capital of France?',
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

document.addEventListener('DOMContentLoaded', function(){
    let buttonA = document.getElementsByID('answer-A').addEventListener('click', checkAnswers(answerA));
    let buttonB = document.getElementsByID('answer-B').addEventListener('click', checkAnswers(answerB));
    let buttonC = document.getElementsByID('answer-C').addEventListener('click', checkAnswers(answerC));
    let buttonD = document.getElementsByID('answer-D').addEventListener('click', checkAnswers(answerD));
})

checkAnswers(answer){
    if (answer === question.result){
        console.log('correct');
    }else{
        console.log('incorrect');
    }

    
}