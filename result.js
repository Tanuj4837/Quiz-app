window.addEventListener('DOMContentLoaded', () => {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const totalQuestions = userAnswers.length;
    const correctAnswers = userAnswers.filter(answer => answer.selected === answer.correct).length;

    // Display the score
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `${correctAnswers} out of ${totalQuestions}`;

    // Display the answers
    const answersListElement = document.getElementById('answers-list');
    userAnswers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer';
        
        answerElement.innerHTML = `
            <p><strong>Question:</strong> ${answer.question}</p>
            <p><strong>Your Answer:</strong> <span class="${answer.selected === answer.correct ? 'correct' : 'incorrect'}">${answer.selected}</span></p>
            <p><strong>Correct Answer:</strong> <span class="correct">${answer.correct}</span></p>
        `;
        answersListElement.appendChild(answerElement);
    });

    // Back to quiz button functionality
    document.getElementById('back-to-quiz').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
