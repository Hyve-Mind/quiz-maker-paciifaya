// Create an array to store the questions
let questions = [];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the question and possible answers from the form
    const question = document.getElementById('question').value;
    const answers = Array.from(document.querySelectorAll('.answer'));

    // Get the index of the correct answer
    const correctAnswerIndex = answers.findIndex(answer => answer.checked);

    // Create an object to store the question and correct answer
    const questionObj = {
        question: question,
        answers: answers.map(answer => answer.value),
        correctAnswer: correctAnswerIndex
    };

    // Add the question object to the array
    questions.push(questionObj);

    // Clear the form
    document.getElementById('question').value = '';
    answers.forEach(answer => (answer.value = ''));
    answers[0].checked = true;

    // Display the questions
    displayQuestions();
}

// Function to display the questions
function displayQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';

    questions.forEach((question, index) => {
        // Create a new question container
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');

        // Create the question element
        const questionElement = document.createElement('h3');
        questionElement.textContent = `Question ${index + 1}: ${question.question}`;

        // Create the answers list
        const answersList = document.createElement('ul');
        question.answers.forEach((answer, answerIndex) => {
            const answerItem = document.createElement('li');
            answerItem.textContent = answer;
            if (answerIndex === question.correctAnswer) {
                answerItem.classList.add('correct-answer');
            }
            answersList.appendChild(answerItem);
        });

        // Append the question and answers to the question container
        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(answersList);

        // Append the question container to the questions container
        questionsContainer.appendChild(questionContainer);
    });
}

// Add event listener to the form submit event
const form = document.getElementById('question-form');
form.addEventListener('submit', handleSubmit);