var userClickedPattern=[];
//choosing random color
var buttonColours  =["red", "blue", "green", "yellow"];

//random sequence
var gamePattern=[];

var level=0;

var started=false;

$(document).keypress(function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started=true;
        

    }



});


//user's input
$(".btn").on("click",function(){
    var userChosenColour= this.id ;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatepress(userChosenColour);

    checkAnswers(userClickedPattern.length-1);
    
    
});








//check answers
function checkAnswers(currentLevel){

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");

        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startover();
    }
  

}

function startover(){
    userClickedPattern=[];
    level=0;
    started=false;
    gamePattern=[];


}








function nextSequence(){
    
    userClickedPattern=[];
    
    level++;
    $("h1").text("Level "+ level);

    var randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


   
    
}


















//playing sound
function playSound(name){
    var sound= new Audio("./sounds/"+name+".mp3");
    sound.play();

}


//animation press
function animatepress(color){
    $('#'+color).addClass("pressed");



    setTimeout(function(){
        
        $('#'+color).removeClass("pressed");

    },100);
        
        

}









