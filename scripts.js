// Game logic for "Codex: Code the World"
const submitButton = document.getElementById('submit-code');
const userCodeInput = document.getElementById('user-code');
const feedbackElement = document.getElementById('feedback');
const worldElement = document.getElementById('world');

// The challenges we will present
const challenges = [
    {
        description: "Fix the broken code to change the world.",
        solution: "console.log('World is balanced!');"
    },
    {
        description: "Modify the weather by changing the code.",
        solution: "document.body.style.backgroundColor = 'skyblue';"
    },
    {
        description: "Restore the landscape's color.",
        solution: "document.getElementById('world').style.backgroundColor = 'green';"
    }
];

let currentChallengeIndex = 0;

// Function to check the submitted code
function checkCode() {
    const userCode = userCodeInput.value.trim();
    const correctSolution = challenges[currentChallengeIndex].solution;

    if (userCode === correctSolution) {
        feedbackElement.textContent = "Well done! You've restored balance!";
        feedbackElement.style.color = "green";
        updateWorld();
        currentChallengeIndex++;

        if (currentChallengeIndex < challenges.length) {
            setTimeout(nextChallenge, 2000);
        } else {
            feedbackElement.textContent = "You have completed all challenges! Well done, Codex!";
        }
    } else {
        feedbackElement.textContent = "Oops! That didn't work. Try again.";
        feedbackElement.style.color = "red";
    }
}

// Function to update the world based on user progress
function updateWorld() {
    if (currentChallengeIndex === 1) {
        worldElement.style.backgroundColor = 'skyblue';
    } else if (currentChallengeIndex === 2) {
        worldElement.style.backgroundColor = 'green';
    }
}

// Function to move to the next challenge
function nextChallenge() {
    feedbackElement.textContent = `Next challenge: ${challenges[currentChallengeIndex].description}`;
    userCodeInput.value = '';
}

// Event listener for the submit button
submitButton.addEventListener('click', checkCode);

// Start the game
feedbackElement.textContent = `First challenge: ${challenges[currentChallengeIndex].description}`;
