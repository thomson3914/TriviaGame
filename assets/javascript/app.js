$(document).ready(function() {

    // creates the start button and initial screen
    function initialPage() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialPage();
    
    // triggers start
    $("body").on("click", ".start-button", function(event){
        makeHtml();
        timerWrapper();
    
    });
    
    // triggers .answer
    $("body").on("click", ".answer", function(event){

        selectedAnswer = $(this).text();
        
        if(selectedAnswer === correctAnswers[questionCounter]) {
            //alert("correct");
            clearInterval(countdownTimer);
            barkSound2.play();            
            userWin();
        }
        else {
            //alert("wrong answer!");
            clearInterval(countdownTimer);
            meowSound.play();
            userLoss();
        }
    }); 
    
    // triggers .reset-button
    $("body").on("click", ".reset-button", function(event){
        barkSound2.play();
        resetGame();
    }); 
    
    });  
    
    function userTimeOut() {
        unansweredTotal++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + 
        "</span></p>" + "<p class='text-center p-3'>You totally ran out of time!  The correct answer was: " + 
        correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong bt-2' src='assets/images/grumpy_cat.jpg'>";
    
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); 
    }
    
    function userWin() {
        correctTotal++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + 
        counter + "</span></p>" + "<p class='text-center py-3'>You are Totally Correct!"  + imageArray[questionCounter];
    
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function userLoss() {
        incorrectTotal++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + 
        counter + "</span></p>" + "<p class='text-center py-3'>Wrong! The correct answer is: "+ 
        correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong bt-2' src='assets/images/grumpyCat.gif'>";
    
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); 
    }
    
    function makeHtml() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" +
         questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + 
         answerArray[questionCounter][0] + "</p><p class='answer'>B. "+
         answerArray[questionCounter][1]+"</p><p class='answer'>C. "+
         answerArray[questionCounter][2]+"</p><p class='answer'>D. "+
         answerArray[questionCounter][3]+"</p>";
    
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        makeHtml();
        counter = 30;
        timerWrapper();
        }
        else {
            lastPage();
        }
    }
    
    function timerWrapper() {
        countdownTimer = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(countdownTimer);
                userTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }

    function lastPage() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + 
        counter + "</span></p>" + "<p class='text-center p-3'>All done, You're one Smart Puppy!" + 
        "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTotal + "</p>" + 
        "<p>Wrong Answers: " + incorrectTotal + "</p>" + "<p>Unanswered: " + unansweredTotal + 
        "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTotal = 0;
        incorrectTotal = 0;
        unansweredTotal = 0;
        counter = 30;
        makeHtml();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = [	"A Morkie is a Hypoallergenic Mix of which two Breeds?", 
                            "A GoldenDoodle is a Hypoallergenic Mix of which two Breeds?", 
                            "A Teddy Bear is a Hypoallergenic Mix of which two Breeds?",						
                            "A CavaPoo is a Hypoallergenic Mix of which two Breeds?", 
                            "A Shorkie is a Hypoallergenic Mix of which two Breeds?", 
                            "A Shnoodle is a Hypoallergenic Mix of which two Breeds?", 
                            "A LabraDoodle is a Hypoallergenic Mix of which two Breeds?", 
                            "A MaltiPoo is a Hypoallergenic Mix of which two Breeds?"];
    
    var answerArray = [	["Beagle & Rat Terrier", "Maltese & Yorkie", "Cocker Spaniel and Poodle", "Mini Schnauzer & Toy Poodle"], 
                        ["Golden Retriever & Standard Poodle", "Maltese & Yorkie", "Cocker Spaniel and Poodle", "Bulldog & Shih Tzu"], 
                        ["Beagle & Rat Terrier", "Maltese & Yorkie","Dachshund & PitBull", "Shih Tzu & Bichon"],
                         ["Maltese & Yorkie","Cocker Spaniel and Poodle", "Cavalier and Poodle", "Mini Schnauzer & Toy Poodle"], 
                         ["Shih Tzu and Yorkie", "Maltese & Yorkie", "Cocker Spaniel and Poodle", "Shih Tzu & Bichon"], 
                         ["Shih Tzu and Yorkie", "Beagle & Pitbull", "Cocker Spaniel and Shiba Inu", "Mini Schnauzer & Toy Poodle"], 
                         ["Beagle & Rat Terrier", "Maltese & Yorkie", "Labrador Retriever & Standard Poodle", "Shih Tzu & Bichon"], 
                         ["Maltese and Toy Poodle", "Maltese & Yorkie", "Cocker Spaniel and Bichon", "Shih Tzu & Bichon"]];
    
    var imageArray = ["<img class='center-block img-right'src='assets/images/morkie.gif'>", 
                        "<img class='center-block img-right' src='assets/images/goldendoodle.gif'>", 
                        "<img class='center-block img-right' src='assets/images/teddybear.gif'>", 
                        "<img class='center-block img-right' src='assets/images/cavapoo.gif'>", 
                        "<img class='center-block img-right' src='assets/images/shorkie.gif'>", 
                        "<img class='center-block img-right' src='assets/images/schnoodle.gif'>", 
                        "<img class='center-block img-right' src='assets/images/labradoodle.gif'>", 
                        "<img class='center-block img-right' src='assets/images/maltipoo.gif'>"];
    
    var correctAnswers = [	"B. Maltese & Yorkie", 
                            "A. Golden Retriever & Standard Poodle", 
                            "D. Shih Tzu & Bichon",
                            "C. Cavalier and Poodle", 
                            "A. Shih Tzu and Yorkie",						 
                            "D. Mini Schnauzer & Toy Poodle", 
                            "C. Labrador Retriever & Standard Poodle", 
                            "A. Maltese and Toy Poodle"];    
    
    
    var questionCounter = 0;
    var selecterAnswer;
    var countdownTimer;
    var correctTotal = 0;
    var incorrectTotal = 0;
    var unansweredTotal = 0;
    var meowSound = new Audio("assets/sound/Sad-cat.mp3");
    var barkSound2 = new Audio("assets/sound/bark2.mp3")