var triviaQuestions = [{
    question: "How long does it take for sun rays to reach Earth?",
    answerList: ["8 minutes", "2 hours", "12 days", "5 years"],
    answer: 0
},{
    question: "Which is the largest planet in our solar system?",
    answerList: ["Earth", "Sun", "Jupiter", "Saturn"],
    answer: 2
},{
    question: "Which planet has the most volcanoes?",
    answerList: ["Venus", "Earth", "Sun", "Mars"],
    answer: 0
},{
    question: "When was the fist man-made object sent into space?",
    answerList: ["1982", "2001", "1957", "never"],
    answer: 2
},{
    question: "On Venus a day is longer than?",
    answerList: ["1 week(on Venus)", "4 months(on Venus)", "1 year(on Venus)", "11 years(on Venus"],
    answer: 2
},{
    question: "What is the name of Saturns largest moon?",
    answerList: ["Pandora", "Atlas", "Titan", "Hyperion"],
    answer: 2
},{
    question: "Who was the first person to walk on the moon?",
    answerList: ["Neil Armstrong", "David Scott", "Pete Conrad", "Michael Jackson"],
    answer: 0
},{
    question: "What is the closest planet to the sun?",
    answerList: ["Earth", "Saturn", "Venus", "Mercury"],
    answer: 3
},{
    question: "What is the hottest planet in our solar system?",
    answerList: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: 1
},{
    question: "Which of these is not a naturally occuring smell in space?",
    answerList: ["Hot metal", "Barbecue", "Diesel fumes", "Spearmint"],
    answer: 3
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
    correct: "Correct!",
    incorrect: "Incorrect!",
    endTime: "Out of time!",
    finished: "<h1>Let's see how well you did.</h1>"
}

$('.startButton').on('click', function(){
    $(this).hide();
    newGame();
});

$('.startOverButton').on('click', function(){
    $(this).hide();
    newGame();
});

function newGame(){
    $('.finalMessage').empty();
    $('.correctAnswers').empty();
    $('.incorrectAnswers').empty();
    $('.unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $('.message').empty();
    $('.correctedAnswer').empty();
    $('.gif').empty();
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
    $('.timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    time = setInterval(showCountdown, 1000);
}

function showCountdown(){
    seconds--;
    $('.timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage(){
    $('.currentQuestion').empty();
    $('.thisChoice').empty();
    $('.question').empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('.gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');

    if((userSelect == rightAnswerIndex) && (answered == true)){
        correctAnswer++;
        $('.message').html(messages.correct);
    } else if((userSelect != rightAnswerIndex) && (answered == true)){
        incorrectAnswer++;
        $('.message').html(messages.incorrect);
        $('.correctedAnswer').html('The correct answer was: ' + rightAnswerText);
    } else{
        unanswered++;
        $('.message').html(messages.endTime);
        $('.correctedAnswer').html('The correct answer was: ' + rightAnswerText);

    }

    if(currentQuestion == (triviaQuestions.length-1)){
        setTimeout(scoreboard, 5000)
    } else{
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function scoreboard(){
    $('.timeLeft').empty();
    $('.message').empty();
    $('.correctedAnswer').empty();
    $('.gif').empty();

    $('.finalMessage').html(messages.finished);
    $('.correctAnswers').html("Correct Answers: " + correctAnswer);
    $('.incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('.unanswered').html("Unanswered: " + unanswered);
    $('.startOverButton').addClass('reset');
    $('.startOverButton').show();
    $('.startOverButton').html('Start Over?');
}