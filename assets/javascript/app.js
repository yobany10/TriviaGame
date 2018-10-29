var triviaQuestions = [{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
},{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["1", "2", "3", "4"],
    answer: 0
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
    correct: "Correct!",
    incorrect: "Incorrect!",
    endTime: "Out of time!",
    finished: "Let's see how well you did."
}

$('#startButton').on('click', function(){
    $(this).hide();
    newGame();
});

$('#startOverButton').on('click', function(){
    $(this).hide();
    newGame();
});

function newGame(){
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}