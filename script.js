const quizData = [
    {
        question: 'What is the capital city of Poland?',
        a: 'Wrocław',
        b: 'Poznań',
        c: 'Warszawa',
        d: 'Kraków',
        answer: 'c'
    }, {
        question: 'What is result of 3 to the power of 3?',
        a: '9',
        b: '27',
        c: '81',
        d: '6',
        answer: 'b'
    }, {
        question: 'Who is the president of the United States?',
        a: 'Joe Biden',
        b: 'Barack Obama',
        c: 'Nicolas Cage',
        d: 'Donald Trump',
        answer: 'a'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'ABAP',
        b: 'JavaScript',
        c: 'Python',
        d: 'Java',
        answer: 'b'
    }, {
        question: 'What is the name of movie series with Yoda?',
        a: 'Avengers',
        b: 'Superman',
        c: 'Friends',
        d: 'Star Wars',
        answer: 'd'
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answersEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answersEls.forEach( answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    const answersEls = document.querySelectorAll('.answer');

    answersEls.forEach( answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    let newRetakeBtn = undefined;
    let percentage = 0;

    if(answer) {
        if(answer === quizData[currentQuiz].answer) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            percentage = ( score / quizData.length ) * 100;
            quiz.innerHTML = `<h1>The Quiz is finished!</h1>
            <h2>Your correctly answered ${score}/${quizData.length} questions.</h2>
            <h2>It is ${percentage} % of correct answers!</h2>
            <button id="retake" class='retake'>Retake Quiz</button>`;
            newRetakeBtn = document.getElementById("retake");
            newRetakeBtn.addEventListener("click", () => {
                retakeQuiz();
            });
        }
    }
});

function retakeQuiz() {
    window.location.reload(true);
}