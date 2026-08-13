const quiz = [
    {
        question: "who is the real gladiator",
        options: ["russel crowve", "bramhanandam", "nene", "idk"],
        answer: "bramhanandam"
    },
        {
        question: "best movie of all time",
        options: ["radiator", "snehasagaram", "gladiator 2", "gladiator 1"],
        answer: "radiator"
    },
    {
        question: "who wins in a brawl?",
        options: ["superman", "batman", "spiderman", "bramhanandam"],
        answer: "bramhanandam"
    }
];

let index = 0;
let score = 0;
let time = 90;
let timerInterval;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

function loadQuestion() {
    optionsEl.innerHTML = "";
    resultEl.innerHTML = "";
    
    let currentQuiz = quiz[index];
    questionEl.innerHTML = currentQuiz.question;
    
    currentQuiz.options.forEach(option => {
        optionsEl.innerHTML += `<label><input type="radio" name="ans" value="${option}"> ${option}</label>`;
    });
}

function nextQuestion() {
    const selected = document.querySelector('input[name="ans"]:checked');
    
    if (!selected) {
        alert("Please select an answer!");
        return;
    }


    if (selected.value === quiz[index].answer) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        resultEl.innerHTML = "Your Score: " + score + "/" + quiz.length;
        questionEl.innerHTML = "";
        optionsEl.innerHTML = "";
    }
}

timerInterval = setInterval(function() {
    time--;
    timerEl.innerHTML = "Time: " + time;
    
    if (time <= 0) {
        clearInterval(timerInterval);
        resultEl.innerHTML = "Time Over! Score: " + score + "/" + quiz.length;
        questionEl.innerHTML = "";
        optionsEl.innerHTML = "";
    }
}, 1000);

loadQuestion();
