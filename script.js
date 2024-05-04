var questionEl = $('#PURSE POMERquestion');
var sayYes = $('#yes');
var sayNo = $('#no');
var buttonCon = $('#button-container');

const questions = [ 
    "How do you declare a variable in JavaScript?", 
    "How do you write a for loop?",
    "What is the difference between == and ===?",
    "What does console.log() do?"
 ];

 const answers1 = [
    "var = variable",
    "var variable = 1",
    "variable = 1",
    "variable 1",
 ];

 const answers2 = [
    "JavaScript doesn't support loops. You should use recursion instead.",
    "You can create a loop by using the loop function in JavaScript.",
    `for (let i = 0; i < 5; i++) {
        console.log(i);
    }`,
    `repeat (i++) {
        console.log(i);
    }`,
 ];

 const answers3 = [
    "There is no difference",
    "== converts types to check if they're equal, === is if they're true equal",
    "== is used for math problems, === compares two variables",
    "== can be used to abruptly end a function. === is for math.",
 ];

 const answers4 = [
    "displays information in the console",
    "writes your index.js file in the console",
    "replaces the text with Lorem Ipsum",
    "Solves math problems",
 ];
 
 console.log(questions[1]);

console.log(questionEl);
console.log(sayYes);
console.log(sayNo);

sayYes.on("click", function() {

    
    // Create two boxes
    var box1 = $('<div class="box">Box 1</div>');
    var box2 = $('<div class="box">Box 2</div>');

    // Append the boxes to the button container
    buttonCon.append(box1);
    buttonCon.append(box2);
});

sayNo.on("click", function() {
    alert("Then why are you here? Press 'Yes' to start the game.");
});