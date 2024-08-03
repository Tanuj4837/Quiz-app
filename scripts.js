const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1915", "1918", "1920"],
        answer: "1912"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: "Hydrogen"
    }
];

let currentQuestionIndex = 0;
let selectedOption = null;
const userAnswers = [];

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // Save answers and redirect to results page
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        window.location.href = 'result.html';
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.sort(() => Math.random() - 0.5).forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerText = option;
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        optionsContainer.appendChild(optionElement);
    });

    // Hide the Next button initially, it will be shown only when an option is selected
    document.getElementById('next-button').style.display = 'none';
}

function selectOption(option, element) {
    selectedOption = option;
    document.querySelectorAll('.option').forEach(elem => {
        elem.classList.remove('selected');
    });
    element.classList.add('selected');
    // Show the Next button once an option is selected
    document.getElementById('next-button').style.display = 'block';
}

function handleNextButton() {
    if (selectedOption !== null) {
        userAnswers.push({
            question: questions[currentQuestionIndex].question,
            selected: selectedOption,
            correct: questions[currentQuestionIndex].answer
        });

        // Move to the next question
        currentQuestionIndex++;
        selectedOption = null;

        // Load the next question or end the quiz
        loadQuestion();
    }
}

// Event listener for the Next button
document.getElementById('next-button').addEventListener('click', handleNextButton);

// Initialize quiz
window.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
