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

function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();
    answered = true;

    $('currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
    for(var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({'data-index': i });
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }
    countdown();
    $('.thisChoice').on('click', function(){
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

function countdown(){
    seconds = 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown, 1000);
}

function showCountdown(){
    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage(){
    $('#currentQuestion').empty();
    $('.thisChoice').empty();
    $('.question').empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');

    if((userSelect == rightAnswerIndex) && (answered == true)){
        correctAnswer++;
        $('#message').html(messages.correct);
    } else if((userSelect != rightAnswerIndex) && (answered == true)){
        incorrectAnswer++;
        $('#message').html(messages.incorrect);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
    } else{
        unanswered++;
        $('#message').html(messages.endTime);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);

    }

    if(currentQuestion == (triviaQuestions.length-1)){
        setTimeout(scoreboard, 5000)
    } else{
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

