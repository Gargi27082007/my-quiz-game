class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h3');
      this.question = createElement('h4');
      this.option1 = createElement('h5');
      this.option2 = createElement('h6');
      this.option3 = createElement('h7');
      this.option4 = createElement('h8');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("MY QUIZ");
      this.title.position(displayWidth/2 - 50, 0);
      this.question.html("1.WHICH IS THE LONGEST RIVER IN INDIA?")
      this.question.position(150, 80);
      this.option1.html("A. YAMUNA");
      this.option1.position(150, 100);
      this.option2.html("B. SATLUJ");
      this.option2.position(150, 120);
      this.option3.html("C. GANGA");
      this.option3.position(150, 140);
      this.option4.html("D. BRAMAPUTRA");
      this.option4.position(150, 160);
      
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);
      this.button.mousePressed(()=> {
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+= 1;
        contestant.index = contestantCount
        contestant.update();
        contestant.updateCount(contestantCount);
        
      })

     
    }
  }
  