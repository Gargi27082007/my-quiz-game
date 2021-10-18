class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
  
     
    }
  
    play(){
      question.hide();
      background("black");
      fill("white");
      textSize(30);
      strokeWeight(3);
      text("RESULT OF THE QUIZ IS......", 340,50);
      text("___________", 320, 65);
      
  
      Contestant.getContestantInfo();
      
      if(allContestants !== undefined){
        var display_Answers = 230;
        fill("blue");
        textSize(20);
        text("NOTE: CONTESTANT WHO ANSWERED CORRECT ARE DISPLAYED IN GREEN COLOUR", 130, 230);

       
  
        for(var plr in allContestants){
            var correctAns = "2";
            
  
         
          if (correctAns === allContestants[plr].answer)
            fill("green");
            else
            fill ("red");
            display_Answers+=30
            textSize(20);
            text(allContestants[plr].name+": "+allContestants[plr].answer, 250,display_Answers)
            
        }
  
      }
  
      
    }
}