$(document).ready(function() {
    var questionEl = $('#question');
    var sayYes = $('#yes');
    var sayNo = $('#no');
    var buttonCon = $('#button-container');
    var timeEl = $('#time');
    var points = 0; // Variable to track points
    var timeRemaining = 99; // Initial time remaining

    const questions = [
        "How do you declare a variable in JavaScript?",
        "How do you write a for loop?",
        "What is the difference between == and ===?",
        "What does console.log() do?"
    ];

    const answers = [
        ["var = variable", "var variable = 1", "variable = 1", "variable 1"],
        ["JavaScript doesn't support loops. You should use recursion instead.", "You can create a loop by using the loop function in JavaScript.", `for (let i = 0; i < 5; i++) {
            console.log(i);
        }`, `repeat (i++) {
            console.log(i);
        }`],
        ["There is no difference", "== converts types to check if they're equal, === is if they're true equal", "== is used for math problems, === compares two variables", "== can be used to abruptly end a function. === is for math."],
        ["displays information in the console", "writes your index.js file in the console", "replaces the text with Lorem Ipsum", "Solves math problems"]
    ];

    const correctAnswers = [
        "var variable = 1",
        `for (let i = 0; i < 5; i++) {
            console.log(i);
        }`,
        "== converts types to check if they're equal, === is if they're true equal",
        "displays information in the console"
    ];

    var currentQuestionIndex = 0;

    // Function to start the timer
    function startTimer() {
        var timerInterval = setInterval(function() {
            timeRemaining--;
            timeEl.text(timeRemaining);
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                showLeaderboard();
            }
        }, 1000);
    }

    //// Function to display question and answer options
function displayQuestion() {
    questionEl.text(questions[currentQuestionIndex]);
    buttonCon.empty();
    
    // Shuffle the order of answer options
    var shuffledAnswers = shuffleArray(answers[currentQuestionIndex]);
    
    for (let i = 0; i < shuffledAnswers.length; i++) {
        const answer = shuffledAnswers[i];
        var answerBtn = $('<button class="answer-btn">' + answer + '</button>');
        buttonCon.append(answerBtn);
        answerBtn.on("click", function() {
            // Check if the clicked answer is correct
            if (answer === correctAnswers[currentQuestionIndex]) {
                points++; // Increment points for correct answer
            }
            // Move to the next question or show leaderboard
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                // Display leaderboard
                showLeaderboard();
            }
        });
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// Event listener for "Yes" button
sayYes.on("click", function() {
        startTimer(); // Start the timer when the game starts
        displayQuestion();
    });

// Event listener for "No" button
sayNo.on("click", function() {
        alert("Then why are you here? Press 'Yes' to start the game.");
    });

    // Function to display leaderboard and restart the game
    function showLeaderboard() {
        // Show leaderboard in a pop-up or a separate section
        alert("Quiz completed!\nYour total points: " + points + "\nTime remaining: " + timeRemaining);
        
        // Restart the game by reloading the page
        window.location.reload();
    }
});
