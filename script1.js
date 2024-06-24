

const questions = [
    {
        question: " Who invented C++?",
        options: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"],
        correctAnswer: 4
    },
    {
        question: " Which of the following is the correct syntax of including a user defined header files in C++?",
        options: ["#include [userdefined]", "#include “userdefined”", "#include <userdefined.h>", "#include <userdefined>"],
        correctAnswer: 2
    },
    {
    question: "Which of the following is a correct identifier in C++?",
        options: ["VAR_1234", "$var_name", "7VARNAME", "7var_name"],
        correctAnswer: 1
    },

    {
        question: "Which of the following is not a type of Constructor in C++?",
        options: ["Default constructor","Parameterized constructor","Copy constructor","Friend constructor"],
        correctAnswer: 4
    }
    ,
    {
        question: "What is the difference between delete and delete[] in C++?",
        options: ["delete is syntactically correct but delete[] is wrong and hence will give an error if used in any case","delete is used to delete normal objects whereas delete[] is used to pointer objects","delete is a keyword whereas delete[] is an identifier","delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects"],
        correctAnswer: 4
    }
    // Add more questions here
];

let currentQuestion = 0;
const userAnswers = [];

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const options = questions[currentQuestion].options;

    questionElement.innerText = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;

    const optionButtons = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        optionButtons[i].innerText = `${String.fromCharCode(65 + i)}. ${options[i]}`;
    }
}

function checkAnswer(selectedOption) {
    if (currentQuestion < questions.length) {
        userAnswers[currentQuestion] = selectedOption;
        currentQuestion++;
    }

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("end-quiz").style.display = "block";
        const score = calculateScore();
        document.getElementById("user-score").innerText = score;
    }
}

function calculateScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) {
            score++;
        }
    }
    return score*10;
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers.length = 0;
    document.getElementById("end-quiz").style.display = "none";
    displayQuestion();
}

function goToNextPage() {
    // Redirect to another page
    window.location.href = "index.html";
}

displayQuestion();